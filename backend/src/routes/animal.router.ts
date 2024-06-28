import { Router } from 'express';
import AnimalsController from '../controllers/animals.controller';
import ValidationAnimals from '../middlewares/validations.animals.middleware';
import authMiddleware from '../middlewares/auth.middleware';

const animalRouter = Router();

const controller = new AnimalsController();
const validationAnimals = new ValidationAnimals();

// sem cadastro
animalRouter.get('/', (req, res) => controller.get(req, res));

// role user simples
animalRouter.get('/:id',
  (req, res) => controller.getById(req, res)
);

// role admin
animalRouter.post('/',
  (req, res, next) => authMiddleware(req, res, next),
  (req, res, next) => validationAnimals.validate(req, res, next),
  (req, res) => controller.create(req, res)
);

// role admin
animalRouter.put('/:id',
  (req, res, next) => authMiddleware(req, res, next),
  (req, res, next) => validationAnimals.validate(req, res, next),
  (req, res) => controller.update(req, res)
);

// role admin
animalRouter.delete('/:id',
  (req, res, next) => authMiddleware(req, res, next),
  (req, res) => controller.delete(req, res)
);

export default animalRouter;