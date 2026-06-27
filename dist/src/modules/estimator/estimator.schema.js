"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToTaskSchema = exports.saveEstimateSchema = exports.calculateEstimateSchema = void 0;
const zod_1 = require("zod");
const complexityEnum = zod_1.z.enum(['EASY', 'MEDIUM', 'HARD', 'CUSTOM']);
const priorityEnum = zod_1.z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT']);
exports.calculateEstimateSchema = zod_1.z.object({
    productName: zod_1.z
        .string()
        .min(1, 'Product name is required')
        .max(200, 'Product name must not exceed 200 characters')
        .trim(),
    sizeCm: zod_1.z
        .number({ error: 'Size must be a valid number' })
        .positive('Size must be a positive number')
        .max(500, 'Size must not exceed 500 cm'),
    complexity: complexityEnum,
});
exports.saveEstimateSchema = exports.calculateEstimateSchema;
exports.convertToTaskSchema = exports.calculateEstimateSchema.extend({
    deadline: zod_1.z
        .string()
        .datetime({ message: 'Invalid deadline format, use ISO 8601' })
        .optional(),
    priority: priorityEnum.optional().default('LOW'),
});
//# sourceMappingURL=estimator.schema.js.map