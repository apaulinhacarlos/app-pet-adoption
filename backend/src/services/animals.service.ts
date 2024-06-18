import AnimalsModel from "../models/animals.model";

class AnimalsService {
  constructor(
    private model: AnimalsModel = new AnimalsModel()
  ) {}

  public async get() {
    const animals = await this.model.get();
    return animals;
  }
}

export default AnimalsService;