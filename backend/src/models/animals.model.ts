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
}

export default AnimalsModel;