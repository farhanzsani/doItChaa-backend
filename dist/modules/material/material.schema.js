"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryMaterialsSchema = exports.updateMaterialSchema = exports.createMaterialSchema = void 0;
const zod_1 = require("zod");
exports.createMaterialSchema = zod_1.z.object({
    name: zod_1.z
        .string()
        .min(1, 'Material name is required')
        .max(200, 'Material name must not exceed 200 characters')
        .trim(),
    unit: zod_1.z
        .string()
        .min(1, 'Unit is required')
        .max(50, 'Unit must not exceed 50 characters')
        .trim(),
    price: zod_1.z
        .number({ error: 'Price must be a valid number' })
        .int('Price must be an integer')
        .nonnegative('Price must be non-negative'),
    stock: zod_1.z
        .number({ error: 'Stock must be a valid number' })
        .nonnegative('Stock must be non-negative')
        .default(0),
    description: zod_1.z.string().max(1000, 'Description must not exceed 1000 characters').optional(),
});
exports.updateMaterialSchema = exports.createMaterialSchema.partial();
exports.queryMaterialsSchema = zod_1.z.object({
    page: zod_1.z.coerce.number().int().positive().default(1),
    limit: zod_1.z.coerce.number().int().positive().max(100).default(10),
    search: zod_1.z.string().optional(),
});
//# sourceMappingURL=material.schema.js.map