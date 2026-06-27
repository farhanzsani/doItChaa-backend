"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCategorySchema = exports.createCategorySchema = void 0;
const zod_1 = require("zod");
exports.createCategorySchema = zod_1.z.object({
    name: zod_1.z
        .string()
        .min(1, 'Category name is required')
        .max(100, 'Category name must not exceed 100 characters')
        .trim(),
});
exports.updateCategorySchema = zod_1.z.object({
    name: zod_1.z
        .string()
        .min(1, 'Category name is required')
        .max(100, 'Category name must not exceed 100 characters')
        .trim(),
});
//# sourceMappingURL=category.schema.js.map