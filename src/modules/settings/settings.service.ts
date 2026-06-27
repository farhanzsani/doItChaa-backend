import { prisma } from '../../config/prisma';
import { UpdateSettingsInput } from './settings.schema';
import { ValidationError } from '../../common/errors';

export class SettingsService {
  async getSettings(userId: string) {
    let settings = await prisma.businessSettings.findUnique({
      where: { userId },
    });

    // Create default settings if not exists
    if (!settings) {
      settings = await prisma.businessSettings.create({
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

  async updateSettings(userId: string, data: UpdateSettingsInput) {
    try {
      // Get or create settings first
      await this.getSettings(userId);

      const settings = await prisma.businessSettings.update({
        where: { userId },
        data,
      });

      return settings;
    } catch (error) {
      throw new ValidationError('Failed to update settings');
    }
  }
}

export const settingsService = new SettingsService();
