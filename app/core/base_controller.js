'use strict';

const { Controller } = require('egg');
const { ctx } = this;

/**
 * BaseController
 * @class
 * @author zhouran
 */
class BaseController extends Controller {
  get user() {
    return ctx.session.user;
  }

  success(data, status) {
    ctx.body = { code: ctx.SUCCESS_CODE, data };
    ctx.status = status || 200;
  }

  fail(code, message) {
    ctx.body = { code, message, data: {} };
    ctx.status = 200;
  }

  notFound(msg) {
    msg = msg || 'not found';
    ctx.throw(404, msg);
  }
}

module.exports = BaseController;
