import { Router } from 'express';
import animalRouter from './animal.router';
import loginRouter from './login.router';
import simpleRegisterRouter from './simple-register.router';
// import ErrorMiddleware from '../middlewares/error.middleware';

const apiRouter = Router();
// const errorMiddleware = new ErrorMiddleware()

apiRouter.use('/animals', animalRouter);

apiRouter.use('/login', loginRouter);

apiRouter.use('/simple-register', simpleRegisterRouter);

// apiRouter.use(errorMiddleware);


export default apiRouter;