import AnimalsModel from '../models/animals.model';

class AnimalsService {
  constructor(
    private model: AnimalsModel = new AnimalsModel(),
  ) {}

  public async get() {
    const animals = await this.model.get();
    return {
      status: 'OK',
      data: animals,
    };
  }

  public async getById(id: number) {
    const animal = await this.model.getById(id);
    return {
      status: 'OK',
      data: animal,
    };
  }

  public async create(newAnimal: any) {
    const animal = await this.model.create(newAnimal);
    return {
      status: 'CREATED',
      data: animal,
    };
  }

  public async update(id: number, newAnimal: any) {
    const animal = await this.model.update(id, newAnimal);
    return {
      status: 'OK',
      data: animal,
    };
  }

  public async delete(id: number) {
    await this.model.delete(id);
    return {
      status: 'NO_CONTENT',
      data: null,
    };
  }
}

export default AnimalsService;