'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 goods 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('goods', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(30),
      img: STRING(100),
      created_at: DATE,
      updated_at: DATE,
    });
  },
  // 在执行数据库降级时调用的函数，删除 goods 表
  down: async queryInterface => {
    await queryInterface.dropTable('goods');
  },
};
