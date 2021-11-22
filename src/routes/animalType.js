const express = require('express');
const router = express.Router();

const { sequelize, AnimalType } = require('../db/db');

const TABLE_NAME = '"Animal_Type"';

router.get('/animal_type', async (req, res, next) => {
  const animalTypes = await sequelize.query(`SELECT id, name FROM ${TABLE_NAME};`, {
    model: AnimalType,
    mapToModel: true,
  });
  res.json({ Animal_Type: animalTypes });
});

router.get('/animal_type/:id', async (req, res, next) => {
  const animalTypes = await sequelize.query(`SELECT id, name FROM ${TABLE_NAME} WHERE id = :id;`, {
    replacements: { id: req.params.id },
    model: AnimalType,
    mapToModel: true,
  });
  res.json({ Animal_Type: animalTypes });
});

router.post('/animal_type', async (req, res, next) => {
  // эквивалентно: const animalType = await AnimalType.create({ name: req.body.name });
  const [animalType] = await sequelize.query(`INSERT INTO ${TABLE_NAME} (name) VALUES (:name) RETURNING *;`, {
    replacements: { name: req.body.name },
    model: AnimalType,
    mapToModel: true,
  });
  console.log(`[create] animal type: { id: ${animalType.id}, name: ${animalType.name} }`);
  res.json({ Animal_Type: [animalType] });
});

router.put('/animal_type/:id', async (req, res, next) => {
  const format = Object.keys(req.body)
    .map((key) => `${key} = :${key}`)
    .join(', ');
  await sequelize.query(`UPDATE ${TABLE_NAME} SET ${format} WHERE id = :id;`, {
    replacements: { ...req.body, id: req.params.id },
    model: AnimalType,
    mapToModel: true,
  });
  console.log('[update] animal type:', req.body.name);
  res.sendStatus(200);
});

router.delete('/animal_type/:id', async (req, res, next) => {
  await sequelize.query(`DELETE FROM ${TABLE_NAME} WHERE id = :id;`, {
    replacements: { id: req.params.id },
  });
  res.sendStatus(200);
});

module.exports = router;
