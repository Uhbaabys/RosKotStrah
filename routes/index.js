const express = require('express');
const router = express.Router();

const { sequelize, AnimalType } = require('../src/db/db');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'RosKotStrah' });
});

router.get('/admin', (req, res, next) => {
  res.render('admin');
});

router.get('/animal', (req, res, next) => {
  res.render('index', { title: 'RosKotStrah' });
});

router.post('/', async (req, res, next) => {
  if (!req.body) {
    console.log('========= empty body =========>', req.headers);
  }
  const { login, password } = req.body;
  const name = `${login}:${password}`;
  // эквивалентно: const animalType = await AnimalType.create({ name });
  const [animalType] = await sequelize.query(`INSERT INTO "Animal_Type" (name) VALUES ('${name}') RETURNING id, name;`, {
    model: AnimalType,
    mapToModel: true,
  });
  console.log(`animal type: { id: ${animalType.id}, name: ${animalType.name} }`);
  res.sendStatus(200);
});

module.exports = router;
