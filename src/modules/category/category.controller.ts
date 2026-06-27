import { Response } from 'express';
import { sendSuccess } from '../../common/utils/response';
import { AuthRequest } from '../../common/types';
import * as categoryService from './category.service';
import type { CreateCategoryInput, UpdateCategoryInput } from './category.schema';

export async function getCategories(req: AuthRequest, res: Response): Promise<void> {
  const userId = req.user!.id;
  const categories = await categoryService.getCategories(userId);
  sendSuccess(res, 'Categories retrieved successfully', categories);
}

export async function createCategory(req: AuthRequest, res: Response): Promise<void> {
  const userId = req.user!.id;
  const input = req.body as CreateCategoryInput;
  const category = await categoryService.createCategory(userId, input);
  sendSuccess(res, 'Category created successfully', category, 201);
}

export async function updateCategory(req: AuthRequest, res: Response): Promise<void> {
  const userId = req.user!.id;
  const id = req.params['id'] as string;
  const input = req.body as UpdateCategoryInput;
  const category = await categoryService.updateCategory(userId, id, input);
  sendSuccess(res, 'Category updated successfully', category);
}

export async function deleteCategory(req: AuthRequest, res: Response): Promise<void> {
  const userId = req.user!.id;
  const id = req.params['id'] as string;
  await categoryService.deleteCategory(userId, id);
  sendSuccess(res, 'Category deleted successfully', null);
}
