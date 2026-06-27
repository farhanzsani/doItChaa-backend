import { Router } from 'express';
import { authenticate } from '../../common/middleware/auth.middleware';
import { validate } from '../../common/middleware/validate.middleware';
import { createNoteSchema, updateNoteSchema, noteQuerySchema } from './note.schema';
import * as noteController from './note.controller';

const router = Router();

router.use(authenticate);

router.get('/', validate(noteQuerySchema, 'query'), noteController.getNotes);
router.post('/', validate(createNoteSchema), noteController.createNote);
router.get('/:id', noteController.getNoteById);
router.put('/:id', validate(updateNoteSchema), noteController.updateNote);
router.delete('/:id', noteController.deleteNote);

// Get notes for a specific task
router.get('/task/:taskId', noteController.getTaskNotes);

export default router;
