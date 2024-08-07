import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import apiRouter from './routes';
import errorMiddleware from './middlewares/error.middleware';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));

    this.config();
    this.routes();

    this.app.use(errorMiddleware);
  }

  private routes(): void {
    this.app.use('/api', apiRouter);
  }

  private config(): void {
    this.app.use(cors({
      credentials: true,
      origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    }));

    const accessControl: express.RequestHandler = (req, res, next) => {
      res.header('Access-Control-Allow-Origin', process.env.FRONTEND_URL || 'http://localhost:5173'); // Specify the allowed origin
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

const appInstance = new App().app; // Aqui você cria a instância do Express e exporta
export { appInstance as app };
export default App;
