import { z } from 'zod';
export declare const updateSettingsSchema: z.ZodObject<{
    profitMarginMin: z.ZodOptional<z.ZodNumber>;
    profitMarginMax: z.ZodOptional<z.ZodNumber>;
    taxPercentage: z.ZodOptional<z.ZodNumber>;
    laborCostPerHour: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type UpdateSettingsInput = z.infer<typeof updateSettingsSchema>;
