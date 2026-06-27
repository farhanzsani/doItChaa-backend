import { Response, NextFunction } from 'express';
import { AuthRequest } from '../../common/types';
export declare class SettingsController {
    getSettings(req: AuthRequest, res: Response, next: NextFunction): Promise<void>;
    updateSettings(req: AuthRequest, res: Response, next: NextFunction): Promise<void>;
}
export declare const settingsController: SettingsController;
