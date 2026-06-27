import type { CreateNoteInput, UpdateNoteInput, NoteQueryInput } from './note.schema';
export declare function getNotes(userId: string, query: NoteQueryInput): Promise<{
    notes: {
        id: string;
        createdAt: Date;
        title: string;
        updatedAt: Date;
        task: {
            id: string;
            title: string;
        } | null;
        content: string;
    }[];
    pagination: import("../../common/utils/pagination").PaginationMeta;
}>;
export declare function getNoteById(userId: string, noteId: string): Promise<{
    id: string;
    createdAt: Date;
    title: string;
    updatedAt: Date;
    userId: string;
    task: {
        status: import("../../../generated/prisma/enums").TaskStatus;
        id: string;
        title: string;
    } | null;
    content: string;
}>;
export declare function createNote(userId: string, input: CreateNoteInput): Promise<{
    id: string;
    createdAt: Date;
    title: string;
    updatedAt: Date;
    task: {
        id: string;
        title: string;
    } | null;
    content: string;
}>;
export declare function updateNote(userId: string, noteId: string, input: UpdateNoteInput): Promise<{
    id: string;
    createdAt: Date;
    title: string;
    updatedAt: Date;
    task: {
        id: string;
        title: string;
    } | null;
    content: string;
}>;
export declare function deleteNote(userId: string, noteId: string): Promise<void>;
export declare function getTaskNotes(userId: string, taskId: string): Promise<{
    id: string;
    createdAt: Date;
    title: string;
    updatedAt: Date;
    content: string;
}[]>;
