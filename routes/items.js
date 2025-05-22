const express = require('express');
const router = express.Router();

let items = []; // Example in-memory store

router.get('/', (req, res) => {
  res.json(items);
});

router.post('/', (req, res) => {
  const newItem = req.body;
  newItem.id = Date.now();
  items.push(newItem);
  res.status(201).json(newItem);
});

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  items = items.filter(item => item.id !== id);
  res.status(204).send();
});

module.exports = router;  // <-- Export the router instance
