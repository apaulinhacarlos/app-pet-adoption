import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('cities', [
      { id: 1, name: 'São Paulo', state_id: 1 },
      { id: 2, name: 'Rio de Janeiro', state_id: 2 },
      { id: 3, name: 'Campinas', state_id: 1 },
      { id: 4, name: 'Niterói', state_id: 2 },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('cities', {});
  },
}