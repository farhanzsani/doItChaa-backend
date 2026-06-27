import { Router } from 'express';
import authRoutes from '../modules/auth/auth.routes';
import categoryRoutes from '../modules/category/category.routes';
import taskRoutes from '../modules/task/task.routes';
import estimatorRoutes from '../modules/estimator/estimator.routes';
import dashboardRoutes from '../modules/dashboard/dashboard.routes';
import noteRoutes from '../modules/note/note.routes';
import materialRoutes from '../modules/material/material.routes';
import settingsRoutes from '../modules/settings/settings.routes';
import hppRoutes from '../modules/hpp/hpp.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/categories', categoryRoutes);
router.use('/tasks', taskRoutes);
router.use('/estimator', estimatorRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/notes', noteRoutes);
router.use('/materials', materialRoutes);
router.use('/settings', settingsRoutes);
router.use('/hpp', hppRoutes);

export default router;
