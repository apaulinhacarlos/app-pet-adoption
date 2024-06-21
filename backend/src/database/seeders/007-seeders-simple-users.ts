import { QueryInterface } from 'sequelize';
import * as bcrypt from 'bcryptjs';

export default {
  up: async (queryInterface: QueryInterface) => {
    const hash = await bcrypt.hash('pass', 10);
    
    await queryInterface.bulkInsert('simple_users', [
      { id: 1, email: 'paula@example.com', password: hash, role_id: 1 },
      { id: 2, email: 'claudiney@example.com', password: hash, role_id: 1 },
      { id: 3, email: 'carlos@example.com', password: hash, role_id: 2 },
      { id: 4, email: 'junior@example.com', password: hash, role_id: 2 },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('simple_users', {});
  },
}