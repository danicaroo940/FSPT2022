import Router from 'express';
import * as auth from './auth.js';
import usersRouter from '../users/users.router.js';
import charactersRouter from '../characters/characters.router.js';

const router = Router();

router.post('/login', auth.login);
router.post('/register', auth.register);

router.use('/users', usersRouter);
router.use('/characters', charactersRouter);

export default router;