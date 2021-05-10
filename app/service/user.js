'use strict';

const md5 = require('md5');
const Service = require('egg').Service;

class UserService extends Service {
  // 创建默认用户
  async createUser(params) {
    await this.app.mysql.insert('user', { name: params.name, password: md5(params.password) });
  }
  // 用户登录，验证账号和密码
  async getAdminByLogin(userName, password) {
    return await this.app.mysql.get('user', { userName, password: md5(password) });
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
