import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

import sequelizeDatabase from '.';

class AnimalModelDatabase extends Model<InferAttributes<AnimalModelDatabase>,
InferCreationAttributes<AnimalModelDatabase>> {
  declare id: CreationOptional<number>;
  declare name: CreationOptional<string>;
  declare specie: CreationOptional<string>;
  declare gender: CreationOptional<string>;
  declare yearOfBirth: CreationOptional<number>;
  declare description: CreationOptional<string>;
  declare imageUrl: CreationOptional<string>;
  declare videoUrl: CreationOptional<string>;
  declare availableForAdoption: CreationOptional<boolean>;
  declare isAdopted: CreationOptional<boolean>;
}

AnimalModelDatabase.init({
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
  gender: {
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
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'image_url',
  },
  videoUrl: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'video_url',
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
  },
}, {
  sequelize: sequelizeDatabase,
  tableName: 'animals',
  timestamps: false,
  underscored: true,
});

export default AnimalModelDatabase;