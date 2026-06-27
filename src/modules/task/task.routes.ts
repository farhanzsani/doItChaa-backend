import { Router } from 'express';
import { authenticate } from '../../common/middleware/auth.middleware';
import { validate } from '../../common/middleware/validate.middleware';
import { createTaskSchema, updateTaskSchema, taskQuerySchema } from './task.schema';
import * as taskController from './task.controller';

const router = Router();

router.use(authenticate);

router.get('/', validate(taskQuerySchema, 'query'), taskController.getTasks);
router.post('/', validate(createTaskSchema), taskController.createTask);
router.get('/:id', taskController.getTaskById);
router.put('/:id', validate(updateTaskSchema), taskController.updateTask);
router.delete('/:id', taskController.deleteTask);
router.patch('/:id/complete', taskController.markTaskCompleted);

export default router;
