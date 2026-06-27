"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskQuerySchema = exports.updateTaskSchema = exports.createTaskSchema = void 0;
const zod_1 = require("zod");
const priorityEnum = zod_1.z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT']);
const statusEnum = zod_1.z.enum(['PENDING', 'COMPLETED']);
exports.createTaskSchema = zod_1.z.object({
    title: zod_1.z
        .string()
        .min(1, 'Title is required')
        .max(200, 'Title must not exceed 200 characters')
        .trim(),
    description: zod_1.z
        .string()
        .max(2000, 'Description must not exceed 2000 characters')
        .trim()
        .optional(),
    priority: priorityEnum.optional().default('LOW'),
    deadline: zod_1.z
        .string()
        .datetime({ message: 'Invalid deadline format, use ISO 8601' })
        .optional(),
    categoryId: zod_1.z.string().cuid('Invalid category ID').optional(),
});
exports.updateTaskSchema = zod_1.z.object({
    title: zod_1.z
        .string()
        .min(1, 'Title is required')
        .max(200, 'Title must not exceed 200 characters')
        .trim()
        .optional(),
    description: zod_1.z
        .string()
        .max(2000, 'Description must not exceed 2000 characters')
        .trim()
        .optional(),
    priority: priorityEnum.optional(),
    status: statusEnum.optional(),
    deadline: zod_1.z
        .string()
        .datetime({ message: 'Invalid deadline format, use ISO 8601' })
        .nullable()
        .optional(),
    categoryId: zod_1.z.string().cuid('Invalid category ID').nullable().optional(),
});
exports.taskQuerySchema = zod_1.z.object({
    status: statusEnum.optional(),
    priority: priorityEnum.optional(),
    categoryId: zod_1.z.string().optional(),
    sortBy: zod_1.z.enum(['createdAt', 'deadline']).optional().default('createdAt'),
    order: zod_1.z.enum(['asc', 'desc']).optional().default('desc'),
    page: zod_1.z.string().optional(),
    limit: zod_1.z.string().optional(),
});
//# sourceMappingURL=task.schema.js.map