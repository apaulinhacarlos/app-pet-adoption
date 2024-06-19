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

  public async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const animal = await this.service.getById(Number(id));
    return res.status(200).json(animal);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const newAnimal = req.body;
    const animal = await this.service.create(newAnimal);
    return res.status(201).json(animal);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const newAnimal = req.body;
    const animal = await this.service.update(Number(id), newAnimal);
    return res.status(200).json(animal);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    await this.service.delete(Number(id));
    return res.status(204).send();
  }
}

export default AnimalsController;