const Sequelize = require('sequelize');

const sequelize = new Sequelize('RosKotStrah', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres',
    port: '5432'
  });

// const sequelize = new Sequelize('postgres://admin:admin:5432/RosKotStrah')

  (async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  })()

