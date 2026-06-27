import { Response } from 'express';
import { AuthRequest } from '../../common/types';
export declare function calculate(req: AuthRequest, res: Response): Promise<void>;
export declare function saveEstimate(req: AuthRequest, res: Response): Promise<void>;
export declare function convertToTask(req: AuthRequest, res: Response): Promise<void>;
export declare function getHistory(req: AuthRequest, res: Response): Promise<void>;
export declare function getEstimateById(req: AuthRequest, res: Response): Promise<void>;
