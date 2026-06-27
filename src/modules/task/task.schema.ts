import { z } from 'zod';

const priorityEnum = z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT']);
const statusEnum = z.enum(['PENDING', 'COMPLETED']);

export const createTaskSchema = z.object({
  title: z
    .string()
    .min(1, 'Title is required')
    .max(200, 'Title must not exceed 200 characters')
    .trim(),
  description: z
    .string()
    .max(2000, 'Description must not exceed 2000 characters')
    .trim()
    .optional(),
  priority: priorityEnum.optional().default('LOW'),
  deadline: z
    .string()
    .datetime({ message: 'Invalid deadline format, use ISO 8601' })
    .optional(),
  categoryId: z.string().cuid('Invalid category ID').optional(),
});

export const updateTaskSchema = z.object({
  title: z
    .string()
    .min(1, 'Title is required')
    .max(200, 'Title must not exceed 200 characters')
    .trim()
    .optional(),
  description: z
    .string()
    .max(2000, 'Description must not exceed 2000 characters')
    .trim()
    .optional(),
  priority: priorityEnum.optional(),
  status: statusEnum.optional(),
  deadline: z
    .string()
    .datetime({ message: 'Invalid deadline format, use ISO 8601' })
    .nullable()
    .optional(),
  categoryId: z.string().cuid('Invalid category ID').nullable().optional(),
});

export const taskQuerySchema = z.object({
  status: statusEnum.optional(),
  priority: priorityEnum.optional(),
  categoryId: z.string().optional(),
  sortBy: z.enum(['createdAt', 'deadline']).optional().default('createdAt'),
  order: z.enum(['asc', 'desc']).optional().default('desc'),
  page: z.string().optional(),
  limit: z.string().optional(),
});

export type CreateTaskInput = z.infer<typeof createTaskSchema>;
export type UpdateTaskInput = z.infer<typeof updateTaskSchema>;
export type TaskQueryInput = z.infer<typeof taskQuerySchema>;
