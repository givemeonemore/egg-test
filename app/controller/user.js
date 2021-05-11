'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async createUser() {
    const ctx = this.ctx;
    console.log(ctx.request.body);
    const params = ctx.request.body;
    const data = await ctx.service.user.createUser(params);
    ctx.body = {
      data,
      code: 200,
    };
  }
  async login() {
    const ctx = this.ctx;
    console.log(ctx.request.body);
    const params = ctx.request.body;
    const data = await ctx.service.user.getUserByLogin(params);
    ctx.body = {
      data,
      code: 200,
    };
  }
}

module.exports = UserController;
