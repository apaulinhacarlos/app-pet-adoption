import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('states', [
      { id: 1, name: 'São Paulo', country_id: 1 },
      { id: 2, name: 'Rio de Janeiro', country_id: 1 },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('states', {});
  },
}