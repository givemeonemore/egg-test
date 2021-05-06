/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  const cookie = 'SESSION=ef2655f6-0f03-4ec7-afe9-a3729d7b6106,redirect=/Portal,dist-token=ef2655f6-0f03-4ec7-afe9-a3729d7b6106,session-key=de11921a-f0f4-4365-a66b-d5903957ffc3,region-key=330500000000';

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
      hostname: '0.0.0.0', // 不建议设置 hostname 为 '0.0.0.0'，它将允许来自外部网络和来源的连接，请在知晓风险的情况下使用
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
  console.log(appInfo);

  config.mysql = {
  // 单数据库信息配置
    client: {
    // host
      host: '47.116.72.60',
      // 端口号
      port: '7001',
      // 用户名
      user: 'root',
      // 密码
      password: 'IloveYOU025848',
      // 数据库名
      database: 'ZHOURAN',
    },
    // 所有数据库配置的默认值
    default: {},
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
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
