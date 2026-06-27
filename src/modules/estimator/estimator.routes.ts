import { Router } from 'express';
import { authenticate } from '../../common/middleware/auth.middleware';
import { validate } from '../../common/middleware/validate.middleware';
import {
  calculateEstimateSchema,
  saveEstimateSchema,
  convertToTaskSchema,
} from './estimator.schema';
import * as estimatorController from './estimator.controller';

const router = Router();

router.use(authenticate);

router.post('/calculate', validate(calculateEstimateSchema), estimatorController.calculate);
router.post('/save', validate(saveEstimateSchema), estimatorController.saveEstimate);
router.post('/convert-to-task', validate(convertToTaskSchema), estimatorController.convertToTask);
router.get('/history', estimatorController.getHistory);
router.get('/history/:id', estimatorController.getEstimateById);

export default router;
