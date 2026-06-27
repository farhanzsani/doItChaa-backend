import { z } from 'zod';

const materialUsageSchema = z.object({
  materialId: z.string().min(1, 'Material ID is required'),
  quantity: z.number().positive('Quantity must be positive'),
});

export const calculateHppSchema = z.object({
  productName: z
    .string()
    .min(1, 'Product name is required')
    .max(200, 'Product name must not exceed 200 characters')
    .trim(),
  materials: z
    .array(materialUsageSchema)
    .min(1, 'At least one material is required'),
  estimatedHours: z
    .number({ error: 'Estimated hours must be a valid number' })
    .nonnegative('Estimated hours must be non-negative'),
  profitMarginPercentage: z
    .number({ error: 'Profit margin must be a valid number' })
    .nonnegative('Profit margin must be non-negative')
    .max(1000, 'Profit margin must not exceed 1000%')
    .optional(), // Optional, will use settings default if not provided
});

export const queryHppSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(10),
  search: z.string().optional(),
});

export type CalculateHppInput = z.infer<typeof calculateHppSchema>;
export type QueryHppInput = z.infer<typeof queryHppSchema>;
