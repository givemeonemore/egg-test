'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      user: {
        name: 'zhangsan',
        age: 18,
        password: 'IloveYOU025848',
      },
    };
  }
}

module.exports = UserController;
