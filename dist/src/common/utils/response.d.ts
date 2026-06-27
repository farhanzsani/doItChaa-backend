import { Response } from 'express';
export declare function sendSuccess(res: Response, message: string, data?: unknown, statusCode?: number): void;
export declare function sendError(res: Response, message: string, statusCode?: number, errors?: unknown[]): void;
