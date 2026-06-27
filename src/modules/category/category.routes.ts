import { Router } from 'express';
import { authenticate } from '../../common/middleware/auth.middleware';
import { validate } from '../../common/middleware/validate.middleware';
import { createCategorySchema, updateCategorySchema } from './category.schema';
import * as categoryController from './category.controller';

const router = Router();

router.use(authenticate);

router.get('/', categoryController.getCategories);
router.post('/', validate(createCategorySchema), categoryController.createCategory);
router.put('/:id', validate(updateCategorySchema), categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);

export default router;
