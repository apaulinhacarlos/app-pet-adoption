import { Router } from 'express';
import animalRouter from './animal.router';
import authRouter from './auth.router';

const apiRouter = Router();

apiRouter.use('/animals', animalRouter);
apiRouter.use('/auth/login', authRouter);
// apiRouter.use(authMiddleware);

export default apiRouter;