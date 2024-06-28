import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('animals', [
      {
        "name": "Leo",
        "specie": "dog",
        "gender": "male",
        "year_of_birth": 2015,
        "description": "Leo é um cachorro amigável e energético. Ele adora correr no parque e brincar com outros cães.",
        "image_url": "https://images.pexels.com/photos/4587996/pexels-photo-4587996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "video_url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "available_for_adoption": true,
        "is_adopted": false
      },
      {
        "name": "Milo",
        "specie": "cat",
        "gender": "male",
        "year_of_birth": 2018,
        "description": "Milo é um gato independente e curioso. Ele gosta de explorar a casa e observar pássaros pela janela.",
        "image_url": "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "video_url": "https://www.youtube.com/watch?v=QH2-TGUlwu4",
        "available_for_adoption": true,
        "is_adopted": false
      },
      {
        "name": "Bella",
        "specie": "dog",
        "gender": "female",
        "year_of_birth": 2019,
        "description": "Bella é uma cadela doce e leal. Ela adora receber carinho e é muito obediente.",
        "image_url": "https://images.pexels.com/photos/4588051/pexels-photo-4588051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "video_url": "https://www.youtube.com/watch?v=5qap5aO4i9A",
        "available_for_adoption": true,
        "is_adopted": false
      },
      {
        "name": "Luna",
        "specie": "cat",
        "gender": "female",
        "year_of_birth": 2020,
        "description": "Luna é uma gata curiosa e brincalhona. Ela adora perseguir brinquedos e explorar novos lugares.",
        "image_url": "https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "video_url": "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
        "available_for_adoption": true,
        "is_adopted": false
      },
      {
        "name": "Max",
        "specie": "dog",
        "gender": "male",
        "year_of_birth": 2017,
        "description": "Max é um cachorro enérgico e amoroso. Ele adora brincar com bolas e fazer caminhadas longas.",
        "image_url": "https://images.pexels.com/photos/4588037/pexels-photo-4588037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "video_url": "https://www.youtube.com/watch?v=V-_O7nl0Ii0",
        "available_for_adoption": true,
        "is_adopted": false
      },
      {
        "name": "Chloe",
        "specie": "cat",
        "gender": "female",
        "year_of_birth": 2016,
        "description": "Chloe é uma gata tranquila e afetuosa. Ela gosta de se enroscar em cobertores e receber carinho.",
        "image_url": "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "video_url": "https://www.youtube.com/watch?v=DJ4-kI1IW5s",
        "available_for_adoption": true,
        "is_adopted": false
      },
      {
        "name": "Charlie",
        "specie": "dog",
        "gender": "male",
        "year_of_birth": 2014,
        "description": "Charlie é um cachorro inteligente e amigável. Ele adora aprender novos truques e é muito leal.",
        "image_url": "https://images.pexels.com/photos/4587985/pexels-photo-4587985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "video_url": "https://www.youtube.com/watch?v=CIjGAw9rj8s",
        "available_for_adoption": true,
        "is_adopted": false
      },
      {
        "name": "Daisy",
        "specie": "cat",
        "gender": "female",
        "year_of_birth": 2015,
        "description": "Daisy é uma gata elegante e calma. Ela gosta de se deitar ao sol e observar o movimento da casa.",
        "image_url": "https://images.pexels.com/photos/96622/pexels-photo-96622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "video_url": "https://www.youtube.com/watch?v=J0xo8WZlzzk",
        "available_for_adoption": true,
        "is_adopted": false
      },
      {
        "name": "Oscar",
        "specie": "dog",
        "gender": "male",
        "year_of_birth": 2013,
        "description": "Oscar é um cachorro carinhoso e protetor. Ele adora ficar perto de sua família e é muito fiel.",
        "image_url": "https://images.pexels.com/photos/4588064/pexels-photo-4588064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "video_url": "https://www.youtube.com/watch?v=ZZ5LpwO-An4",
        "available_for_adoption": true,
        "is_adopted": false
      },
      {
        "name": "Lucy",
        "specie": "cat",
        "gender": "female",
        "year_of_birth": 2022,
        "description": "Lucy é uma gatinha ativa e curiosa. Ela adora explorar cada canto da casa e brincar com qualquer coisa que encontre.",
        "image_url": "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "video_url": "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
        "available_for_adoption": true,
        "is_adopted": false
      }
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('animals', {});
  },
}