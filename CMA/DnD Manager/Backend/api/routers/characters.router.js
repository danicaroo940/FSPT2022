import Router from 'express';
import * as charactersController from '../controllers/characters.controller.js'

const router = Router();

// localhost:3003/characters/...

router.get('/id/:id', charactersController.getById);
router.get('/name/:name', charactersController.getByName);
router.get('/class/:class', charactersController.getByClass);
router.get('/userdata', charactersController.getCharactersOfUser);
router.get('/all', charactersController.getAll);
router.post('/create', charactersController.createCharacter);
router.delete('/id/:id', charactersController.deleteById);
router.delete('/name/:name', charactersController.deleteByName);

export default router;