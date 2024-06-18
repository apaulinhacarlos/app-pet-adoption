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
      genger: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      yearOfBirth: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      availableForAdoption: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      isAdopted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    })
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('animals');
  }
}