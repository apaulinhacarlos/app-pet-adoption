import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('complete_users', [
      { 
        id: 1,
        user_simple_id: 1,
        name: 'Paula da Silva',
        cpf: '123.456.789-00',
        address_id: 1,
        phone: '11987654321'
      },
      { 
        id: 2,
        user_simple_id: 2,
        name: 'Claudiney Oliveira',
        cpf: '987.654.321-00',
        address_id: 1,
        phone: '11912345678'
      },
      { 
        id: 3,
        user_simple_id: 3,
        name: 'Carlos Souza',
        cpf: '456.789.123-00',
        address_id: 2,
        phone: '21987654321'
      },
      { 
        id: 4,
        user_simple_id: 4,
        name: 'Junior Costa',
        cpf: '321.654.987-00',
        address_id: 3,
        phone: '21912345678'
      },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('complete_users', {});
  },
}