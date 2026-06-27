import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { AppError } from '../errors/AppError';
import { sendError } from '../utils/response';
import { env } from '../../config/env';

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  // Zod validation error (unhandled)
  if (err instanceof ZodError) {
    const errors = err.issues.map((e) => ({
      field: e.path.join('.'),
      message: e.message,
    }));
    sendError(res, 'Validation failed', 422, errors);
    return;
  }

  // Operational errors (known, expected)
  if (err instanceof AppError) {
    sendError(res, err.message, err.statusCode);
    return;
  }

  // Unknown errors
  if (env.isDevelopment) {
    console.error('[ERROR]', err);
  }

  sendError(res, 'Internal Server Error', 500);
}

export function notFoundHandler(_req: Request, res: Response): void {
  sendError(res, 'Route not found', 404);
}
