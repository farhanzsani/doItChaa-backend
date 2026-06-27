import { Response, NextFunction } from 'express';
import { AuthRequest } from '../../common/types';
export declare class HppController {
    calculateHpp(req: AuthRequest, res: Response, next: NextFunction): Promise<void>;
    saveHppCalculation(req: AuthRequest, res: Response, next: NextFunction): Promise<void>;
    getHppCalculations(req: AuthRequest, res: Response, next: NextFunction): Promise<void>;
    getHppCalculationById(req: AuthRequest, res: Response, next: NextFunction): Promise<void>;
    deleteHppCalculation(req: AuthRequest, res: Response, next: NextFunction): Promise<void>;
}
export declare const hppController: HppController;
