import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../../config/env';
import { UnauthorizedError } from '../errors/AppError';
import { AuthRequest } from '../types';

interface JwtPayload {
  id: string;
  email: string;
}

export function authenticate(
  req: AuthRequest,
  _res: Response,
  next: NextFunction
): void {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnauthorizedError('No token provided');
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    throw new UnauthorizedError('No token provided');
  }

  try {
    const decoded = jwt.verify(token, env.JWT_SECRET) as JwtPayload;
    req.user = { id: decoded.id, email: decoded.email };
    next();
  } catch {
    throw new UnauthorizedError('Invalid or expired token');
  }
}
