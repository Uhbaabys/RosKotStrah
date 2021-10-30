const express = require('express');
const router = express.Router();

const { sequelize, AnimalType } = require('../src/db/db');

router.get('/', (req, res, next) => {
  res.render('index', { title: 'RosKotStrah' });
});

router.get('/animal', async (req, res, next) => {
  const animalType = await sequelize.query('SELECT id, name FROM "Animal_Type";', {
    model: AnimalType,
    mapToModel: true,
  });
  res.json({ animals: animalType });
});

router.post('/animal', async (req, res, next) => {
  if (!req.body) {
    console.log('========= empty body =========>', req.headers);
  }
  const { name } = req.body;
  // эквивалентно: const animalType = await AnimalType.create({ name });
  const [animalType] = await sequelize.query('INSERT INTO "Animal_Type" (name) VALUES (:name) RETURNING id, name;', {
    replacements: { name },
    model: AnimalType,
    mapToModel: true,
  });
  console.log(`animal type: { id: ${animalType.id}, name: ${animalType.name} }`);
  res.sendStatus(200);
});

module.exports = router;
