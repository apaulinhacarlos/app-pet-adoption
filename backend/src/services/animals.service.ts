import CustomError from '../utils/errors';
import AnimalsModel from '../models/animals.model';
import IAnimals from '../interfaces/IAnimals';

class AnimalsService {
  constructor(
    private model: AnimalsModel = new AnimalsModel(),
  ) {}

  public async get() {
    const animals = await this.model.get();

    if (!animals.length) {
      throw new CustomError('NOT_FOUND', 'no animals found');
    }

    return {
      status: 'SUCCESS',
      data: animals,
    };
  }

  public async getById(id: number) {
    const animal = await this.model.getById(id);

    if (!animal) {
      throw new CustomError('NOT_FOUND', 'no animals found');
    }

    return {
      status: 'SUCCESS',
      data: animal,
    };
  }

  public async create(newAnimal: IAnimals) {
    const animal = await this.model.create(newAnimal);
    
    return {
      status: 'CREATED',
      data: { message: 'animal created', animalId: animal.id },
    };
  }

  public async update(id: number, newAnimal: IAnimals) {
    await this.getById(id);

    await this.model.update(id, newAnimal);
        
    return {
      status: 'SUCCESS',
      data: { message: 'animal updated' },
    };
  }

  public async delete(id: number) {
    await this.getById(id);

    await this.model.delete(id);

    return {
      status: 'NO_CONTENT',
      data: { message: 'animal deleted' },
    };
  }
}

export default AnimalsService;