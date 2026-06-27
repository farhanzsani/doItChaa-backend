import { Router } from 'express';
import { materialController } from './material.controller';
import { authenticate } from '../../common/middleware/auth.middleware';

const router = Router();

// All routes require authentication
router.use(authenticate);

router.post('/', materialController.createMaterial.bind(materialController));
router.get('/', materialController.getMaterials.bind(materialController));
router.get('/:id', materialController.getMaterialById.bind(materialController));
router.put('/:id', materialController.updateMaterial.bind(materialController));
router.delete('/:id', materialController.deleteMaterial.bind(materialController));

export default router;
