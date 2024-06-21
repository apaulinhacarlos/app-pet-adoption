import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('simple_users', [
      { id: 1, email: 'admin1@example.com', password: 'adminpassword1', role_id: 1 },
      { id: 2, email: 'admin2@example.com', password: 'adminpassword2', role_id: 1 },
      { id: 3, email: 'user1@example.com', password: 'userspassword1', role_id: 2 },
      { id: 4, email: 'user2@example.com', password: 'userspassword1', role_id: 2 },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('simple_users', {});
  },
}