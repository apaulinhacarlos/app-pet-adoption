import { ModelStatic } from 'sequelize';
import AnimalModelDatabase from '../database/models/Animal';
import IAnimals from '../interfaces/IAnimals';

class AnimalsModel {
  constructor(
    private modelDatabase: ModelStatic<AnimalModelDatabase> = AnimalModelDatabase,
  ) {}

  public async get(): Promise<IAnimals[]> {
    const animals = await this.modelDatabase.findAll();
    return animals;
  }

  public async getById(id: number): Promise<IAnimals | null> {
    const animal = await this.modelDatabase.findByPk(id);
    return animal;
  }
}

export default AnimalsModel;