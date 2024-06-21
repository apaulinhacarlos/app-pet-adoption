import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('addresses', [
      { id: 1, name: 'Avenida Paulista, 1578', city_id: 1 },
      { id: 2, name: 'Rua das Flores, 123', city_id: 3 },
      { id: 3, name: 'Avenida Atlântica, 456', city_id: 2 },
      { id: 4, name: 'Rua XV de Novembro, 789', city_id: 4 },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('addresses', {});
  },
}