const express = require('express');
const router = express.Router();

const { sequelize, AnimalType, Breed } = require('../src/db/db');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'RosKotStrah' });
});

router.get('/admin', (req, res, next) => {
  res.render('admin');
});

/**
 * Animal_Type
 */
router.get('/animal_type', async (req, res, next) => {
  const animalTypes = await sequelize.query('SELECT id, name FROM "Animal_Type";', {
    model: AnimalType,
    mapToModel: true,
  });
  res.json({ animalTypes });
});

router.get('/animal_type/:id', async (req, res, next) => {
  const animalTypes = await sequelize.query('SELECT id, name FROM "Animal_Type" WHERE id = :id;', {
    replacements: { id: req.params.id },
    model: AnimalType,
    mapToModel: true,
  });
  res.json({ animalTypes });
});

router.post('/animal_type', async (req, res, next) => {
  // эквивалентно: const animalType = await AnimalType.create({ name: req.body.name });
  const [animalType] = await sequelize.query('INSERT INTO "Animal_Type" (name) VALUES (:name) RETURNING id, name;', {
    replacements: { name: req.body.name },
    model: AnimalType,
    mapToModel: true,
  });
  console.log(`[create] animal type: { id: ${animalType.id}, name: ${animalType.name} }`);
  res.sendStatus(200);
});

router.put('/animal_type/:id', async (req, res, next) => {
  await sequelize.query('UPDATE "Animal_Type" SET name = :name WHERE id = :id;', {
    replacements: { id: req.params.id, name: req.body.name },
    model: AnimalType,
    mapToModel: true,
  });
  console.log('[update] animal type:', req.body.name);
  res.sendStatus(200);
});

router.delete('/animal_type/:id', async (req, res, next) => {
  await sequelize.query('DELETE FROM "Animal_Type" WHERE id = :id;', {
    replacements: { id: req.params.id },
  });
  res.sendStatus(200);
});

/**
 * Breed
 */
router.get('/breed', async (req, res, next) => {
  const breeds = await sequelize.query('SELECT id, name, id_animal_type FROM "Breed";', {
    model: Breed,
    mapToModel: true,
  });
  res.json({ breeds });
});

router.get('/breed/:id', async (req, res, next) => {
  const breeds = await sequelize.query('SELECT id, name, id_animal_type FROM "Breed" WHERE id = :id;', {
    replacements: { id: req.params.id },
    model: Breed,
    mapToModel: true,
  });
  res.json({ breeds });
});

router.post('/breed', async (req, res, next) => {
  const [breed] = await sequelize.query(
    'INSERT INTO "Breed" (name, id_animal_type) VALUES (:name, :id_animal_type) RETURNING id, name, id_animal_type;',
    {
      replacements: { name: req.body.name, id_animal_type: req.body.name },
      model: Breed,
      mapToModel: true,
    }
  );
  console.log('[create] breed:', JSON.stringify(breed));
  res.sendStatus(200);
});

router.delete('/breed/:id', async (req, res, next) => {
  await sequelize.query('DELETE FROM "Breed" WHERE id = :id;', {
    replacements: { id: req.params.id },
  });
  res.sendStatus(200);
});

module.exports = router;
