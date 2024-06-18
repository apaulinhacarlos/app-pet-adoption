import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

import sequelizeDatabase from '.';

class Animal extends Model<InferAttributes<Animal>,
InferCreationAttributes<Animal>> {
  declare id: CreationOptional<number>;
  declare name: CreationOptional<string>;
  declare specie: CreationOptional<string>;
  declare genger: CreationOptional<string>;
  declare yearOfBirth: CreationOptional<number>;
  declare availableForAdoption: CreationOptional<boolean>;
  declare isAdopted: CreationOptional<boolean>;
}

Animal.init({
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
  specie: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genger: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  yearOfBirth: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'year_of_birth',
    validate: {
      isInt: true,
      min: 1990,
      max: new Date().getFullYear(),
    },
  },
  availableForAdoption: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    field: 'available_for_adoption',
  },
  isAdopted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    field: 'is_adopted',
  }
}, {
  sequelize: sequelizeDatabase,
  tableName: 'animals',
  timestamps: false,
  underscored: true,
});

export default Animal;