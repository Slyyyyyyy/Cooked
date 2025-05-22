const express = require('express');
const mongoose = require('mongoose');
const itemRoutes = require('./routes/items');
const logger = require('./middleware/logger');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logger); 

mongoose.connect('mongodb://10.12.11.202:27017/Bruh', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("Locked in"))
  .catch((err) => console.error("Twin we is not locked in fool:", err));

app.get('/status', (req, res) => {
  res.json({ status: "ok" });
});
app.use('/items', itemRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`maybe not cooked ${PORT}`);
});
