import { Router } from 'express';
import AnimalsController from '../controllers/animals.controller';

const animalRouter = Router();

const controller = new AnimalsController();

animalRouter.get('/', (req, res) => controller.get(req, res));
animalRouter.get('/:id', (req, res) => controller.getById(req, res));
animalRouter.post('/', (req, res) => controller.create(req, res));
animalRouter.put('/:id', (req, res) => controller.update(req, res));
animalRouter.delete('/:id', (req, res) => controller.delete(req, res));

export default animalRouter;