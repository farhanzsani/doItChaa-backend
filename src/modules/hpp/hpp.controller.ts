import { Response, NextFunction } from 'express';
import { AuthRequest } from '../../common/types';
import { hppService } from './hpp.service';
import { calculateHppSchema, queryHppSchema } from './hpp.schema';

export class HppController {
  async calculateHpp(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const userId = req.user!.id;
      const validatedData = calculateHppSchema.parse(req.body);

      const result = await hppService.calculateHpp(userId, validatedData);

      res.json({
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async saveHppCalculation(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const userId = req.user!.id;
      const validatedData = calculateHppSchema.parse(req.body);

      const result = await hppService.saveHppCalculation(userId, validatedData);

      res.status(201).json({
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async getHppCalculations(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const userId = req.user!.id;
      const query = queryHppSchema.parse(req.query);

      const result = await hppService.getHppCalculations(userId, query);

      res.json({
        success: true,
        data: result.data,
        pagination: result.pagination,
      });
    } catch (error) {
      next(error);
    }
  }

  async getHppCalculationById(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const userId = req.user!.id;
      const id = req.params['id'] as string;

      const result = await hppService.getHppCalculationById(userId, id);

      res.json({
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteHppCalculation(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const userId = req.user!.id;
      const id = req.params['id'] as string;

      const result = await hppService.deleteHppCalculation(userId, id);

      res.json({
        success: true,
        message: result.message,
      });
    } catch (error) {
      next(error);
    }
  }
}

export const hppController = new HppController();
