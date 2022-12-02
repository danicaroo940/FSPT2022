import Router from 'express';
import * as charactersController from '../characters/characters.controller.js'

const router = Router();

// localhost:3003/characters/...

router.get('/id/:id', charactersController.getByName);
router.get('/name/:name', charactersController.getByName);
router.get('/userdata', charactersController.getByOwner);
router.get('/all', charactersController.getAll);
router.post('/create', charactersController.create);
router.put('/id/:id', charactersController.updateById);
router.put('/name/:name', charactersController.updateByName);
router.delete('/id/:id', charactersController.deleteById);
router.delete('/name/:name', charactersController.deleteByName);

export default router;