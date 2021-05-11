'use strict';


const Service = require('egg').Service;

class SomeService extends Service {
  async list() {
    this.config.robot.ua;
  }
}

module.exports = SomeService;
