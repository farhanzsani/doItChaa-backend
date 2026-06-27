import { Response } from 'express';
import { sendSuccess } from '../../common/utils/response';
import { AuthRequest } from '../../common/types';
import * as dashboardService from './dashboard.service';

export async function getDashboard(req: AuthRequest, res: Response): Promise<void> {
  const userId = req.user!.id;
  const stats = await dashboardService.getDashboardStats(userId);
  sendSuccess(res, 'Dashboard statistics retrieved successfully', stats);
}
