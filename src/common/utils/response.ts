import { Response } from 'express';

export function sendSuccess(
  res: Response,
  message: string,
  data: unknown = null,
  statusCode = 200
): void {
  res.status(statusCode).json({
    success: true,
    message,
    data,
  });
}

export function sendError(
  res: Response,
  message: string,
  statusCode = 500,
  errors: unknown[] = []
): void {
  res.status(statusCode).json({
    success: false,
    message,
    errors,
  });
}
