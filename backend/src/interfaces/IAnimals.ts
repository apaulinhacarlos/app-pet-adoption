interface IAnimals {
  id?: number,
  name: string,
  specie: string,
  gender: string,
  yearOfBirth: number,
  description: string,
  imageUrl?: string,
  videoUrl?: string,
  availableForAdoption: boolean,
  isAdopted: boolean,
}

export default IAnimals;