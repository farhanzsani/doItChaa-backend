import { z } from 'zod';

export const createMaterialSchema = z.object({
  name: z
    .string()
    .min(1, 'Material name is required')
    .max(200, 'Material name must not exceed 200 characters')
    .trim(),
  unit: z
    .string()
    .min(1, 'Unit is required')
    .max(50, 'Unit must not exceed 50 characters')
    .trim(),
  price: z
    .number({ error: 'Price must be a valid number' })
    .int('Price must be an integer')
    .nonnegative('Price must be non-negative'),
  stock: z
    .number({ error: 'Stock must be a valid number' })
    .nonnegative('Stock must be non-negative')
    .default(0),
  description: z.string().max(1000, 'Description must not exceed 1000 characters').optional(),
});

export const updateMaterialSchema = createMaterialSchema.partial();

export const queryMaterialsSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(10),
  search: z.string().optional(),
});

export type CreateMaterialInput = z.infer<typeof createMaterialSchema>;
export type UpdateMaterialInput = z.infer<typeof updateMaterialSchema>;
export type QueryMaterialsInput = z.infer<typeof queryMaterialsSchema>;
