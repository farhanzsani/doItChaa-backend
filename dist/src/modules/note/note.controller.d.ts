import { Response } from 'express';
import { AuthRequest } from '../../common/types';
export declare function getNotes(req: AuthRequest, res: Response): Promise<void>;
export declare function getNoteById(req: AuthRequest, res: Response): Promise<void>;
export declare function createNote(req: AuthRequest, res: Response): Promise<void>;
export declare function updateNote(req: AuthRequest, res: Response): Promise<void>;
export declare function deleteNote(req: AuthRequest, res: Response): Promise<void>;
export declare function getTaskNotes(req: AuthRequest, res: Response): Promise<void>;
