const express = require('express');
const router = express.Router();

//return all items cuh
router.get('/', (req, res) => {
  res.json(items);
});

//add new item cuh
router.post('/', (req, res) => {
  const newItem = req.body;

  // Simple validation
  if (!newItem.name) {
    return res.status(400).json({ error: "Item must have a 'name' property" });
  }

  // Add an id (alson based on timestamp)
  newItem.id = Date.now();

  items.push(newItem);

  res.status(201).json(newItem);
});

//delete item by id
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);

  const index = items.findIndex(item => item.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Item not found" });
  }

  items.splice(index, 1);

  res.status(204).send(); // successful delete
});

module.exports = router;
