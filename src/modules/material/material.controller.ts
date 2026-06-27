import { Request, Response, NextFunction } from 'express';
import { materialService } from './material.service';
import {
  createMaterialSchema,
  updateMaterialSchema,
  queryMaterialsSchema,
} from './material.schema';

export class MaterialController {
  async createMaterial(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user!.id;
      const validatedData = createMaterialSchema.parse(req.body);

      const material = await materialService.createMaterial(userId, validatedData);

      res.status(201).json({
        success: true,
        data: material,
      });
    } catch (error) {
      next(error);
    }
  }

  async getMaterials(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user!.id;
      const query = queryMaterialsSchema.parse(req.query);

      const result = await materialService.getMaterials(userId, query);

      res.json({
        success: true,
        data: result.data,
        pagination: result.pagination,
      });
    } catch (error) {
      next(error);
    }
  }

  async getMaterialById(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user!.id;
      const { id } = req.params;

      const material = await materialService.getMaterialById(userId, id);

      res.json({
        success: true,
        data: material,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateMaterial(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user!.id;
      const { id } = req.params;
      const validatedData = updateMaterialSchema.parse(req.body);

      const material = await materialService.updateMaterial(userId, id, validatedData);

      res.json({
        success: true,
        data: material,
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteMaterial(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user!.id;
      const { id } = req.params;

      const result = await materialService.deleteMaterial(userId, id);

      res.json({
        success: true,
        message: result.message,
      });
    } catch (error) {
      next(error);
    }
  }
}

export const materialController = new MaterialController();
