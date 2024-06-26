import { Model, QueryInterface, DataTypes } from 'sequelize';
import IRoles from '../../interfaces/IRoles';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IRoles>>('roles', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    })
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('roles');
  }
}