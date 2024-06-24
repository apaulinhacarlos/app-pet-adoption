import { Router } from 'express';
import animalRouter from './animal.router';
import loginRouter from './login.router';
import simpleRegisterRouter from './simple-register.router';

const apiRouter = Router();

apiRouter.use('/animals', animalRouter);

apiRouter.use('/login', loginRouter);
apiRouter.use('/simple-register', simpleRegisterRouter);

// apiRouter.use(authMiddleware);

export default apiRouter;