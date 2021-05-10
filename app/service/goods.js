'use strict';

const Service = require('egg').Service;

/**
 * Service - admin
 * @class
 * @author ruiyong-lee
 */
class GoodService extends Service {
  /**
   * 获取商品
   * @param {object} query limit: 一页有多少天数据，offset: 第几页
   * @return {object|null}  - 查找结果
   */
  async getGoods(query) {
    const data = await this.ctx.model.Goods.findAll(query);
    return data;
  }
  /**
   * 修改管理员密码
   * @param {int} id - 条件
   * @return {string|null} - 商家uuid
   */
  async showGood(id) {
    const data = this.ctx.model.Goods.findByPk(id);
    return data;
  }

  async createGood(params) {
    console.log(params);
    const data = await this.ctx.model.Goods.createNew(params);
    return data;
  }
}

module.exports = GoodService;
