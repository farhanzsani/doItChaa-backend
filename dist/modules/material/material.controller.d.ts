import { Response, NextFunction } from 'express';
import { AuthRequest } from '../../common/types';
export declare class MaterialController {
    createMaterial(req: AuthRequest, res: Response, next: NextFunction): Promise<void>;
    getMaterials(req: AuthRequest, res: Response, next: NextFunction): Promise<void>;
    getMaterialById(req: AuthRequest, res: Response, next: NextFunction): Promise<void>;
    updateMaterial(req: AuthRequest, res: Response, next: NextFunction): Promise<void>;
    deleteMaterial(req: AuthRequest, res: Response, next: NextFunction): Promise<void>;
}
export declare const materialController: MaterialController;
