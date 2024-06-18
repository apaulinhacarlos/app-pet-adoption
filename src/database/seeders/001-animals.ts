import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('animals', [
      {
        name: 'Abeia',
        specie: 'cat',
        genger: 'female',
        yearOfBirth: 2012,
        availableForAdoption: true,
        isAdopted: false,
      },
      {
        name: 'Vaquinha',
        specie: 'cat',
        genger: 'female',
        yearOfBirth: 2012,
        availableForAdoption: true,
        isAdopted: false,
      },
      {
        name: 'Paola',
        specie: 'dog',
        genger: 'female',
        yearOfBirth: 2012,
        availableForAdoption: true,
        isAdopted: false,
      },
      {
        name: 'Nori',
        specie: 'cat',
        genger: 'female',
        yearOfBirth: 2021,
        availableForAdoption: true,
        isAdopted: false,
      }
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('animals', {});
  },
}