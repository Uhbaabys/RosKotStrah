const createAnimalType = (sequelize, DataTypes) => {
  return sequelize.define(
    'AnimalType', // название модели
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      tableName: '"Animal_Type"', // фактическое имя таблицы
      timestamps: false, // без полей createAt, updatedAt
    }
  );
};

modules.exports = createAnimalType;
