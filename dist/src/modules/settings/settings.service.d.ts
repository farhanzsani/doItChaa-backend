import { UpdateSettingsInput } from './settings.schema';
export declare class SettingsService {
    getSettings(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        profitMarginMin: number;
        profitMarginMax: number;
        taxPercentage: number;
        laborCostPerHour: number;
    }>;
    updateSettings(userId: string, data: UpdateSettingsInput): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        profitMarginMin: number;
        profitMarginMax: number;
        taxPercentage: number;
        laborCostPerHour: number;
    }>;
}
export declare const settingsService: SettingsService;
