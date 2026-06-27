import { z } from 'zod';
export declare const calculateEstimateSchema: z.ZodObject<{
    productName: z.ZodString;
    sizeCm: z.ZodNumber;
    complexity: z.ZodEnum<{
        EASY: "EASY";
        MEDIUM: "MEDIUM";
        HARD: "HARD";
        CUSTOM: "CUSTOM";
    }>;
}, z.core.$strip>;
export declare const saveEstimateSchema: z.ZodObject<{
    productName: z.ZodString;
    sizeCm: z.ZodNumber;
    complexity: z.ZodEnum<{
        EASY: "EASY";
        MEDIUM: "MEDIUM";
        HARD: "HARD";
        CUSTOM: "CUSTOM";
    }>;
}, z.core.$strip>;
export declare const convertToTaskSchema: z.ZodObject<{
    productName: z.ZodString;
    sizeCm: z.ZodNumber;
    complexity: z.ZodEnum<{
        EASY: "EASY";
        MEDIUM: "MEDIUM";
        HARD: "HARD";
        CUSTOM: "CUSTOM";
    }>;
    deadline: z.ZodOptional<z.ZodString>;
    priority: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
        MEDIUM: "MEDIUM";
        LOW: "LOW";
        HIGH: "HIGH";
        URGENT: "URGENT";
    }>>>;
}, z.core.$strip>;
export type CalculateEstimateInput = z.infer<typeof calculateEstimateSchema>;
export type SaveEstimateInput = z.infer<typeof saveEstimateSchema>;
export type ConvertToTaskInput = z.infer<typeof convertToTaskSchema>;
