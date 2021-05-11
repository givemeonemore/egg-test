'use strict';

const md5 = require('md5');
const Service = require('egg').Service;

class UserService extends Service {
  // 创建默认用户
  async createUser(params) {
    const data = await this.getUserByLogin(params);
    if (data.length) {
      return '已存在相同用户名';
    }
    return await this.ctx.model.Users.create({ name: params.name, password: md5(params.password) });
  }
  // 用户登录，验证账号和密码
  async getUserByLogin({ name: userName, password }) {
    const data = await this.ctx.model.Users.findAll({ where: { name: userName, password: md5(password) } });
    return data;
  }

  /**
   * 修改管理员密码
   * @param {object} params - 条件
   * @return {string|null} - 商家uuid
   */
  async savePasswordModify(params = {}) {
    const { app } = this;
    const { userUuid, userName, oldPassword, newPassword } = params;
    const modifyInfo = app.getModifyInfo(userUuid, userName);

    return await app.model.User.Admin.savePasswordModify({
      uuid: userUuid,
      oldPassword: md5(oldPassword),
      password: md5(newPassword),
      ...modifyInfo,
    });
  }
}

module.exports = UserService;
