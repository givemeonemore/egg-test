'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Goods = app.model.define('goods', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: {
      type: STRING(30),
      allowNull: false,
    },
    img: {
      type: STRING(120),
      allowNull: false,
    },
    createdTime: {
      type: DATE,
      allowNull: false,
    },
    lastModifiedTime: {
      type: DATE,
      allowNull: false,
    },
  });

  Goods.createNew = async goods => {
    const result = await Goods.create(goods);
    return result;
  };

  return Goods;
};
