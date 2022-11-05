
import Router from 'express';
import * as carsController from './cars.controller.js';

const router = Router();

router.get(
  '/name/:name',
  carsController.getByName,
);

router.get(
  '/:id',
  carsController.getById,
);


export default router;