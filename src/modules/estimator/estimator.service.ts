import { prisma } from '../../config/prisma';
import {
  COMPLEXITY_BASE,
  SIZE_MULTIPLIERS,
  HOURLY_RATE_IDR,
  PRICE_MARGIN_MIN,
  PRICE_MARGIN_MAX,
  CROCHET_BUSINESS_CATEGORY,
} from '../../common/constants';
import { parsePagination, buildPaginationMeta } from '../../common/utils/pagination';
import { NotFoundError } from '../../common/errors/AppError';
import type {
  CalculateEstimateInput,
  SaveEstimateInput,
  ConvertToTaskInput,
} from './estimator.schema';

export interface EstimateResult {
  estimatedHours: number;
  estimatedMaterialCost: number;
  minimumRecommendedPrice: number;
  maximumRecommendedPrice: number;
}

// ─── Core Estimation Logic ────────────────────────────────────────────────────

export function calculateEstimate(input: CalculateEstimateInput): EstimateResult {
  const base = COMPLEXITY_BASE[input.complexity];

  const sizeMultiplierEntry = SIZE_MULTIPLIERS.find(
    (entry) => input.sizeCm <= entry.maxCm
  );
  const sizeMultiplier = sizeMultiplierEntry?.multiplier ?? 3.0;

  // Average of min/max hours, then apply size multiplier
  const avgHours = (base.minHours + base.maxHours) / 2;
  const estimatedHours = Math.round(avgHours * sizeMultiplier * 10) / 10;

  const estimatedMaterialCost = Math.round(base.baseMaterial * sizeMultiplier);

  const laborCost = estimatedHours * HOURLY_RATE_IDR;
  const totalCost = laborCost + estimatedMaterialCost;

  const minimumRecommendedPrice = Math.round(totalCost * PRICE_MARGIN_MIN);
  const maximumRecommendedPrice = Math.round(totalCost * PRICE_MARGIN_MAX);

  return {
    estimatedHours,
    estimatedMaterialCost,
    minimumRecommendedPrice,
    maximumRecommendedPrice,
  };
}

// ─── Save Estimate Only ───────────────────────────────────────────────────────

export async function saveEstimate(userId: string, input: SaveEstimateInput) {
  const result = calculateEstimate(input);

  const estimate = await prisma.priceEstimateHistory.create({
    data: {
      productName: input.productName,
      sizeCm: input.sizeCm,
      complexity: input.complexity,
      estimatedHours: result.estimatedHours,
      estimatedMaterialCost: result.estimatedMaterialCost,
      minimumRecommendedPrice: result.minimumRecommendedPrice,
      maximumRecommendedPrice: result.maximumRecommendedPrice,
      userId,
    },
  });

  return estimate;
}

// ─── Convert Estimate to Task ─────────────────────────────────────────────────

export async function convertEstimateToTask(
  userId: string,
  input: ConvertToTaskInput
) {
  const result = calculateEstimate(input);

  // Find the user's "Crochet Business" category
  const crochetCategory = await prisma.category.findFirst({
    where: {
      userId,
      name: CROCHET_BUSINESS_CATEGORY,
    },
  });

  const formattedMin = formatRupiah(result.minimumRecommendedPrice);
  const formattedMax = formatRupiah(result.maximumRecommendedPrice);

  const taskTitle = `Produce Amigurumi ${input.productName}`;
  const taskDescription =
    `Recommended Price:\n${formattedMin} - ${formattedMax}\n\n` +
    `Estimated Working Hours:\n${result.estimatedHours} Hours`;

  // Create estimate and task in a transaction
  const [estimate, task] = await prisma.$transaction(async (tx) => {
    const newEstimate = await tx.priceEstimateHistory.create({
      data: {
        productName: input.productName,
        sizeCm: input.sizeCm,
        complexity: input.complexity,
        estimatedHours: result.estimatedHours,
        estimatedMaterialCost: result.estimatedMaterialCost,
        minimumRecommendedPrice: result.minimumRecommendedPrice,
        maximumRecommendedPrice: result.maximumRecommendedPrice,
        userId,
      },
    });

    const newTask = await tx.task.create({
      data: {
        title: taskTitle,
        description: taskDescription,
        priority: input.priority ?? 'LOW',
        deadline: input.deadline ? new Date(input.deadline) : undefined,
        categoryId: crochetCategory?.id ?? undefined,
        estimateHistoryId: newEstimate.id,
        userId,
      },
      select: {
        id: true,
        title: true,
        description: true,
        priority: true,
        status: true,
        deadline: true,
        createdAt: true,
        category: {
          select: { id: true, name: true },
        },
      },
    });

    return [newEstimate, newTask];
  });

  return { estimate, task };
}

// ─── Get Estimate History ─────────────────────────────────────────────────────

export async function getEstimateHistory(
  userId: string,
  pageStr?: string,
  limitStr?: string
) {
  const { page, limit, skip } = parsePagination(pageStr, limitStr);

  const [estimates, total] = await Promise.all([
    prisma.priceEstimateHistory.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      skip,
      take: limit,
    }),
    prisma.priceEstimateHistory.count({ where: { userId } }),
  ]);

  return {
    estimates,
    pagination: buildPaginationMeta(total, page, limit),
  };
}

// ─── Get Single Estimate ──────────────────────────────────────────────────────

export async function getEstimateById(userId: string, estimateId: string) {
  const estimate = await prisma.priceEstimateHistory.findUnique({
    where: { id: estimateId },
    include: {
      tasks: {
        select: { id: true, title: true, status: true },
      },
    },
  });

  if (!estimate) {
    throw new NotFoundError('Estimate not found');
  }

  if (estimate.userId !== userId) {
    throw new NotFoundError('Estimate not found');
  }

  return estimate;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatRupiah(amount: number): string {
  return `Rp${amount.toLocaleString('id-ID')}`;
}
