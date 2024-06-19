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

  public async create(newAnimal: IAnimals): Promise<IAnimals> {
    const animal = await this.modelDatabase.create(newAnimal);
    return animal;
  }

  public async update(id: number, newAnimal: IAnimals): Promise<IAnimals | null> {
    await this.modelDatabase.update(newAnimal, { where: { id } });
    const animal = await this.modelDatabase.findByPk(id);
    return animal;
  }

  public async delete(id: number): Promise<void> {
    await this.modelDatabase.destroy({ where: { id } });
  }
}

export default AnimalsModel;