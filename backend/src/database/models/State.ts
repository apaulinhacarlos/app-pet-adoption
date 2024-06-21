import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

import CountryModelDatabase from './Country';

import sequelizeDatabase from '.';

class StateModelDatabase extends Model<InferAttributes<StateModelDatabase>,
InferCreationAttributes<StateModelDatabase>> {
  declare id: CreationOptional<number>;
  declare name: CreationOptional<string>;
  declare countryId: CreationOptional<number>;
}

StateModelDatabase.init({
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
  countryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: CountryModelDatabase,
      key: 'id',
    },
  },
}, {
  sequelize: sequelizeDatabase,
  tableName: 'states',
  timestamps: false,
  underscored: true,
});

StateModelDatabase.belongsTo(CountryModelDatabase, {
  foreignKey: 'country_id',
  as: 'country'
});

export default StateModelDatabase;