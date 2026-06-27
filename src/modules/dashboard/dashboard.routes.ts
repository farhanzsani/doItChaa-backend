import { Router } from 'express';
import { authenticate } from '../../common/middleware/auth.middleware';
import * as dashboardController from './dashboard.controller';

const router = Router();

router.use(authenticate);

router.get('/', dashboardController.getDashboard);

export default router;
