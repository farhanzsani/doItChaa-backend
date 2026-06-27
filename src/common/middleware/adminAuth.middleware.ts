import { Request, Response, NextFunction } from 'express';

declare module 'express-session' {
  interface SessionData {
    isAdmin?: boolean;
  }
}

export function requireAdminSession(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (req.session?.isAdmin === true) {
    next();
    return;
  }
  res.redirect('/admin-login.html');
}
