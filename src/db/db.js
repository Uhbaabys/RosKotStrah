const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');

const createAnimalType = require('./AnimalType');
const createBreed = require('./Breed');

const sequelize = new Sequelize('RosKotStrah', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
  port: '5432',
});

const AnimalType = createAnimalType(sequelize, DataTypes);
const Breed = createBreed(sequelize, DataTypes);

AnimalType.hasMany(Breed, {
  foreignKey: {
    name: 'id_animal_type',
    type: DataTypes.BIGINT,
    references: '"Animal_Type"',
    referencesKey: 'id',
  },
});
Breed.belongsTo(AnimalType);

module.exports = {
  sequelize,
  AnimalType,
  Breed,
};
