import { z } from 'zod';
export declare const createTaskSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    priority: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
        MEDIUM: "MEDIUM";
        LOW: "LOW";
        HIGH: "HIGH";
        URGENT: "URGENT";
    }>>>;
    deadline: z.ZodOptional<z.ZodString>;
    categoryId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateTaskSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    priority: z.ZodOptional<z.ZodEnum<{
        MEDIUM: "MEDIUM";
        LOW: "LOW";
        HIGH: "HIGH";
        URGENT: "URGENT";
    }>>;
    status: z.ZodOptional<z.ZodEnum<{
        PENDING: "PENDING";
        COMPLETED: "COMPLETED";
    }>>;
    deadline: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    categoryId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export declare const taskQuerySchema: z.ZodObject<{
    status: z.ZodOptional<z.ZodEnum<{
        PENDING: "PENDING";
        COMPLETED: "COMPLETED";
    }>>;
    priority: z.ZodOptional<z.ZodEnum<{
        MEDIUM: "MEDIUM";
        LOW: "LOW";
        HIGH: "HIGH";
        URGENT: "URGENT";
    }>>;
    categoryId: z.ZodOptional<z.ZodString>;
    sortBy: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
        createdAt: "createdAt";
        deadline: "deadline";
    }>>>;
    order: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>>;
    page: z.ZodOptional<z.ZodString>;
    limit: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateTaskInput = z.infer<typeof createTaskSchema>;
export type UpdateTaskInput = z.infer<typeof updateTaskSchema>;
export type TaskQueryInput = z.infer<typeof taskQuerySchema>;
