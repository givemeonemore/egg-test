'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, CHAR } = app.Sequelize;
  const Goods = app.model.define('goods', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: {
      type: STRING(30),
      allowNull: false,
    },
    img: {
      type: CHAR(255),
      allowNull: false,
    },
    createdTime: {
      type: DATE,
      allowNull: true,
    },
    lastModifiedTime: {
      type: DATE,
      allowNull: true,
    },
  });

  Goods.createNew = async goods => {
    // if (Goods.get)
    console.log('方法是：' + Goods.createdTime);
    const result = await Goods.create(goods);
    return result;
  };

  return Goods;
};
