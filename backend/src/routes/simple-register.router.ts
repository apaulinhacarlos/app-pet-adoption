import { Router } from 'express';
import SimpleRegisterController from '../controllers/simple-register.controller';

const simpleRegisterRouter = Router();

const controller = new SimpleRegisterController();

simpleRegisterRouter.post('/', (req, res) => controller.register(req, res));

export default simpleRegisterRouter;