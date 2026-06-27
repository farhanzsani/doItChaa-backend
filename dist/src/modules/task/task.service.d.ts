import type { CreateTaskInput, UpdateTaskInput, TaskQueryInput } from './task.schema';
export declare function getTasks(userId: string, query: TaskQueryInput): Promise<{
    tasks: {
        status: import("../../../generated/prisma/enums").TaskStatus;
        priority: import("../../../generated/prisma/enums").Priority;
        id: string;
        createdAt: Date;
        title: string;
        description: string | null;
        deadline: Date | null;
        updatedAt: Date;
        estimateHistory: {
            id: string;
            productName: string;
            minimumRecommendedPrice: number;
            maximumRecommendedPrice: number;
        } | null;
        category: {
            id: string;
            name: string;
        } | null;
    }[];
    pagination: import("../../common/utils/pagination").PaginationMeta;
}>;
export declare function getTaskById(userId: string, taskId: string): Promise<{
    status: import("../../../generated/prisma/enums").TaskStatus;
    priority: import("../../../generated/prisma/enums").Priority;
    id: string;
    createdAt: Date;
    title: string;
    description: string | null;
    deadline: Date | null;
    updatedAt: Date;
    estimateHistory: {
        id: string;
        productName: string;
        sizeCm: number;
        complexity: import("../../../generated/prisma/enums").Complexity;
        estimatedHours: number;
        estimatedMaterialCost: number;
        minimumRecommendedPrice: number;
        maximumRecommendedPrice: number;
    } | null;
    userId: string;
    category: {
        id: string;
        name: string;
    } | null;
}>;
export declare function createTask(userId: string, input: CreateTaskInput): Promise<{
    status: import("../../../generated/prisma/enums").TaskStatus;
    priority: import("../../../generated/prisma/enums").Priority;
    id: string;
    createdAt: Date;
    title: string;
    description: string | null;
    deadline: Date | null;
    updatedAt: Date;
    category: {
        id: string;
        name: string;
    } | null;
}>;
export declare function updateTask(userId: string, taskId: string, input: UpdateTaskInput): Promise<{
    status: import("../../../generated/prisma/enums").TaskStatus;
    priority: import("../../../generated/prisma/enums").Priority;
    id: string;
    createdAt: Date;
    title: string;
    description: string | null;
    deadline: Date | null;
    updatedAt: Date;
    category: {
        id: string;
        name: string;
    } | null;
}>;
export declare function deleteTask(userId: string, taskId: string): Promise<void>;
export declare function markTaskCompleted(userId: string, taskId: string): Promise<{
    status: import("../../../generated/prisma/enums").TaskStatus;
    id: string;
    title: string;
    updatedAt: Date;
}>;
