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
  '/:id',
  charactersController.getById,
);

router.post(
  '',
  charactersController.create,
);

router.put(
  '/:id',
  charactersController.updateById,
);

router.delete(
  '/:id',
  charactersController.deleteById,
);


export default router;