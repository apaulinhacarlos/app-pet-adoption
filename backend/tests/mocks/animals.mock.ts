import AnimalModelDatabase from '../../src/database/models/Animal';

export const animalsMock = [
  {
    "id": 1,
    "name": "Abeia",
    "specie": "cat",
    "gender": "female",
    "yearOfBirth": 2012,
    "description": "Abeia é uma gata muito carinhosa e brincalhona. Ela adora brincar com bolinhas de papel e caixas de papelão.",
    "imageUrl": "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "videoUrl": "https://www.youtube.com/watch?v=J---aiyznGQ",
    "availableForAdoption": true,
    "isAdopted": false
  },
  {
    "id": 2,
    "name": "Vaquinha",
    "specie": "cat",
    "gender": "female",
    "yearOfBirth": 2012,
    "description": "Vaquinha é uma gata muito carinhosa e brincalhona. Ela adora brincar com bolinhas de papel e caixas de papelão.",
    "imageUrl": "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "videoUrl": "https://www.youtube.com/watch?v=J---aiyznGQ",
    "availableForAdoption": true,
    "isAdopted": false
  },
]

export const animalsMockFromDb = AnimalModelDatabase.bulkBuild(animalsMock);

export const newAnimalMock = {
  "id": 2,
  "name": "Clebinho",
  "specie": "cat",
  "gender": "male",
  "yearOfBirth": 2022,
  "description": "Abeia é uma gata muito carinhosa e brincalhona. Ela adora brincar com bolinhas de papel e caixas de papelão.",
  "imageUrl": "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "videoUrl": "https://www.youtube.com/watch?v=J---aiyznGQ",
  "availableForAdoption": true,
  "isAdopted": false
}

export const newAnimalMockFromDB = AnimalModelDatabase.build(newAnimalMock);




// export const animalUpdatedMock = {
//   "name": "Clebinho",
//   "specie": "cat",
//   "gender": "male",
//   "yearOfBirth": 2022,
//   "description": "Abeia é uma gata muito carinhosa e brincalhona. Ela adora brincar com bolinhas de papel e caixas de papelão.",
//   "imageUrl": "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   "videoUrl": "https://www.youtube.com/watch?v=J---aiyznGQ",
//   "availableForAdoption": true,
//   "isAdopted": false
// }

// export const animalUpdatedMockFromDB = AnimalModelDatabase.build(animalUpdatedMock);