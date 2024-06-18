import IAnimals from "./IAnimals";

export interface IGetAll<T> {
  getAll(): Promise<T[]>;
}

export interface IAnimalsModel extends IGetAll<IAnimals> {}