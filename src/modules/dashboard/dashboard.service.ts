import { prisma } from '../../config/prisma';

export async function getDashboardStats(userId: string) {
  const now = new Date();

  const [totalTasks, completedTasks, overdueTasks] = await Promise.all([
    prisma.task.count({
      where: { userId },
    }),
    prisma.task.count({
      where: { userId, status: 'COMPLETED' },
    }),
    prisma.task.count({
      where: {
        userId,
        status: 'PENDING',
        deadline: { lt: now },
      },
    }),
  ]);

  const pendingTasks = totalTasks - completedTasks;
  const completionRate =
    totalTasks > 0
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
