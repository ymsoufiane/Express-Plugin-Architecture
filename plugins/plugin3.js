// plugins/samplePlugin.js
const PluginInterface = require('../pluginInterface');

class SamplePlugin extends PluginInterface {
  initialize() {
    console.log('SamplePlugin initialized');
  }

  getRouter() {
    this.router.get('/sample3', (req, res) => {
      res.send('Hello from SamplePlugin 3');
    });
    return this.router;
  }
}

module.exports = SamplePlugin;
