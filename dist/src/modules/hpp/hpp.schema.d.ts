import { z } from 'zod';
export declare const calculateHppSchema: z.ZodObject<{
    productName: z.ZodString;
    materials: z.ZodArray<z.ZodObject<{
        materialId: z.ZodString;
        quantity: z.ZodNumber;
    }, z.core.$strip>>;
    estimatedHours: z.ZodNumber;
    profitMarginPercentage: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const queryHppSchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    search: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CalculateHppInput = z.infer<typeof calculateHppSchema>;
export type QueryHppInput = z.infer<typeof queryHppSchema>;
