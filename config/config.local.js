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

  // use for cookie sign key, should change to your own and keep security
  console.log(appInfo);
  config.keys = 'SESSION=NDJjYzgzODgtOTA5My00ZjljLTlkNjYtOTJjZDBmNDk4YjEw,dist-token=c3e1fa03-636d-45b9-9ee0-af31f4b28685';

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };
  config.news = {
    pageIndex: 1,
    pageSize: 10,
    planType: 100000,
    level: 2,
    serverUrl: 'http://52.83.103.252:8086/dgp-server-web-nr/rest/ars/private/reviewTask/v5/reviewTask/page',
  };

  config.robot = {
    ua: [
      /Baiduspider/i,
    ],
  };

  config.middleware = [
    'robot',
  ];


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
