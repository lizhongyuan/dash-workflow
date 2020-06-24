'use strict';


const Promise = require('bluebird');
const { Service } = require('egg');


class NodeService extends Service {

  async node1(arrangeContext, params) {

    const { ctx } = this;

    arrangeContext.step++;

    ctx.dashLogger.info(arrangeContext);

    const timeout = params.timeout ? params.timeout : 0;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, timeout);
    });
  }

  async node2(arrangeContext, params) {

    const { ctx } = this;

    arrangeContext.step++;

    ctx.dashLogger.info(arrangeContext);

    const timeout = params.timeout ? params.timeout : 0;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, timeout);
    });
  }

  async node3(arrangeContext, params) {
    const { ctx } = this;
    arrangeContext.step++;
    ctx.dashLogger.info(arrangeContext);

    const timeout = params.timeout ? params.timeout : 0;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, timeout);
    });
  }

  async node4(arrangeContext, params) {
    const { ctx } = this;
    arrangeContext.step++;
    ctx.dashLogger.info(arrangeContext);

    const timeout = params.timeout ? params.timeout : 0;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, timeout);
    });
  }

  async node5(arrangeContext, params) {
    const { ctx } = this;
    arrangeContext.step++;
    ctx.dashLogger.info(arrangeContext);

    const timeout = params.timeout ? params.timeout : 0;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, timeout);
    });
  }

  async node6(arrangeContext, params) {
    const { ctx } = this;
    arrangeContext.step++;
    ctx.dashLogger.info(arrangeContext);

    const timeout = params.timeout ? params.timeout : 0;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, timeout);
    });
  }

  async node7(arrangeContext, params) {
    const { ctx } = this;
    arrangeContext.step++;
    ctx.dashLogger.info(arrangeContext);

    const timeout = params.timeout ? params.timeout : 0;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, timeout);
    });
  }

  async node8(arrangeContext, params) {
    const { ctx } = this;
    arrangeContext.step++;
    ctx.dashLogger.info(arrangeContext);

    const timeout = params.timeout ? params.timeout : 0;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, timeout);
    });
  }

  async node9(arrangeContext, params) {
    const { ctx } = this;
    arrangeContext.step++;
    ctx.dashLogger.info(arrangeContext);

    const timeout = params.timeout ? params.timeout : 0;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, timeout);
    });
  }

  async node10(arrangeContext, params) {
    const { ctx } = this;
    arrangeContext.step++;
    ctx.dashLogger.info(arrangeContext);

    const timeout = params.timeout ? params.timeout : 0;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, timeout);
    });
  }

  async node11(arrangeContext, params) {
    const { ctx } = this;
    arrangeContext.step++;
    ctx.dashLogger.info(arrangeContext);

    const timeout = params.timeout ? params.timeout : 0;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, timeout);
    });
  }
}


module.exports = NodeService;
