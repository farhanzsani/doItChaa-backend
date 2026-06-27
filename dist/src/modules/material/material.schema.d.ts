import { z } from 'zod';
export declare const createMaterialSchema: z.ZodObject<{
    name: z.ZodString;
    unit: z.ZodString;
    price: z.ZodNumber;
    stock: z.ZodDefault<z.ZodNumber>;
    description: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateMaterialSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    unit: z.ZodOptional<z.ZodString>;
    price: z.ZodOptional<z.ZodNumber>;
    stock: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export declare const queryMaterialsSchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    search: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateMaterialInput = z.infer<typeof createMaterialSchema>;
export type UpdateMaterialInput = z.infer<typeof updateMaterialSchema>;
export type QueryMaterialsInput = z.infer<typeof queryMaterialsSchema>;
