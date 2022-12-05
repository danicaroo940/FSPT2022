import Router from 'express';
import * as charactersController from './characters.controller.js';

const router = Router();

router.get(
  '/all',
  charactersController.getAll,
);

router.get(
  '/name/:name',
  charactersController.getByName,
);

router.get(
  '/:characterId',
  charactersController.getById,
);

router.post(
  '',
  charactersController.create,
);

router.put(
  '/:characterId',
  charactersController.updateById,
);

router.delete(
  '/:characterId',
  charactersController.deleteById,
);


export default router;