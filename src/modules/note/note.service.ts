import { prisma } from '../../config/prisma';
import { NotFoundError, ForbiddenError } from '../../common/errors/AppError';
import { parsePagination, buildPaginationMeta } from '../../common/utils/pagination';
import type { CreateNoteInput, UpdateNoteInput, NoteQueryInput } from './note.schema';

export async function getNotes(userId: string, query: NoteQueryInput) {
  const { page, limit, skip } = parsePagination(query.page, query.limit);

  const where = {
    userId,
    ...(query.taskId && { taskId: query.taskId }),
  };

  const [notes, total] = await Promise.all([
    prisma.note.findMany({
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
    prisma.note.count({ where }),
  ]);

  return {
    notes,
    pagination: buildPaginationMeta(total, page, limit),
  };
}

export async function getNoteById(userId: string, noteId: string) {
  const note = await prisma.note.findUnique({
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
    throw new NotFoundError('Note not found');
  }

  if (note.userId !== userId) {
    throw new ForbiddenError('You do not have permission to view this note');
  }

  return note;
}

export async function createNote(userId: string, input: CreateNoteInput) {
  // Validate task ownership if taskId is provided
  if (input.taskId) {
    await validateTaskOwnership(userId, input.taskId);
  }

  return prisma.note.create({
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

export async function updateNote(
  userId: string,
  noteId: string,
  input: UpdateNoteInput
) {
  const note = await prisma.note.findUnique({ where: { id: noteId } });

  if (!note) {
    throw new NotFoundError('Note not found');
  }

  if (note.userId !== userId) {
    throw new ForbiddenError('You do not have permission to update this note');
  }

  // Validate task ownership if taskId is being changed
  if (input.taskId !== undefined && input.taskId !== null) {
    await validateTaskOwnership(userId, input.taskId);
  }

  return prisma.note.update({
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

export async function deleteNote(userId: string, noteId: string) {
  const note = await prisma.note.findUnique({ where: { id: noteId } });

  if (!note) {
    throw new NotFoundError('Note not found');
  }

  if (note.userId !== userId) {
    throw new ForbiddenError('You do not have permission to delete this note');
  }

  await prisma.note.delete({ where: { id: noteId } });
}

export async function getTaskNotes(userId: string, taskId: string) {
  // Verify task ownership
  await validateTaskOwnership(userId, taskId);

  return prisma.note.findMany({
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

async function validateTaskOwnership(
  userId: string,
  taskId: string
): Promise<void> {
  const task = await prisma.task.findUnique({
    where: { id: taskId },
  });

  if (!task) {
    throw new NotFoundError('Task not found');
  }

  if (task.userId !== userId) {
    throw new ForbiddenError('You do not have permission to use this task');
  }
}
