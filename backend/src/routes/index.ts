import { Router } from 'express';
import animalRouter from './animal.router';
import loginRouter from './login.router';

const apiRouter = Router();

apiRouter.use('/animals', animalRouter);
apiRouter.use('/login', loginRouter);
// apiRouter.use('/register', authRouter);

// apiRouter.use(authMiddleware);

export default apiRouter;