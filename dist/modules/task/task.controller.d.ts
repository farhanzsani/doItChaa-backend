import { Response } from 'express';
import { AuthRequest } from '../../common/types';
export declare function getTasks(req: AuthRequest, res: Response): Promise<void>;
export declare function getTaskById(req: AuthRequest, res: Response): Promise<void>;
export declare function createTask(req: AuthRequest, res: Response): Promise<void>;
export declare function updateTask(req: AuthRequest, res: Response): Promise<void>;
export declare function deleteTask(req: AuthRequest, res: Response): Promise<void>;
export declare function markTaskCompleted(req: AuthRequest, res: Response): Promise<void>;
