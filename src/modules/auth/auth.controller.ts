import { Request, Response } from 'express';
import { sendSuccess } from '../../common/utils/response';
import { AuthRequest } from '../../common/types';
import * as authService from './auth.service';
import type { RegisterInput, LoginInput } from './auth.schema';

export async function register(req: Request, res: Response): Promise<void> {
  const input = req.body as RegisterInput;
  const result = await authService.registerUser(input);
  sendSuccess(res, 'Registration successful', result, 201);
}

export async function login(req: Request, res: Response): Promise<void> {
  const input = req.body as LoginInput;
  const result = await authService.loginUser(input);
  sendSuccess(res, 'Login successful', result);
}

export async function getMe(req: AuthRequest, res: Response): Promise<void> {
  const userId = req.user!.id;
  const user = await authService.getCurrentUser(userId);
  sendSuccess(res, 'User retrieved successfully', user);
}
