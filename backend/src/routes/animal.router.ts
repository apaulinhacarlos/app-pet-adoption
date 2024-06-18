import { Router } from 'express';
import AnimalsController from '../controllers/animals.controller';

const animalRouter = Router();

const controller = new AnimalsController();

animalRouter.get('/', (req, res) => controller.get(req, res));
animalRouter.get('/:id', (req, res) => controller.getById(req, res));


export default animalRouter;