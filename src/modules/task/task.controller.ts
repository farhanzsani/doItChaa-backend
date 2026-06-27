import { Response } from 'express';
import { sendSuccess } from '../../common/utils/response';
import { AuthRequest } from '../../common/types';
import * as taskService from './task.service';
import type { CreateTaskInput, UpdateTaskInput, TaskQueryInput } from './task.schema';

export async function getTasks(req: AuthRequest, res: Response): Promise<void> {
  const userId = req.user!.id;
  const query = req.query as unknown as TaskQueryInput;
  const result = await taskService.getTasks(userId, query);
  sendSuccess(res, 'Tasks retrieved successfully', result);
}

export async function getTaskById(req: AuthRequest, res: Response): Promise<void> {
  const userId = req.user!.id;
  const id = req.params['id'] as string;
  const task = await taskService.getTaskById(userId, id);
  sendSuccess(res, 'Task retrieved successfully', task);
}

export async function createTask(req: AuthRequest, res: Response): Promise<void> {
  const userId = req.user!.id;
  const input = req.body as CreateTaskInput;
  const task = await taskService.createTask(userId, input);
  sendSuccess(res, 'Task created successfully', task, 201);
}

export async function updateTask(req: AuthRequest, res: Response): Promise<void> {
  const userId = req.user!.id;
  const id = req.params['id'] as string;
  const input = req.body as UpdateTaskInput;
  const task = await taskService.updateTask(userId, id, input);
  sendSuccess(res, 'Task updated successfully', task);
}

export async function deleteTask(req: AuthRequest, res: Response): Promise<void> {
  const userId = req.user!.id;
  const id = req.params['id'] as string;
  await taskService.deleteTask(userId, id);
  sendSuccess(res, 'Task deleted successfully', null);
}

export async function markTaskCompleted(req: AuthRequest, res: Response): Promise<void> {
  const userId = req.user!.id;
  const id = req.params['id'] as string;
  const task = await taskService.markTaskCompleted(userId, id);
  sendSuccess(res, 'Task marked as completed', task);
}
