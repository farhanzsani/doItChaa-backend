import { Response } from 'express';
import { sendSuccess } from '../../common/utils/response';
import { AuthRequest } from '../../common/types';
import * as estimatorService from './estimator.service';
import type {
  CalculateEstimateInput,
  SaveEstimateInput,
  ConvertToTaskInput,
} from './estimator.schema';

export async function calculate(req: AuthRequest, res: Response): Promise<void> {
  const input = req.body as CalculateEstimateInput;
  const result = estimatorService.calculateEstimate(input);
  sendSuccess(res, 'Estimate calculated successfully', result);
}

export async function saveEstimate(req: AuthRequest, res: Response): Promise<void> {
  const userId = req.user!.id;
  const input = req.body as SaveEstimateInput;
  const estimate = await estimatorService.saveEstimate(userId, input);
  sendSuccess(res, 'Estimate saved successfully', estimate, 201);
}

export async function convertToTask(req: AuthRequest, res: Response): Promise<void> {
  const userId = req.user!.id;
  const input = req.body as ConvertToTaskInput;
  const result = await estimatorService.convertEstimateToTask(userId, input);
  sendSuccess(res, 'Estimate converted to task successfully', result, 201);
}

export async function getHistory(req: AuthRequest, res: Response): Promise<void> {
  const userId = req.user!.id;
  const { page, limit } = req.query as { page?: string; limit?: string };
  const result = await estimatorService.getEstimateHistory(userId, page, limit);
  sendSuccess(res, 'Estimate history retrieved successfully', result);
}

export async function getEstimateById(req: AuthRequest, res: Response): Promise<void> {
  const userId = req.user!.id;
  const id = req.params['id'] as string;
  const estimate = await estimatorService.getEstimateById(userId, id);
  sendSuccess(res, 'Estimate retrieved successfully', estimate);
}
