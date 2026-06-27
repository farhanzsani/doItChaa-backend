import { Response } from 'express';
import { sendSuccess } from '../../common/utils/response';
import { AuthRequest } from '../../common/types';
import * as noteService from './note.service';
import type { CreateNoteInput, UpdateNoteInput, NoteQueryInput } from './note.schema';

export async function getNotes(req: AuthRequest, res: Response): Promise<void> {
  const userId = req.user!.id;
  const query = req.query as unknown as NoteQueryInput;
  const result = await noteService.getNotes(userId, query);
  sendSuccess(res, 'Notes retrieved successfully', result);
}

export async function getNoteById(req: AuthRequest, res: Response): Promise<void> {
  const userId = req.user!.id;
  const id = req.params['id'] as string;
  const note = await noteService.getNoteById(userId, id);
  sendSuccess(res, 'Note retrieved successfully', note);
}

export async function createNote(req: AuthRequest, res: Response): Promise<void> {
  const userId = req.user!.id;
  const input = req.body as CreateNoteInput;
  const note = await noteService.createNote(userId, input);
  sendSuccess(res, 'Note created successfully', note, 201);
}

export async function updateNote(req: AuthRequest, res: Response): Promise<void> {
  const userId = req.user!.id;
  const id = req.params['id'] as string;
  const input = req.body as UpdateNoteInput;
  const note = await noteService.updateNote(userId, id, input);
  sendSuccess(res, 'Note updated successfully', note);
}

export async function deleteNote(req: AuthRequest, res: Response): Promise<void> {
  const userId = req.user!.id;
  const id = req.params['id'] as string;
  await noteService.deleteNote(userId, id);
  sendSuccess(res, 'Note deleted successfully', null);
}

export async function getTaskNotes(req: AuthRequest, res: Response): Promise<void> {
  const userId = req.user!.id;
  const taskId = req.params['taskId'] as string;
  const notes = await noteService.getTaskNotes(userId, taskId);
  sendSuccess(res, 'Task notes retrieved successfully', notes);
}
