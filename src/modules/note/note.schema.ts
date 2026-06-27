import { z } from 'zod';

export const createNoteSchema = z.object({
  title: z
    .string()
    .min(1, 'Title is required')
    .max(200, 'Title must not exceed 200 characters')
    .trim(),
  content: z
    .string()
    .min(1, 'Content is required')
    .trim(),
  taskId: z.string().cuid('Invalid task ID').optional(),
});

export const updateNoteSchema = z.object({
  title: z
    .string()
    .min(1, 'Title is required')
    .max(200, 'Title must not exceed 200 characters')
    .trim()
    .optional(),
  content: z
    .string()
    .min(1, 'Content is required')
    .trim()
    .optional(),
  taskId: z.string().cuid('Invalid task ID').nullable().optional(),
});

export const noteQuerySchema = z.object({
  taskId: z.string().optional(),
  page: z.string().optional(),
  limit: z.string().optional(),
});

export type CreateNoteInput = z.infer<typeof createNoteSchema>;
export type UpdateNoteInput = z.infer<typeof updateNoteSchema>;
export type NoteQueryInput = z.infer<typeof noteQuerySchema>;
