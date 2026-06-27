import { prisma } from '../../config/prisma';
import { NotFoundError, ForbiddenError } from '../../common/errors/AppError';
import type { CreateCategoryInput, UpdateCategoryInput } from './category.schema';

export async function getCategories(userId: string) {
  return prisma.category.findMany({
    where: { userId },
    orderBy: { createdAt: 'asc' },
    select: {
      id: true,
      name: true,
      createdAt: true,
    },
  });
}

export async function createCategory(userId: string, input: CreateCategoryInput) {
  return prisma.category.create({
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

export async function updateCategory(
  userId: string,
  categoryId: string,
  input: UpdateCategoryInput
) {
  const category = await prisma.category.findUnique({
    where: { id: categoryId },
  });

  if (!category) {
    throw new NotFoundError('Category not found');
  }

  if (category.userId !== userId) {
    throw new ForbiddenError('You do not have permission to update this category');
  }

  return prisma.category.update({
    where: { id: categoryId },
    data: { name: input.name },
    select: {
      id: true,
      name: true,
      createdAt: true,
    },
  });
}

export async function deleteCategory(userId: string, categoryId: string) {
  const category = await prisma.category.findUnique({
    where: { id: categoryId },
  });

  if (!category) {
    throw new NotFoundError('Category not found');
  }

  if (category.userId !== userId) {
    throw new ForbiddenError('You do not have permission to delete this category');
  }

  await prisma.category.delete({
    where: { id: categoryId },
  });
}
