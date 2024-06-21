import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

import StateModelDatabase from './State';

import sequelizeDatabase from '.';

class CityModelDatabase extends Model<InferAttributes<CityModelDatabase>,
InferCreationAttributes<CityModelDatabase>> {
  declare id: CreationOptional<number>;
  declare name: CreationOptional<string>;
  declare stateId: CreationOptional<number>;
}

CityModelDatabase.init({
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
  stateId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: StateModelDatabase,
      key: 'id',
    },
  },
}, {
  sequelize: sequelizeDatabase,
  tableName: 'cities',
  timestamps: false,
  underscored: true,
});

CityModelDatabase.belongsTo(StateModelDatabase, {
  foreignKey: 'state_id',
  as: 'state'
});

export default CityModelDatabase;