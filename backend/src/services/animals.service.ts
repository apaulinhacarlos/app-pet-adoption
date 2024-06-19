import AnimalsModel from "../models/animals.model";

class AnimalsService {
  constructor(
    private model: AnimalsModel = new AnimalsModel()
  ) {}

  public async get() {
    const animals = await this.model.get();
    return animals;
  }

  public async getById(id: number) {
    const animal = await this.model.getById(id);
    return animal;
  }

  public async create(newAnimal: any) {
    const animal = await this.model.create(newAnimal);
    return animal;
  }

  public async update(id: number, newAnimal: any) {
    const animal = await this.model.update(id, newAnimal);
    return animal;
  }

  public async delete(id: number) {
    await this.model.delete(id);
  }
}

export default AnimalsService;