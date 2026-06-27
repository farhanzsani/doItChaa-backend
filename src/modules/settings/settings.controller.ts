import { Request, Response, NextFunction } from 'express';
import { settingsService } from './settings.service';
import { updateSettingsSchema } from './settings.schema';

export class SettingsController {
  async getSettings(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user!.id;

      const settings = await settingsService.getSettings(userId);

      res.json({
        success: true,
        data: settings,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateSettings(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user!.id;
      const validatedData = updateSettingsSchema.parse(req.body);

      const settings = await settingsService.updateSettings(userId, validatedData);

      res.json({
        success: true,
        data: settings,
      });
    } catch (error) {
      next(error);
    }
  }
}

export const settingsController = new SettingsController();
