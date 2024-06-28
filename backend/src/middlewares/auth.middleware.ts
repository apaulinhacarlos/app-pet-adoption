import { Request, Response, NextFunction } from 'express';
import JWT from '../utils/jwt.utils';
import CustomError from '../utils/errors';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    throw new CustomError('UNAUTHORIZED', 'invalid credentials');
  }

  const jwt = new JWT();

  try {
    const payload = jwt.verify(token);
    
    req.body.user = payload;

    next();
  } catch (err: any) {
    console.error({ message: err.message });
    throw new CustomError('UNAUTHORIZED', 'invalid credentials');
  }
};

export default authMiddleware;