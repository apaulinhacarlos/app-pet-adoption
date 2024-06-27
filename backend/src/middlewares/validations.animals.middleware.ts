import { Request, Response, NextFunction } from 'express';
import getHttpStatus from '../utils/http.map';
import { animalsSchema } from '../utils/animals.schema';

class ValidationAnimals {
  private status: string;

  constructor(){
    this.status = 'BAD_REQUEST';
  }

  public async validate(req: Request, res: Response, next: NextFunction) {
    const { error } = animalsSchema.validate(req.body);

    if (error) {
      return res.status(getHttpStatus(this.status)).json({ error: error.details[0].message });
    }

    return next();
  }
}

export default ValidationAnimals;