import { Model, QueryInterface, DataTypes } from 'sequelize';
import IAddresses from '../../interfaces/IAddresses';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IAddresses>>('addresses', {
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
      cityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'cities',
          key: 'id'
        },
        field: 'city_id'
      }
    })
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('cities');
  }
}