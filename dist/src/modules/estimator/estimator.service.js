"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateEstimate = calculateEstimate;
exports.saveEstimate = saveEstimate;
exports.convertEstimateToTask = convertEstimateToTask;
exports.getEstimateHistory = getEstimateHistory;
exports.getEstimateById = getEstimateById;
const prisma_1 = require("../../config/prisma");
const constants_1 = require("../../common/constants");
const pagination_1 = require("../../common/utils/pagination");
const AppError_1 = require("../../common/errors/AppError");
// ─── Core Estimation Logic ────────────────────────────────────────────────────
function calculateEstimate(input) {
    const base = constants_1.COMPLEXITY_BASE[input.complexity];
    const sizeMultiplierEntry = constants_1.SIZE_MULTIPLIERS.find((entry) => input.sizeCm <= entry.maxCm);
    const sizeMultiplier = sizeMultiplierEntry?.multiplier ?? 3.0;
    // Average of min/max hours, then apply size multiplier
    const avgHours = (base.minHours + base.maxHours) / 2;
    const estimatedHours = Math.round(avgHours * sizeMultiplier * 10) / 10;
    const estimatedMaterialCost = Math.round(base.baseMaterial * sizeMultiplier);
    const laborCost = estimatedHours * constants_1.HOURLY_RATE_IDR;
    const totalCost = laborCost + estimatedMaterialCost;
    const minimumRecommendedPrice = Math.round(totalCost * constants_1.PRICE_MARGIN_MIN);
    const maximumRecommendedPrice = Math.round(totalCost * constants_1.PRICE_MARGIN_MAX);
    return {
        estimatedHours,
        estimatedMaterialCost,
        minimumRecommendedPrice,
        maximumRecommendedPrice,
    };
}
// ─── Save Estimate Only ───────────────────────────────────────────────────────
async function saveEstimate(userId, input) {
    const result = calculateEstimate(input);
    const estimate = await prisma_1.prisma.priceEstimateHistory.create({
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
async function convertEstimateToTask(userId, input) {
    const result = calculateEstimate(input);
    // Find the user's "Crochet Business" category
    const crochetCategory = await prisma_1.prisma.category.findFirst({
        where: {
            userId,
            name: constants_1.CROCHET_BUSINESS_CATEGORY,
        },
    });
    const formattedMin = formatRupiah(result.minimumRecommendedPrice);
    const formattedMax = formatRupiah(result.maximumRecommendedPrice);
    const taskTitle = `Produce Amigurumi ${input.productName}`;
    const taskDescription = `Recommended Price:\n${formattedMin} - ${formattedMax}\n\n` +
        `Estimated Working Hours:\n${result.estimatedHours} Hours`;
    // Create estimate and task in a transaction
    const [estimate, task] = await prisma_1.prisma.$transaction(async (tx) => {
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
async function getEstimateHistory(userId, pageStr, limitStr) {
    const { page, limit, skip } = (0, pagination_1.parsePagination)(pageStr, limitStr);
    const [estimates, total] = await Promise.all([
        prisma_1.prisma.priceEstimateHistory.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
            skip,
            take: limit,
        }),
        prisma_1.prisma.priceEstimateHistory.count({ where: { userId } }),
    ]);
    return {
        estimates,
        pagination: (0, pagination_1.buildPaginationMeta)(total, page, limit),
    };
}
// ─── Get Single Estimate ──────────────────────────────────────────────────────
async function getEstimateById(userId, estimateId) {
    const estimate = await prisma_1.prisma.priceEstimateHistory.findUnique({
        where: { id: estimateId },
        include: {
            tasks: {
                select: { id: true, title: true, status: true },
            },
        },
    });
    if (!estimate) {
        throw new AppError_1.NotFoundError('Estimate not found');
    }
    if (estimate.userId !== userId) {
        throw new AppError_1.NotFoundError('Estimate not found');
    }
    return estimate;
}
// ─── Helpers ──────────────────────────────────────────────────────────────────
function formatRupiah(amount) {
    return `Rp${amount.toLocaleString('id-ID')}`;
}
//# sourceMappingURL=estimator.service.js.map