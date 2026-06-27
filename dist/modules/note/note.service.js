"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNotes = getNotes;
exports.getNoteById = getNoteById;
exports.createNote = createNote;
exports.updateNote = updateNote;
exports.deleteNote = deleteNote;
exports.getTaskNotes = getTaskNotes;
const prisma_1 = require("../../config/prisma");
const AppError_1 = require("../../common/errors/AppError");
const pagination_1 = require("../../common/utils/pagination");
async function getNotes(userId, query) {
    const { page, limit, skip } = (0, pagination_1.parsePagination)(query.page, query.limit);
    const where = {
        userId,
        ...(query.taskId && { taskId: query.taskId }),
    };
    const [notes, total] = await Promise.all([
        prisma_1.prisma.note.findMany({
            where,
            orderBy: { createdAt: 'desc' },
            skip,
            take: limit,
            select: {
                id: true,
                title: true,
                content: true,
                createdAt: true,
                updatedAt: true,
                task: {
                    select: {
                        id: true,
                        title: true,
                    },
                },
            },
        }),
        prisma_1.prisma.note.count({ where }),
    ]);
    return {
        notes,
        pagination: (0, pagination_1.buildPaginationMeta)(total, page, limit),
    };
}
async function getNoteById(userId, noteId) {
    const note = await prisma_1.prisma.note.findUnique({
        where: { id: noteId },
        select: {
            id: true,
            title: true,
            content: true,
            createdAt: true,
            updatedAt: true,
            userId: true,
            task: {
                select: {
                    id: true,
                    title: true,
                    status: true,
                },
            },
        },
    });
    if (!note) {
        throw new AppError_1.NotFoundError('Note not found');
    }
    if (note.userId !== userId) {
        throw new AppError_1.ForbiddenError('You do not have permission to view this note');
    }
    return note;
}
async function createNote(userId, input) {
    // Validate task ownership if taskId is provided
    if (input.taskId) {
        await validateTaskOwnership(userId, input.taskId);
    }
    return prisma_1.prisma.note.create({
        data: {
            title: input.title,
            content: input.content,
            taskId: input.taskId,
            userId,
        },
        select: {
            id: true,
            title: true,
            content: true,
            createdAt: true,
            updatedAt: true,
            task: {
                select: {
                    id: true,
                    title: true,
                },
            },
        },
    });
}
async function updateNote(userId, noteId, input) {
    const note = await prisma_1.prisma.note.findUnique({ where: { id: noteId } });
    if (!note) {
        throw new AppError_1.NotFoundError('Note not found');
    }
    if (note.userId !== userId) {
        throw new AppError_1.ForbiddenError('You do not have permission to update this note');
    }
    // Validate task ownership if taskId is being changed
    if (input.taskId !== undefined && input.taskId !== null) {
        await validateTaskOwnership(userId, input.taskId);
    }
    return prisma_1.prisma.note.update({
        where: { id: noteId },
        data: {
            ...(input.title !== undefined && { title: input.title }),
            ...(input.content !== undefined && { content: input.content }),
            ...(input.taskId !== undefined && { taskId: input.taskId }),
        },
        select: {
            id: true,
            title: true,
            content: true,
            createdAt: true,
            updatedAt: true,
            task: {
                select: {
                    id: true,
                    title: true,
                },
            },
        },
    });
}
async function deleteNote(userId, noteId) {
    const note = await prisma_1.prisma.note.findUnique({ where: { id: noteId } });
    if (!note) {
        throw new AppError_1.NotFoundError('Note not found');
    }
    if (note.userId !== userId) {
        throw new AppError_1.ForbiddenError('You do not have permission to delete this note');
    }
    await prisma_1.prisma.note.delete({ where: { id: noteId } });
}
async function getTaskNotes(userId, taskId) {
    // Verify task ownership
    await validateTaskOwnership(userId, taskId);
    return prisma_1.prisma.note.findMany({
        where: { taskId, userId },
        orderBy: { createdAt: 'desc' },
        select: {
            id: true,
            title: true,
            content: true,
            createdAt: true,
            updatedAt: true,
        },
    });
}
async function validateTaskOwnership(userId, taskId) {
    const task = await prisma_1.prisma.task.findUnique({
        where: { id: taskId },
    });
    if (!task) {
        throw new AppError_1.NotFoundError('Task not found');
    }
    if (task.userId !== userId) {
        throw new AppError_1.ForbiddenError('You do not have permission to use this task');
    }
}
//# sourceMappingURL=note.service.js.map