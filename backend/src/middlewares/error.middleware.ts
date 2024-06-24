import { Request, Response, NextFunction } from 'express';
import CustomError from '../utils/errors';
import getHttpStatus from '../utils/http.map';


const errorMiddleware = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CustomError) {
    return res.status(getHttpStatus(err.status)).json({ message: err.message });
  }

  return res.status(500).json({ message: 'Internal Server Error' });
};

export default errorMiddleware;
