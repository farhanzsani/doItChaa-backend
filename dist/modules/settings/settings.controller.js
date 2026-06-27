"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsController = exports.SettingsController = void 0;
const settings_service_1 = require("./settings.service");
const settings_schema_1 = require("./settings.schema");
class SettingsController {
    async getSettings(req, res, next) {
        try {
            const userId = req.user.id;
            const settings = await settings_service_1.settingsService.getSettings(userId);
            res.json({
                success: true,
                data: settings,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async updateSettings(req, res, next) {
        try {
            const userId = req.user.id;
            const validatedData = settings_schema_1.updateSettingsSchema.parse(req.body);
            const settings = await settings_service_1.settingsService.updateSettings(userId, validatedData);
            res.json({
                success: true,
                data: settings,
            });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.SettingsController = SettingsController;
exports.settingsController = new SettingsController();
//# sourceMappingURL=settings.controller.js.map