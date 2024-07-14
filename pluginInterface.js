
class PluginInterface {
    constructor() {
      this.router = require('express').Router();
    }
  
    initialize() {
      throw new Error('initialize method must be implemented');
    }
  
    getRouter() {
      throw new Error('getRouter method must be implemented');
    }
  }
  
  module.exports = PluginInterface;
  