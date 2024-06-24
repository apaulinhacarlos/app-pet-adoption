import { Model, QueryInterface, DataTypes } from 'sequelize';
import ISimpleUsers from '../../interfaces/ISimpleUsers';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<ISimpleUsers>>('simple_users', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'roles',
          key: 'id',
        },
        field: 'role_id',
        defaultValue: 2,
      },
    })
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('simple_users');
  }
}