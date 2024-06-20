import { Model, QueryInterface, DataTypes } from 'sequelize';
import IAnimals from '../../interfaces/IAnimals';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IAnimals>>('animals', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      specie: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      yearOfBirth: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'year_of_birth',
        validate: {
          isInt: true,
          min: 1990, // ano mínimo permitido
          max: new Date().getFullYear() // ano máximo é o ano atual
        }
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'image_url',
      },
      videoUrl: {
        type: DataTypes.STRING,
        field: 'video_url',
      },
      availableForAdoption: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'available_for_adoption',
      },
      isAdopted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'is_adopted',
      },
    })
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('animals');
  }
}