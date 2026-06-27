import { z } from 'zod';
export declare const createNoteSchema: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    taskId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateNoteSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    taskId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export declare const noteQuerySchema: z.ZodObject<{
    taskId: z.ZodOptional<z.ZodString>;
    page: z.ZodOptional<z.ZodString>;
    limit: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateNoteInput = z.infer<typeof createNoteSchema>;
export type UpdateNoteInput = z.infer<typeof updateNoteSchema>;
export type NoteQueryInput = z.infer<typeof noteQuerySchema>;
