import { Model, QueryInterface, DataTypes } from 'sequelize';
import IStates from '../../interfaces/IStates';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IStates>>('states', {
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
      country_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'countries',
          key: 'id'
        }
      }
    })
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('states');
  }
}