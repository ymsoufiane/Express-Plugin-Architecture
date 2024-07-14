// plugins/samplePlugin.js
const PluginInterface = require('../pluginInterface');

class SamplePlugin extends PluginInterface {
  initialize() {
    console.log('SamplePlugin initialized');
  }

  getRouter() {
    this.router.get('/sample', (req, res) => {
      res.send('Hello from SamplePlugin!');
    });
    return this.router;
  }
}

module.exports = SamplePlugin;
