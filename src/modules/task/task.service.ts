import { prisma } from '../../config/prisma';
import { NotFoundError, ForbiddenError, BadRequestError } from '../../common/errors/AppError';
import { parsePagination, buildPaginationMeta } from '../../common/utils/pagination';
import type { CreateTaskInput, UpdateTaskInput, TaskQueryInput } from './task.schema';

export async function getTasks(userId: string, query: TaskQueryInput) {
  const { page, limit, skip } = parsePagination(query.page, query.limit);

  const where = {
    userId,
    ...(query.status && { status: query.status as 'PENDING' | 'COMPLETED' }),
    ...(query.priority && { priority: query.priority as 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT' }),
    ...(query.categoryId && { categoryId: query.categoryId }),
  };

  const orderBy =
    query.sortBy === 'deadline'
      ? { deadline: (query.order ?? 'desc') as 'asc' | 'desc' }
      : { createdAt: (query.order ?? 'desc') as 'asc' | 'desc' };

  const [tasks, total] = await Promise.all([
    prisma.task.findMany({
      where,
      orderBy,
      skip,
      take: limit,
      select: {
        id: true,
        title: true,
        description: true,
        priority: true,
        status: true,
        deadline: true,
        createdAt: true,
        updatedAt: true,
        category: {
          select: { id: true, name: true },
        },
        estimateHistory: {
          select: {
            id: true,
            productName: true,
            minimumRecommendedPrice: true,
            maximumRecommendedPrice: true,
          },
        },
      },
    }),
    prisma.task.count({ where }),
  ]);

  return {
    tasks,
    pagination: buildPaginationMeta(total, page, limit),
  };
}

export async function getTaskById(userId: string, taskId: string) {
  const task = await prisma.task.findUnique({
    where: { id: taskId },
    select: {
      id: true,
      title: true,
      description: true,
      priority: true,
      status: true,
      deadline: true,
      createdAt: true,
      updatedAt: true,
      userId: true,
      category: {
        select: { id: true, name: true },
      },
      estimateHistory: {
        select: {
          id: true,
          productName: true,
          sizeCm: true,
          complexity: true,
          estimatedHours: true,
          estimatedMaterialCost: true,
          minimumRecommendedPrice: true,
          maximumRecommendedPrice: true,
        },
      },
    },
  });

  if (!task) {
    throw new NotFoundError('Task not found');
  }

  if (task.userId !== userId) {
    throw new ForbiddenError('You do not have permission to view this task');
  }

  return task;
}

export async function createTask(userId: string, input: CreateTaskInput) {
  if (input.categoryId) {
    await validateCategoryOwnership(userId, input.categoryId);
  }

  return prisma.task.create({
    data: {
      title: input.title,
      description: input.description,
      priority: input.priority,
      deadline: input.deadline ? new Date(input.deadline) : undefined,
      categoryId: input.categoryId,
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
      updatedAt: true,
      category: {
        select: { id: true, name: true },
      },
    },
  });
}

export async function updateTask(
  userId: string,
  taskId: string,
  input: UpdateTaskInput
) {
  const task = await prisma.task.findUnique({ where: { id: taskId } });

  if (!task) {
    throw new NotFoundError('Task not found');
  }

  if (task.userId !== userId) {
    throw new ForbiddenError('You do not have permission to update this task');
  }

  if (input.categoryId) {
    await validateCategoryOwnership(userId, input.categoryId);
  }

  return prisma.task.update({
    where: { id: taskId },
    data: {
      ...(input.title !== undefined && { title: input.title }),
      ...(input.description !== undefined && { description: input.description }),
      ...(input.priority !== undefined && { priority: input.priority }),
      ...(input.status !== undefined && { status: input.status }),
      ...(input.deadline !== undefined && {
        deadline: input.deadline ? new Date(input.deadline) : null,
      }),
      ...(input.categoryId !== undefined && { categoryId: input.categoryId }),
    },
    select: {
      id: true,
      title: true,
      description: true,
      priority: true,
      status: true,
      deadline: true,
      createdAt: true,
      updatedAt: true,
      category: {
        select: { id: true, name: true },
      },
    },
  });
}

export async function deleteTask(userId: string, taskId: string) {
  const task = await prisma.task.findUnique({ where: { id: taskId } });

  if (!task) {
    throw new NotFoundError('Task not found');
  }

  if (task.userId !== userId) {
    throw new ForbiddenError('You do not have permission to delete this task');
  }

  await prisma.task.delete({ where: { id: taskId } });
}

export async function markTaskCompleted(userId: string, taskId: string) {
  const task = await prisma.task.findUnique({ where: { id: taskId } });

  if (!task) {
    throw new NotFoundError('Task not found');
  }

  if (task.userId !== userId) {
    throw new ForbiddenError('You do not have permission to update this task');
  }

  if (task.status === 'COMPLETED') {
    throw new BadRequestError('Task is already completed');
  }

  return prisma.task.update({
    where: { id: taskId },
    data: { status: 'COMPLETED' },
    select: {
      id: true,
      title: true,
      status: true,
      updatedAt: true,
    },
  });
}

async function validateCategoryOwnership(
  userId: string,
  categoryId: string
): Promise<void> {
  const category = await prisma.category.findUnique({
    where: { id: categoryId },
  });

  if (!category) {
    throw new NotFoundError('Category not found');
  }

  if (category.userId !== userId) {
    throw new ForbiddenError('You do not have permission to use this category');
  }
}
