import { z } from 'zod';

const complexityEnum = z.enum(['EASY', 'MEDIUM', 'HARD', 'CUSTOM']);
const priorityEnum = z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT']);

export const calculateEstimateSchema = z.object({
  productName: z
    .string()
    .min(1, 'Product name is required')
    .max(200, 'Product name must not exceed 200 characters')
    .trim(),
  sizeCm: z
    .number({ error: 'Size must be a valid number' })
    .positive('Size must be a positive number')
    .max(500, 'Size must not exceed 500 cm'),
  complexity: complexityEnum,
});

export const saveEstimateSchema = calculateEstimateSchema;

export const convertToTaskSchema = calculateEstimateSchema.extend({
  deadline: z
    .string()
    .datetime({ message: 'Invalid deadline format, use ISO 8601' })
    .optional(),
  priority: priorityEnum.optional().default('LOW'),
});

export type CalculateEstimateInput = z.infer<typeof calculateEstimateSchema>;
export type SaveEstimateInput = z.infer<typeof saveEstimateSchema>;
export type ConvertToTaskInput = z.infer<typeof convertToTaskSchema>;
