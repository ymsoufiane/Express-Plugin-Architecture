// index.js
const express = require('express');
const path = require('path');
const PluginManager = require('./pluginManager');

const app = express();
const pluginManager = new PluginManager(path.join(__dirname, 'plugins'));

pluginManager.loadPlugins();

pluginManager.registerRoutes(app);

app.get('/', (req, res) => {
  res.send('Hello from the main app!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
