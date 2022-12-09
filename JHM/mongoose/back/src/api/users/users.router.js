import Router from 'express';
import * as usersController from './users.controller.js';

const router = Router();

router.get('/all', usersController.getAll);
// router.get('/username/:username', usersController.getByUsername);
// router.get('/id/:id', usersController.getById);
// router.put('/id/:id', usersController.updateById);
// router.delete('/id/:id', usersController.deleteById);

export default router;
