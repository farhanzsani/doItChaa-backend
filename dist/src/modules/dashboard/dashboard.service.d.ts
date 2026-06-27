export declare function getDashboardStats(userId: string): Promise<{
    totalTasks: number;
    completedTasks: number;
    pendingTasks: number;
    overdueTasks: number;
    completionRate: number;
}>;
