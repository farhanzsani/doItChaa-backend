import type { CreateTaskInput, UpdateTaskInput, TaskQueryInput } from './task.schema';
export declare function getTasks(userId: string, query: TaskQueryInput): Promise<{
    tasks: any;
    pagination: import("../../common/utils/pagination").PaginationMeta;
}>;
export declare function getTaskById(userId: string, taskId: string): Promise<any>;
export declare function createTask(userId: string, input: CreateTaskInput): Promise<any>;
export declare function updateTask(userId: string, taskId: string, input: UpdateTaskInput): Promise<any>;
export declare function deleteTask(userId: string, taskId: string): Promise<void>;
export declare function markTaskCompleted(userId: string, taskId: string): Promise<any>;
