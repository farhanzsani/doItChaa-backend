import type { CreateNoteInput, UpdateNoteInput, NoteQueryInput } from './note.schema';
export declare function getNotes(userId: string, query: NoteQueryInput): Promise<{
    notes: any;
    pagination: import("../../common/utils/pagination").PaginationMeta;
}>;
export declare function getNoteById(userId: string, noteId: string): Promise<any>;
export declare function createNote(userId: string, input: CreateNoteInput): Promise<any>;
export declare function updateNote(userId: string, noteId: string, input: UpdateNoteInput): Promise<any>;
export declare function deleteNote(userId: string, noteId: string): Promise<void>;
export declare function getTaskNotes(userId: string, taskId: string): Promise<any>;
