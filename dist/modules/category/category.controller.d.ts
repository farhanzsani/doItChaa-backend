import { Response } from 'express';
import { AuthRequest } from '../../common/types';
export declare function getCategories(req: AuthRequest, res: Response): Promise<void>;
export declare function createCategory(req: AuthRequest, res: Response): Promise<void>;
export declare function updateCategory(req: AuthRequest, res: Response): Promise<void>;
export declare function deleteCategory(req: AuthRequest, res: Response): Promise<void>;
