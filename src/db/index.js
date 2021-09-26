const Sequelize = require('sequelize');
const createAnimalType = require('./AnimalType');

const sequelize = new Sequelize('RosKotStrah', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
  port: '5432',
});

const AnimalType = createAnimalType(sequelize);

module.exports = {
  sequelize,
  AnimalType,
};
