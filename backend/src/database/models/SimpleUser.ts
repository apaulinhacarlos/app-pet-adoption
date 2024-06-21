import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

import RoleModelDatabase from './Role';

import sequelizeDatabase from '.';

class SimpleUserModelDatabase extends Model<InferAttributes<SimpleUserModelDatabase>,
InferCreationAttributes<SimpleUserModelDatabase>> {
  declare id: CreationOptional<number>;
  declare email: CreationOptional<string>;
  declare password: CreationOptional<string>;
  declare roleId: CreationOptional<number>;
}

SimpleUserModelDatabase.init({
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
    references: {
      model: RoleModelDatabase,
      key: 'id',
    },
  },
}, {
  sequelize: sequelizeDatabase,
  tableName: 'simple_users',
  timestamps: false,
  underscored: true,
});

SimpleUserModelDatabase.belongsTo(RoleModelDatabase, {
  foreignKey: 'role_id',
  as: 'role'
});

export default SimpleUserModelDatabase;