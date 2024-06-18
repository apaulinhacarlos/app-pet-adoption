import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('animals', [
      {
        name: 'Abeia',
        specie: 'cat',
        gender: 'female',
        year_of_birth: 2012,
        description: 'Abeia é uma gata muito carinhosa e brincalhona. Ela adora brincar com bolinhas de papel e caixas de papelão.',
        image_url: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        video_url: 'https://www.youtube.com/watch?v=J---aiyznGQ',
        available_for_adoption: true,
        is_adopted: false,
      },
      {
        name: 'Vaquinha',
        specie: 'cat',
        gender: 'female',
        year_of_birth: 2012,
        description: 'Vaquinha é uma gata muito carinhosa e brincalhona. Ela adora brincar com bolinhas de papel e caixas de papelão.',
        image_url: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        video_url: 'https://www.youtube.com/watch?v=J---aiyznGQ',
        available_for_adoption: true,
        is_adopted: false,
      },
      {
        name: 'Paola',
        specie: 'dog',
        gender: 'female',
        year_of_birth: 2012,
        description: 'Paola é uma cachorra muito carinhosa e brincalhona. Ela adora brincar com bolinhas de papel e caixas de papelão.',
        image_url: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        video_url: 'https://www.youtube.com/watch?v=J---aiyznGQ',
        available_for_adoption: true,
        is_adopted: false,
      },
      {
        name: 'Nori',
        specie: 'cat',
        gender: 'female',
        year_of_birth: 2021,
        description: 'Nori é uma gata muito carinhosa e brincalhona. Ela adora brincar com bolinhas de papel e caixas de papelão.',
        image_url: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        video_url: 'https://www.youtube.com/watch?v=J---aiyznGQ',
        available_for_adoption: true,
        is_adopted: false,
      }
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('animals', {});
  },
}