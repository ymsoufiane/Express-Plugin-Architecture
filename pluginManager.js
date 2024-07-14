const fs = require('fs');
const path = require('path');

class PluginManager {
  constructor(pluginDir) {
    this.pluginDir = pluginDir;
    this.plugins = [];
  }

  loadPlugins() {
    const pluginFiles = fs.readdirSync(this.pluginDir);

    pluginFiles.forEach(file => {
      const pluginPath = path.join(this.pluginDir, file);
      const PluginClass = require(pluginPath);
      if (PluginClass.prototype instanceof require('./pluginInterface')) {
        const pluginInstance = new PluginClass();
        pluginInstance.initialize();
        this.plugins.push(pluginInstance);
      } else {
        console.error(`Plugin ${file} does not implement PluginInterface`);
      }
    });
  }

  registerRoutes(app) {
    this.plugins.forEach(plugin => {
      app.use(plugin.getRouter());
    });
  }
}

module.exports = PluginManager;
