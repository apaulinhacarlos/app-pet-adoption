interface IAnimals {
  id: number,
  name: string,
  specie: string,
  genger: 'male' | 'female',
  yearOfBirth: number,
  availableForAdoption: boolean,
  isAdopted: boolean,
}

export default IAnimals;