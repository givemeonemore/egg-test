'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    const code = ctx.SUCCESS_CODE;
    const data = await this.app.mysql.select('user');
    ctx.body = {
      data,
      code,
    };
  }
}

module.exports = UserController;
