'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 goods 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, UUIDV1 } = Sequelize;
    await queryInterface.createTable('goods', {
      id: { type: INTEGER },
      uuid: {
        type: STRING(38),
        allowNull: false,
        primaryKey: true,
        defaultValue: UUIDV1,
      },
      name: STRING(30),
      img: STRING(1234),
      createdtime: DATE,
      lastmodifiedtime: DATE,
    });
  },
  // 在执行数据库降级时调用的函数，删除 goods 表
  down: async queryInterface => {
    await queryInterface.dropTable('goods');
  },
};
