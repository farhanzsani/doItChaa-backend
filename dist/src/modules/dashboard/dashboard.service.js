"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDashboardStats = getDashboardStats;
const prisma_1 = require("../../config/prisma");
async function getDashboardStats(userId) {
    const now = new Date();
    const [totalTasks, completedTasks, overdueTasks] = await Promise.all([
        prisma_1.prisma.task.count({
            where: { userId },
        }),
        prisma_1.prisma.task.count({
            where: { userId, status: 'COMPLETED' },
        }),
        prisma_1.prisma.task.count({
            where: {
                userId,
                status: 'PENDING',
                deadline: { lt: now },
            },
        }),
    ]);
    const pendingTasks = totalTasks - completedTasks;
    const completionRate = totalTasks > 0
        ? Math.round((completedTasks / totalTasks) * 100 * 10) / 10
        : 0;
    return {
        totalTasks,
        completedTasks,
        pendingTasks,
        overdueTasks,
        completionRate,
    };
}
//# sourceMappingURL=dashboard.service.js.map