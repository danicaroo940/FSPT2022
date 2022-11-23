import Router from 'express';
import * as auth from '../auth/auth.js';
import usersRouter from '../routers/users.router.js';
import charactersRouter from '../routers/characters.router.js';
// import classesRouter from './routers/classes.router.js';

const router = Router();

router.post('/login', auth.login);
router.post('/register', auth.register);

router.use('/users', usersRouter);
router.use('/characters', charactersRouter);
// router.use('/classes', classesRouter);

export default router;