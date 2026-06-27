"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hppController = exports.HppController = void 0;
const hpp_service_1 = require("./hpp.service");
const hpp_schema_1 = require("./hpp.schema");
class HppController {
    async calculateHpp(req, res, next) {
        try {
            const userId = req.user.id;
            const validatedData = hpp_schema_1.calculateHppSchema.parse(req.body);
            const result = await hpp_service_1.hppService.calculateHpp(userId, validatedData);
            res.json({
                success: true,
                data: result,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async saveHppCalculation(req, res, next) {
        try {
            const userId = req.user.id;
            const validatedData = hpp_schema_1.calculateHppSchema.parse(req.body);
            const result = await hpp_service_1.hppService.saveHppCalculation(userId, validatedData);
            res.status(201).json({
                success: true,
                data: result,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getHppCalculations(req, res, next) {
        try {
            const userId = req.user.id;
            const query = hpp_schema_1.queryHppSchema.parse(req.query);
            const result = await hpp_service_1.hppService.getHppCalculations(userId, query);
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
    async getHppCalculationById(req, res, next) {
        try {
            const userId = req.user.id;
            const id = req.params['id'];
            const result = await hpp_service_1.hppService.getHppCalculationById(userId, id);
            res.json({
                success: true,
                data: result,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async deleteHppCalculation(req, res, next) {
        try {
            const userId = req.user.id;
            const id = req.params['id'];
            const result = await hpp_service_1.hppService.deleteHppCalculation(userId, id);
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
exports.HppController = HppController;
exports.hppController = new HppController();
//# sourceMappingURL=hpp.controller.js.map