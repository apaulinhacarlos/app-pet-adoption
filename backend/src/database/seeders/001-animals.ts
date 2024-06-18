import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('animals', [
      {
        name: 'Abeia',
        specie: 'cat',
        genger: 'female',
        year_of_birth: 2012,
        available_for_adoption: true,
        is_adopted: false,
      },
      {
        name: 'Vaquinha',
        specie: 'cat',
        genger: 'female',
        year_of_birth: 2012,
        available_for_adoption: true,
        is_adopted: false,
      },
      {
        name: 'Paola',
        specie: 'dog',
        genger: 'female',
        year_of_birth: 2012,
        available_for_adoption: true,
        is_adopted: false,
      },
      {
        name: 'Nori',
        specie: 'cat',
        genger: 'female',
        year_of_birth: 2021,
        available_for_adoption: true,
        is_adopted: false,
      }
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('animals', {});
  },
}