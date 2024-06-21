import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

import sequelizeDatabase from '.';

class RoleModelDatabase extends Model<InferAttributes<RoleModelDatabase>,
InferCreationAttributes<RoleModelDatabase>> {
  declare id: CreationOptional<number>;
  declare name: CreationOptional<string>;
}

RoleModelDatabase.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: sequelizeDatabase,
  tableName: 'roles',
  timestamps: false,
  underscored: true,
});

export default RoleModelDatabase;