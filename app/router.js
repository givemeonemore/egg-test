'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/news', controller.news.list);

  // user系列
  router.get('/user/create', controller.user.createUser); // 用户创建
  router.post('/user/login', controller.user.login); // 用户登录

  // goods系列
  router.resources('/goods', '/goods/getGoods', controller.goods.getGoods);
  router.post('/goods/create', controller.goods.create);
};

