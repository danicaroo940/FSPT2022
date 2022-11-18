
import Router from 'express';
import * as usersController from './users.controller.js';

const router = Router();

router.get(
  '/username/:userName',
  usersController.getByName,
);

// // router.get(
// //   '/:id',
// //   usersController.getById,
// // );

// // router.get(
// //   '/allimages',
// //   usersController.getAll
// // )

router.post('/login', usersController.loginUser);
router.get('/filter',usersController.filterRouter);


export default router;