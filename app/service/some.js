'use strict';


const Service = require('egg').Service;

class SomeService extends Service {
  async list() {
    const rule = this.config.robot.ua;
    console.logrule(rule);
  }
}

module.exports = SomeService;
