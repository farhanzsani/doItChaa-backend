import { z } from 'zod';

export const updateSettingsSchema = z.object({
  profitMarginMin: z
    .number({ error: 'Profit margin min must be a valid number' })
    .nonnegative('Profit margin min must be non-negative')
    .max(1000, 'Profit margin min must not exceed 1000%')
    .optional(),
  profitMarginMax: z
    .number({ error: 'Profit margin max must be a valid number' })
    .nonnegative('Profit margin max must be non-negative')
    .max(1000, 'Profit margin max must not exceed 1000%')
    .optional(),
  taxPercentage: z
    .number({ error: 'Tax percentage must be a valid number' })
    .nonnegative('Tax percentage must be non-negative')
    .max(100, 'Tax percentage must not exceed 100%')
    .optional(),
  laborCostPerHour: z
    .number({ error: 'Labor cost per hour must be a valid number' })
    .int('Labor cost per hour must be an integer')
    .nonnegative('Labor cost per hour must be non-negative')
    .optional(),
}).refine(
  (data) => {
    if (data.profitMarginMin !== undefined && data.profitMarginMax !== undefined) {
      return data.profitMarginMin <= data.profitMarginMax;
    }
    return true;
  },
  {
    message: 'Profit margin min must not exceed profit margin max',
    path: ['profitMarginMin'],
  }
);

export type UpdateSettingsInput = z.infer<typeof updateSettingsSchema>;
