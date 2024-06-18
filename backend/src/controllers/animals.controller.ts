import { Request, Response } from 'express';
import AnimalsService from '../services/animals.service';

class AnimalsController {
  constructor(
    private service: AnimalsService = new AnimalsService()
  ) {}

  public async get(req: Request, res: Response): Promise<Response> {
    const animals = await this.service.get();
    return res.status(200).json(animals);
  }
}

export default AnimalsController;