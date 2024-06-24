import { Router } from 'express';
import LoginController from '../controllers/login.controller';

const loginRouter = Router();

const controller = new LoginController();

loginRouter.post('/', (req, res) => controller.login(req, res));

export default loginRouter;