import { Router } from 'express';
import { settingsController } from './settings.controller';
import { authenticate } from '../../common/middleware/auth.middleware';

const router = Router();

// All routes require authentication
router.use(authenticate);

router.get('/', settingsController.getSettings.bind(settingsController));
router.put('/', settingsController.updateSettings.bind(settingsController));

export default router;
