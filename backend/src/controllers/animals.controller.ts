import { Request, Response } from 'express';
import getHttpStatus from '../utils/http.map';
import AnimalsService from '../services/animals.service';

class AnimalsController {
  constructor(
    private service: AnimalsService = new AnimalsService()
  ) {}

  public async get(req: Request, res: Response): Promise<Response> {
    const animals = await this.service.get();
    return res.status(getHttpStatus(animals.status)).json(animals.data);
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const animal = await this.service.getById(Number(id));
    return res.status(getHttpStatus(animal.status)).json(animal.data);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const newAnimal = req.body;
    const animal = await this.service.create(newAnimal);
    return res.status(getHttpStatus(animal.status)).json(animal.data);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const newAnimal = req.body;
    const animal = await this.service.update(Number(id), newAnimal);
    return res.status(getHttpStatus(animal.status)).json(animal.data);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const result = await this.service.delete(Number(id));
    return res.status(getHttpStatus(result.status)).send(result.data);
  }
}

export default AnimalsController;