import { Model, QueryInterface, DataTypes } from 'sequelize';
import ICountries from '../../interfaces/ICountries';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<ICountries>>('countries', {
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
    return queryInterface.dropTable('countries');
  }
}