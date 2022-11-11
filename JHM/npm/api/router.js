import Router from 'express';
import usersRouter from './users/users.router.js';
// import carsRouter from './cars/cars.router.js';
// import charactersRouter from './characters/characters.router.js';
// import loginFunction from './login/login.touter.js';

const router = Router();


router.use('/users', usersRouter);
// router.use('/filter', filterRouter);
// router.use('/cars', carsRouter);
// router.use('/characters', charactersRouter);
// router.post('/login', loginFunction);

export default router;
