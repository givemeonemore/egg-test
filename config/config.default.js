/* eslint valid-jsdoc: "off" */

'use strict';

const fecha = require('fecha');
const isNumber = require('lodash/isNumber');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  const cookie = appInfo.name + '_arcvue';

  // use for cookie sign key, should change to your own and keep security
  config.keys = cookie;

  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    credentials: true,
    origin: '*', // 允许的请求来源（* 表示允许所有的IP的请求 ）
  };

  config.cluster = {
    listen: {
      port: 7001,
      hostname: '127.0.0.1', // 不建议设置 hostname 为 '0.0.0.0'，它将允许来自外部网络和来源的连接，请在知晓风险的情况下使用
    },
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };
  config.news = {
    cookie,
    pageIndex: 1,
    pageSize: 10,
    planType: 100000,
    level: 2,
    serverUrl: 'http://52.83.103.252:8086/dgp-server-web-nr/rest/ars/private/reviewTask/v5/reviewTask/page',
  };

  config.robot = {
    ua: [
      /curl/i,
      /Baiduspider/i,
    ],
  };

  config.middleware = [
    'robot',
  ];

  config.mysql = {
  // 单数据库信息配置
    client: {
      // host
      host: '127.0.0.1',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'IloveYOU025848',
      // 数据库名
      database: 'database_development',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    // 用户名
    user: 'root',
    // 密码
    password: 'IloveYOU025848',
    database: 'database_development',
    timezone: '+08:00',
    define: {
      createdAt: 'createdtime',
      updatedAt: 'lastmodifiedtime',
      freezeTableName: true,
      timestamps: false,
      underscored: true,
      getterMethods: {
        createdtime() {
          const createdtime = this.getDataValue('createdtime');
          if (createdtime) {
            return fecha.format(createdtime, 'YYYY-MM-DD HH:mm:ss');
          }
          return fecha.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
        },
        lastmodifiedtime() {
          const lastmodifiedtime = this.getDataValue('lastmodifiedtime');
          if (lastmodifiedtime) {
            return fecha.format(lastmodifiedtime, 'YYYY-MM-DD HH:mm:ss');
          }
          return fecha.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
        },
      },
      setterMethods: {
        version(value) {
          if (isNumber(value)) {
            this.setDataValue('version', value + 1);
          }
        },
        createdtime(value) {
          this.setDataValue('createdtime', value);
        },
        lastmodifiedtime(value) {
          this.setDataValue('lastmodifiedtime', value);
        },
      },
    },
  };


  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
