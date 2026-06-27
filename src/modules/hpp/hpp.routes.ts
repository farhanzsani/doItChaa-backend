import { Router } from 'express';
import { hppController } from './hpp.controller';
import { authenticate } from '../../middleware/auth';

const router = Router();

// All routes require authentication
router.use(authenticate);

router.post('/calculate', hppController.calculateHpp.bind(hppController));
router.post('/save', hppController.saveHppCalculation.bind(hppController));
router.get('/history', hppController.getHppCalculations.bind(hppController));
router.get('/history/:id', hppController.getHppCalculationById.bind(hppController));
router.delete('/history/:id', hppController.deleteHppCalculation.bind(hppController));

export default router;
