import Router from 'express';
import * as usersController from '../controllers/users.controller.js'
import * as auth from '../auth/auth.js';

const router = Router();

// localhost:3003/users/...

router.get('/:id', auth.auth, auth.adminRole, usersController.getUserById);
router.delete('/:id', auth.auth, auth.adminRole, usersController.deleteUserById);
router.put('/:id', auth.auth, auth.adminRole, usersController.updateUserById);
router.get('/', auth.auth, auth.adminRole, usersController.getAllUsers);

export default router;
