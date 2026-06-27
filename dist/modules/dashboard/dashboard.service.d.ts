export declare function getDashboardStats(userId: string): Promise<{
    totalTasks: any;
    completedTasks: any;
    pendingTasks: number;
    overdueTasks: any;
    completionRate: number;
}>;
