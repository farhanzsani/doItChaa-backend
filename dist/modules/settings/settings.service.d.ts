import { UpdateSettingsInput } from './settings.schema';
export declare class SettingsService {
    getSettings(userId: string): Promise<any>;
    updateSettings(userId: string, data: UpdateSettingsInput): Promise<any>;
}
export declare const settingsService: SettingsService;
