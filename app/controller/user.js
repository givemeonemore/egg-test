'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async createUser() {
    const ctx = this.ctx;
    const params = ctx.request.body || {
      name: 'admin',
      password: 'pass123',
    };
    await ctx.service.user.createUser(params);
  }
  async login() {
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
