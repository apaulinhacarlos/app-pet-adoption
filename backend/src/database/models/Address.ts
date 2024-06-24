import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

import CityModelDatabase from './City';

import sequelizeDatabase from '.';

class AddressModelDatabase extends Model<InferAttributes<AddressModelDatabase>,
InferCreationAttributes<AddressModelDatabase>> {
  declare id: CreationOptional<number>;
  declare name: CreationOptional<string>;
  declare cityId: CreationOptional<number>;
}

AddressModelDatabase.init({
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
  cityId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: CityModelDatabase,
      key: 'id',
    },
  },
}, {
  sequelize: sequelizeDatabase,
  tableName: 'addresses',
  timestamps: false,
  underscored: true,
});

AddressModelDatabase.belongsTo(CityModelDatabase, {
  foreignKey: 'city_id',
  as: 'city',
});

export default AddressModelDatabase;