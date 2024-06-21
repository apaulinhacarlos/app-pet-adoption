import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

import SimpleUserModelDatabase from './SimpleUser';
import AddressModelDatabase from './Address';

import sequelizeDatabase from '.';

class CompleteUserModelDatabase extends Model<InferAttributes<CompleteUserModelDatabase>,
InferCreationAttributes<CompleteUserModelDatabase>> {
  declare id: CreationOptional<number>;
  declare simpleUserId: CreationOptional<string>;
  declare name: CreationOptional<string>;
  declare cpf: CreationOptional<string>;
  declare addressId: CreationOptional<number>;
  declare phone: CreationOptional<string>;
}

CompleteUserModelDatabase.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  simpleUserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: SimpleUserModelDatabase,
      key: 'id',
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  addressId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: AddressModelDatabase,
      key: 'id',
    },
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: sequelizeDatabase,
  tableName: 'complete_users',
  timestamps: false,
  underscored: true,
});

CompleteUserModelDatabase.belongsTo(SimpleUserModelDatabase, {
  foreignKey: 'user_simple_id',
  as: 'user',
});

CompleteUserModelDatabase.belongsTo(AddressModelDatabase, {
  foreignKey: 'address_id',
  as: 'address',
});

export default CompleteUserModelDatabase;