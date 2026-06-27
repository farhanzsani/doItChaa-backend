import { Request, Response, NextFunction } from 'express';
declare module 'express-session' {
    interface SessionData {
        isAdmin?: boolean;
    }
}
export declare function requireAdminSession(req: Request, res: Response, next: NextFunction): void;
