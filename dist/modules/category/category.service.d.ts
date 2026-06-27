import type { CreateCategoryInput, UpdateCategoryInput } from './category.schema';
export declare function getCategories(userId: string): Promise<any>;
export declare function createCategory(userId: string, input: CreateCategoryInput): Promise<any>;
export declare function updateCategory(userId: string, categoryId: string, input: UpdateCategoryInput): Promise<any>;
export declare function deleteCategory(userId: string, categoryId: string): Promise<void>;
