"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategories = getCategories;
exports.createCategory = createCategory;
exports.updateCategory = updateCategory;
exports.deleteCategory = deleteCategory;
const prisma_1 = require("../../config/prisma");
const AppError_1 = require("../../common/errors/AppError");
async function getCategories(userId) {
    return prisma_1.prisma.category.findMany({
        where: { userId },
        orderBy: { createdAt: 'asc' },
        select: {
            id: true,
            name: true,
            createdAt: true,
        },
    });
}
async function createCategory(userId, input) {
    return prisma_1.prisma.category.create({
        data: {
            name: input.name,
            userId,
        },
        select: {
            id: true,
            name: true,
            createdAt: true,
        },
    });
}
async function updateCategory(userId, categoryId, input) {
    const category = await prisma_1.prisma.category.findUnique({
        where: { id: categoryId },
    });
    if (!category) {
        throw new AppError_1.NotFoundError('Category not found');
    }
    if (category.userId !== userId) {
        throw new AppError_1.ForbiddenError('You do not have permission to update this category');
    }
    return prisma_1.prisma.category.update({
        where: { id: categoryId },
        data: { name: input.name },
        select: {
            id: true,
            name: true,
            createdAt: true,
        },
    });
}
async function deleteCategory(userId, categoryId) {
    const category = await prisma_1.prisma.category.findUnique({
        where: { id: categoryId },
    });
    if (!category) {
        throw new AppError_1.NotFoundError('Category not found');
    }
    if (category.userId !== userId) {
        throw new AppError_1.ForbiddenError('You do not have permission to delete this category');
    }
    await prisma_1.prisma.category.delete({
        where: { id: categoryId },
    });
}
//# sourceMappingURL=category.service.js.map