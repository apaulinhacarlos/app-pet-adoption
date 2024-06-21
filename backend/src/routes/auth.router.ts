import { Router } from 'express';
import AuthController from '../controllers/auth.controller';

const authRouter = Router();

const controller = new AuthController();

authRouter.post('/', (req, res) => controller.login(req, res));

export default authRouter;