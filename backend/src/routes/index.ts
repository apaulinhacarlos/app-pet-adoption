import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
const path = require('path');

import animalRouter from './animal.router';
import loginRouter from './login.router';
import simpleRegisterRouter from './simple-register.router';

const apiRouter = Router();

apiRouter.use('/animals', animalRouter);

apiRouter.use('/login', loginRouter);

apiRouter.use('/simple-register', simpleRegisterRouter);

// Rota para a documentação do Swagger
apiRouter.use('/docs',
  swaggerUi.serve,
  async (req: any, res: any, next: any) => {
    const swaggerFilePath = path.join(__dirname, '../swagger.json');  
    const swaggerDocument = JSON.parse(fs.readFileSync(swaggerFilePath, 'utf8'));
    swaggerUi.setup(swaggerDocument)(req, res, next);
});

export default apiRouter;