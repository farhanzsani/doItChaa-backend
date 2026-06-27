"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsService = exports.SettingsService = void 0;
const prisma_1 = require("../../config/prisma");
const errors_1 = require("../../common/errors");
class SettingsService {
    async getSettings(userId) {
        let settings = await prisma_1.prisma.businessSettings.findUnique({
            where: { userId },
        });
        // Create default settings if not exists
        if (!settings) {
            settings = await prisma_1.prisma.businessSettings.create({
                data: {
                    userId,
                    profitMarginMin: 50,
                    profitMarginMax: 100,
                    taxPercentage: 0,
                    laborCostPerHour: 15000,
                },
            });
        }
        return settings;
    }
    async updateSettings(userId, data) {
        try {
            // Get or create settings first
            await this.getSettings(userId);
            const settings = await prisma_1.prisma.businessSettings.update({
                where: { userId },
                data,
            });
            return settings;
        }
        catch (error) {
            throw new errors_1.ValidationError('Failed to update settings');
        }
    }
}
exports.SettingsService = SettingsService;
exports.settingsService = new SettingsService();
//# sourceMappingURL=settings.service.js.map