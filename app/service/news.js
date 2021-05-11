'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async list() {
    // read config
    const { serverUrl, pageIndex, pageSize,
      planType,
      level } = this.config.news;

    // use build-in http client to GET hacker-news api
    let idList;
    const url = `${serverUrl}?pageIndex=${pageIndex}&pageSize=${pageSize}&planType=${planType}&level=${level}`;
    if (url) {
      // 真实接口，但是访问不到，可以设置另外一个egg后台测试
      // idList = await this.ctx.curl(url, {
      //   dataType: 'json',
      //   withCredentials: true,
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });
      idList = [
        { name: '张三', url: 'https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=egg%20%E7%BC%96%E5%86%99%20service&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=2444196819,1009323354&os=2090783648,3796331973&simid=0,0&pn=2&rn=1&di=73050&ln=1392&fr=&fmq=1620283831450_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=15&spn=0&pi=0&gsm=0&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Fsc02.alicdn.com%252Fkf%252FHTB161ALaeP2gK0jSZFo761uIVXaA%252F220616825%252FHTB161ALaeP2gK0jSZFo761uIVXaA.png%26refer%3Dhttp%253A%252F%252Fsc02.alicdn.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1622875829%26t%3Db542bbe1ce5798a15e9c9ea3b2860501&rpstart=0&rpnum=0&adpicid=0&force=undefined' },
        { name: '李四', url: 'https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=egg%20%E7%BC%96%E5%86%99%20service&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=2444196819,1009323354&os=2090783648,3796331973&simid=0,0&pn=2&rn=1&di=73050&ln=1392&fr=&fmq=1620283831450_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=15&spn=0&pi=0&gsm=0&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Fsc02.alicdn.com%252Fkf%252FHTB161ALaeP2gK0jSZFo761uIVXaA%252F220616825%252FHTB161ALaeP2gK0jSZFo761uIVXaA.png%26refer%3Dhttp%253A%252F%252Fsc02.alicdn.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1622875829%26t%3Db542bbe1ce5798a15e9c9ea3b2860501&rpstart=0&rpnum=0&adpicid=0&force=undefined' },
        { name: '王五', url: 'https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=egg%20%E7%BC%96%E5%86%99%20service&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=2444196819,1009323354&os=2090783648,3796331973&simid=0,0&pn=2&rn=1&di=73050&ln=1392&fr=&fmq=1620283831450_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=15&spn=0&pi=0&gsm=0&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Fsc02.alicdn.com%252Fkf%252FHTB161ALaeP2gK0jSZFo761uIVXaA%252F220616825%252FHTB161ALaeP2gK0jSZFo761uIVXaA.png%26refer%3Dhttp%253A%252F%252Fsc02.alicdn.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1622875829%26t%3Db542bbe1ce5798a15e9c9ea3b2860501&rpstart=0&rpnum=0&adpicid=0&force=undefined' },
        { name: '赵六', url: 'https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=egg%20%E7%BC%96%E5%86%99%20service&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=2444196819,1009323354&os=2090783648,3796331973&simid=0,0&pn=2&rn=1&di=73050&ln=1392&fr=&fmq=1620283831450_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=15&spn=0&pi=0&gsm=0&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Fsc02.alicdn.com%252Fkf%252FHTB161ALaeP2gK0jSZFo761uIVXaA%252F220616825%252FHTB161ALaeP2gK0jSZFo761uIVXaA.png%26refer%3Dhttp%253A%252F%252Fsc02.alicdn.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1622875829%26t%3Db542bbe1ce5798a15e9c9ea3b2860501&rpstart=0&rpnum=0&adpicid=0&force=undefined' },
      ];
    } else {
      idList = await this.ctx.curl(`${serverUrl}`, {
        dataType: 'json',
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    return idList;


    // // parallel GET detail
    // const newsList = await Promise.all(
    //   Object.keys(idList).map(key => {
    //     return this.ctx.curl(key, { dataType: 'json' });
    //   })
    // );
    // return newsList.map(res => res.data);
  }
}

module.exports = NewsService;
