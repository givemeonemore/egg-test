'use strict';

const uuid = require('uuid');
function generatorUUID() {
  return uuid.v1().replace(/-/g, '');
}

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const User = app.model.define('users', {
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
    password: {
      type: STRING(150),
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

  return User;
};
