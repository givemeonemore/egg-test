'use strict';

const uuid = require('uuid');
function generatorUUID() {
  return uuid.v1().replace(/-/g, '');
}

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Goods = app.model.define('goods', {
    id: { type: INTEGER, autoIncrement: true },
    uuid: {
      type: STRING(38),
      allowNull: false,
      primaryKey: true,
      defaultValue: () => generatorUUID(),
    },
    name: {
      type: STRING(30),
      allowNull: false,
    },
    img: {
      type: STRING(1234),
      allowNull: false,
    },
    createdtime: {
      type: DATE,
      allowNull: true,
    },
    lastmodifiedtime: {
      type: DATE,
      allowNull: true,
    },
  });

  return Goods;
};
