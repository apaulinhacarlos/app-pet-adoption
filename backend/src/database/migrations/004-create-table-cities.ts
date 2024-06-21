import { Model, QueryInterface, DataTypes } from 'sequelize';
import ICities from '../../interfaces/ICities';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<ICities>>('cities', {
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
      state_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'states',
          key: 'id'
        }
      }
    })
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('cities');
  }
}