"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTasks = getTasks;
exports.getTaskById = getTaskById;
exports.createTask = createTask;
exports.updateTask = updateTask;
exports.deleteTask = deleteTask;
exports.markTaskCompleted = markTaskCompleted;
const prisma_1 = require("../../config/prisma");
const AppError_1 = require("../../common/errors/AppError");
const pagination_1 = require("../../common/utils/pagination");
async function getTasks(userId, query) {
    const { page, limit, skip } = (0, pagination_1.parsePagination)(query.page, query.limit);
    const where = {
        userId,
        ...(query.status && { status: query.status }),
        ...(query.priority && { priority: query.priority }),
        ...(query.categoryId && { categoryId: query.categoryId }),
    };
    const orderBy = query.sortBy === 'deadline'
        ? { deadline: (query.order ?? 'desc') }
        : { createdAt: (query.order ?? 'desc') };
    const [tasks, total] = await Promise.all([
        prisma_1.prisma.task.findMany({
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
        prisma_1.prisma.task.count({ where }),
    ]);
    return {
        tasks,
        pagination: (0, pagination_1.buildPaginationMeta)(total, page, limit),
    };
}
async function getTaskById(userId, taskId) {
    const task = await prisma_1.prisma.task.findUnique({
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
        throw new AppError_1.NotFoundError('Task not found');
    }
    if (task.userId !== userId) {
        throw new AppError_1.ForbiddenError('You do not have permission to view this task');
    }
    return task;
}
async function createTask(userId, input) {
    if (input.categoryId) {
        await validateCategoryOwnership(userId, input.categoryId);
    }
    return prisma_1.prisma.task.create({
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
async function updateTask(userId, taskId, input) {
    const task = await prisma_1.prisma.task.findUnique({ where: { id: taskId } });
    if (!task) {
        throw new AppError_1.NotFoundError('Task not found');
    }
    if (task.userId !== userId) {
        throw new AppError_1.ForbiddenError('You do not have permission to update this task');
    }
    if (input.categoryId) {
        await validateCategoryOwnership(userId, input.categoryId);
    }
    return prisma_1.prisma.task.update({
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
async function deleteTask(userId, taskId) {
    const task = await prisma_1.prisma.task.findUnique({ where: { id: taskId } });
    if (!task) {
        throw new AppError_1.NotFoundError('Task not found');
    }
    if (task.userId !== userId) {
        throw new AppError_1.ForbiddenError('You do not have permission to delete this task');
    }
    await prisma_1.prisma.task.delete({ where: { id: taskId } });
}
async function markTaskCompleted(userId, taskId) {
    const task = await prisma_1.prisma.task.findUnique({ where: { id: taskId } });
    if (!task) {
        throw new AppError_1.NotFoundError('Task not found');
    }
    if (task.userId !== userId) {
        throw new AppError_1.ForbiddenError('You do not have permission to update this task');
    }
    if (task.status === 'COMPLETED') {
        throw new AppError_1.BadRequestError('Task is already completed');
    }
    return prisma_1.prisma.task.update({
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
async function validateCategoryOwnership(userId, categoryId) {
    const category = await prisma_1.prisma.category.findUnique({
        where: { id: categoryId },
    });
    if (!category) {
        throw new AppError_1.NotFoundError('Category not found');
    }
    if (category.userId !== userId) {
        throw new AppError_1.ForbiddenError('You do not have permission to use this category');
    }
}
//# sourceMappingURL=task.service.js.map