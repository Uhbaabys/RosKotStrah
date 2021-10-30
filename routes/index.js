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

router.get('/animal_type', async (req, res, next) => {
  const animalTypes = await sequelize.query('SELECT id, name FROM "Animal_Type";', {
    model: AnimalType,
    mapToModel: true,
  });
  res.json({ animalTypes });
});

router.post('/animal_type', async (req, res, next) => {
  if (!req.body) {
    console.log('========= empty body =========>', req.headers);
  }
  // эквивалентно: const animalType = await AnimalType.create({ name: req.body.name });
  const [animalType] = await sequelize.query('INSERT INTO "Animal_Type" (name) VALUES (:name) RETURNING id, name;', {
    replacements: { name: req.body.name },
    model: AnimalType,
    mapToModel: true,
  });
  console.log(`animal type: { id: ${animalType.id}, name: ${animalType.name} }`);
  res.sendStatus(200);
});

module.exports = router;
