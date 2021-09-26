const { DataTypes } = require('sequelize');

const createAnimalType = (sequelize) => {
  return sequelize.define('Animal_Type', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};

module.exports = createAnimalType;
