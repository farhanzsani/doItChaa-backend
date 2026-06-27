import { Router } from 'express';
import { validate } from '../../common/middleware/validate.middleware';
import { authenticate } from '../../common/middleware/auth.middleware';
import { registerSchema, loginSchema } from './auth.schema';
import * as authController from './auth.controller';

const router = Router();

router.post('/register', validate(registerSchema), authController.register);
router.post('/login', validate(loginSchema), authController.login);
router.get('/me', authenticate, authController.getMe);

export default router;
