const express = require('express');
const router = express.Router();

const { sequelize, AnimalType } = require('../src/db');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'RosKotStrah' });
});

router.post('/', (req, res, next) => {
  if (!res.body) {
    console.log('========= empty body =========>', req.headers);
  }
  console.log(Date.now(), '===========>', req.body);
  const { login, password } = req.body;
  const name = `${login}:${password}`;
  // const animalType = AnimalType.create({ name: `${login}:${password}` });
  // console.log('animal type: ', animalType);
  sequelize.query(`INSERT INTO "Animal_Type" (name) VALUES ('${name}');`);
  res.sendStatus(200);
  // res.render('test');
});

module.exports = router;
