const express = require('express');
const router = express.Router();

const { sequelize, Breed } = require('../db/db');

const TABLE_NAME = '"Breed"';

router.get('/breed', async (req, res, next) => {
  const breeds = await sequelize.query(`SELECT id, name, id_animal_type FROM ${TABLE_NAME};`, {
    model: Breed,
    mapToModel: true,
  });
  res.json({ Breed: breeds });
});

router.get('/breed/:id', async (req, res, next) => {
  const breeds = await sequelize.query(`SELECT id, name, id_animal_type FROM ${TABLE_NAME} WHERE id = :id;`, {
    replacements: { id: req.params.id },
    model: Breed,
    mapToModel: true,
  });
  res.json({ Breed: breeds });
});

router.post('/breed', async (req, res, next) => {
  const { name, id_animal_type } = req.body;
  const [breed] = await sequelize.query(
    `INSERT INTO ${TABLE_NAME} (name, id_animal_type) VALUES (:name, :id_animal_type) RETURNING *;`,
    {
      replacements: { name, id_animal_type },
      model: Breed,
      mapToModel: true,
    }
  );
  console.log('[create] breed:', JSON.stringify(breed));
  res.json({ Breed: [breed] });
});

router.put('/breed/:id', async (req, res, next) => {
  const format = Object.keys(req.body)
    .map((key) => `${key} = :${key}`)
    .join(', ');
  await sequelize.query(`UPDATE ${TABLE_NAME} set ${format} WHERE id = :id`, {
    replacements: { ...req.body, id: req.params.id },
    model: Breed,
    mapToModel: true,
  });
  res.sendStatus(200);
});

router.delete('/breed/:id', async (req, res, next) => {
  await sequelize.query(`DELETE FROM ${TABLE_NAME} WHERE id = :id;`, {
    replacements: { id: req.params.id },
  });
  res.sendStatus(200);
});

module.exports = router;
