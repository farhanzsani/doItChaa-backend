"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.materialController = exports.MaterialController = void 0;
const material_service_1 = require("./material.service");
const material_schema_1 = require("./material.schema");
class MaterialController {
    async createMaterial(req, res, next) {
        try {
            const userId = req.user.id;
            const validatedData = material_schema_1.createMaterialSchema.parse(req.body);
            const material = await material_service_1.materialService.createMaterial(userId, validatedData);
            res.status(201).json({
                success: true,
                data: material,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getMaterials(req, res, next) {
        try {
            const userId = req.user.id;
            const query = material_schema_1.queryMaterialsSchema.parse(req.query);
            const result = await material_service_1.materialService.getMaterials(userId, query);
            res.json({
                success: true,
                data: result.data,
                pagination: result.pagination,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getMaterialById(req, res, next) {
        try {
            const userId = req.user.id;
            const id = req.params['id'];
            const material = await material_service_1.materialService.getMaterialById(userId, id);
            res.json({
                success: true,
                data: material,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async updateMaterial(req, res, next) {
        try {
            const userId = req.user.id;
            const id = req.params['id'];
            const validatedData = material_schema_1.updateMaterialSchema.parse(req.body);
            const material = await material_service_1.materialService.updateMaterial(userId, id, validatedData);
            res.json({
                success: true,
                data: material,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async deleteMaterial(req, res, next) {
        try {
            const userId = req.user.id;
            const id = req.params['id'];
            const result = await material_service_1.materialService.deleteMaterial(userId, id);
            res.json({
                success: true,
                message: result.message,
            });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.MaterialController = MaterialController;
exports.materialController = new MaterialController();
//# sourceMappingURL=material.controller.js.map