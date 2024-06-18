interface IAnimals {
  id: number,
  name: string,
  specie: string,
  gender: string,
  yearOfBirth: number,
  description: string,
  image_url?: string,
  video_url?: string,
  availableForAdoption: boolean,
  isAdopted: boolean,
}

export default IAnimals;