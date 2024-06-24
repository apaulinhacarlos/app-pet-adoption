import { Model, QueryInterface, DataTypes } from 'sequelize';
import ICompleteUsers from '../../interfaces/ICompleteUsers';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<ICompleteUsers>>('complete_users', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      simple_user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'simple_users',
          key: 'id'
        }
      }, 
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      address_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'addresses',
          key: 'id'
        }
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false
      }
    })
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('complete_users');
  }
}