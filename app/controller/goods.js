'use strict';

// const Controller = require('../core/base_controller');
const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class GoodController extends Controller {
  async getGoods() {
    const query = { limit: toInt(this.ctx.query.limit), offset: toInt(this.ctx.query.offset) };
    const data = await this.ctx.service.goods.getGoods(query);
    this.success(data);
    this.ctx.body = { code: this.ctx.SUCCESS_CODE, data };
    this.ctx.status = 200;
    // ctx.body = await ctx.model.Good.findAll(query);
  }

  async show() {
    const id = this.ctx.params.id;
    const data = await this.ctx.service.goods.showGood(toInt(id));
    this.success(data);
    this.ctx.body = { code: this.ctx.SUCCESS_CODE, data };
    this.ctx.status = 200;
    // ctx.body = await ctx.model.Good.findByPk(toInt(ctx.params.id));
  }

  async create() {
    const { name, img } = this.ctx.request.body;
    console.log(this.ctx.model.Goods);
    const Good = await this.ctx.service.goods.createGood({ name, img });
    // const Good = await this.ctx.model.Goods.create({ name, img });
    this.ctx.status = 201;
    this.ctx.body = Good;
  }

  async update() {
    const id = toInt(this.ctx.params.id);
    const Good = await this.ctx.model.Good.findByPk(id);
    if (!Good) {
      this.ctx.status = 404;
      return;
    }

    const { name, age } = this.ctx.request.body;
    await Good.update({ name, age });
    this.ctx.body = Good;
  }

  async destroy() {
    const id = toInt(this.ctx.params.id);
    const Good = await this.ctx.model.Good.findByPk(id);
    if (!Good) {
      this.ctx.status = 404;
      return;
    }

    await Good.destroy();
    this.ctx.status = 200;
  }
}

module.exports = GoodController;
