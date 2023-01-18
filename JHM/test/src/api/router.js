import Router from 'express';
import usersRouter from './users/users.router.js';
import charactersRouter from './characters/characters.router.js';
import * as authController from './auth/auth.controller.js';
import swaggerUi from 'swagger-ui-express';
import swaggerJson from './swagger.js'; // https://editor.swagger.io

const router = Router();
router.use('/users', usersRouter);
router.use('/characters', charactersRouter);

router.post('/login', authController.login);
router.post('/register', authController.register);

router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));

export default router;
