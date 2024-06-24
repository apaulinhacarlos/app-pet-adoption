import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

import sequelizeDatabase from '.';

class CountryModelDatabase extends Model<InferAttributes<CountryModelDatabase>,
InferCreationAttributes<CountryModelDatabase>> {
  declare id: CreationOptional<number>;
  declare name: CreationOptional<string>;
}

CountryModelDatabase.init({
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
  tableName: 'countries',
  timestamps: false,
  underscored: true,
});

export default CountryModelDatabase;