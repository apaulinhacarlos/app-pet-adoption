import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

import sequelizeDatabase from '.';

class UsersModelDatabase extends Model<InferAttributes<UsersModelDatabase>,
InferCreationAttributes<UsersModelDatabase>> {
  declare id: CreationOptional<number>;
  declare email: CreationOptional<string>;
  declare password: CreationOptional<string>;
  declare roleId: CreationOptional<number>;
}

UsersModelDatabase.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: sequelizeDatabase,
  tableName: 'simple_users',
  timestamps: false,
  underscored: true,
});

export default UsersModelDatabase;