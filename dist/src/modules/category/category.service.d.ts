import type { CreateCategoryInput, UpdateCategoryInput } from './category.schema';
export declare function getCategories(userId: string): Promise<{
    id: string;
    createdAt: Date;
    name: string;
}[]>;
export declare function createCategory(userId: string, input: CreateCategoryInput): Promise<{
    id: string;
    createdAt: Date;
    name: string;
}>;
export declare function updateCategory(userId: string, categoryId: string, input: UpdateCategoryInput): Promise<{
    id: string;
    createdAt: Date;
    name: string;
}>;
export declare function deleteCategory(userId: string, categoryId: string): Promise<void>;
