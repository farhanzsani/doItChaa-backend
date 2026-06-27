"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryHppSchema = exports.calculateHppSchema = void 0;
const zod_1 = require("zod");
const materialUsageSchema = zod_1.z.object({
    materialId: zod_1.z.string().min(1, 'Material ID is required'),
    quantity: zod_1.z.number().positive('Quantity must be positive'),
});
exports.calculateHppSchema = zod_1.z.object({
    productName: zod_1.z
        .string()
        .min(1, 'Product name is required')
        .max(200, 'Product name must not exceed 200 characters')
        .trim(),
    materials: zod_1.z
        .array(materialUsageSchema)
        .min(1, 'At least one material is required'),
    estimatedHours: zod_1.z
        .number({ error: 'Estimated hours must be a valid number' })
        .nonnegative('Estimated hours must be non-negative'),
    profitMarginPercentage: zod_1.z
        .number({ error: 'Profit margin must be a valid number' })
        .nonnegative('Profit margin must be non-negative')
        .max(1000, 'Profit margin must not exceed 1000%')
        .optional(), // Optional, will use settings default if not provided
});
exports.queryHppSchema = zod_1.z.object({
    page: zod_1.z.coerce.number().int().positive().default(1),
    limit: zod_1.z.coerce.number().int().positive().max(100).default(10),
    search: zod_1.z.string().optional(),
});
//# sourceMappingURL=hpp.schema.js.map