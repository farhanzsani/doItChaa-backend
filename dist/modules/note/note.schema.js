"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noteQuerySchema = exports.updateNoteSchema = exports.createNoteSchema = void 0;
const zod_1 = require("zod");
exports.createNoteSchema = zod_1.z.object({
    title: zod_1.z
        .string()
        .min(1, 'Title is required')
        .max(200, 'Title must not exceed 200 characters')
        .trim(),
    content: zod_1.z
        .string()
        .min(1, 'Content is required')
        .trim(),
    taskId: zod_1.z.string().cuid('Invalid task ID').optional(),
});
exports.updateNoteSchema = zod_1.z.object({
    title: zod_1.z
        .string()
        .min(1, 'Title is required')
        .max(200, 'Title must not exceed 200 characters')
        .trim()
        .optional(),
    content: zod_1.z
        .string()
        .min(1, 'Content is required')
        .trim()
        .optional(),
    taskId: zod_1.z.string().cuid('Invalid task ID').nullable().optional(),
});
exports.noteQuerySchema = zod_1.z.object({
    taskId: zod_1.z.string().optional(),
    page: zod_1.z.string().optional(),
    limit: zod_1.z.string().optional(),
});
//# sourceMappingURL=note.schema.js.map