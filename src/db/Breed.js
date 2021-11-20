const createBreed = (sequelize, DataTypes) => {
  return sequelize.define(
    'Breed', // название модели
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
      // id_animal_type: {
      //   type: DataTypes.BIGINT,
      //   references: '"Animal_Type"',
      //   referencesKey: 'id',
      // },
    },
    {
      tableName: '"Breed"', // фактическое имя таблицы
      timestamps: false, // без полей createAt, updatedAt
    }
  );
};

module.exports = createBreed;
