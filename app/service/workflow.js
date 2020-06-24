'use strict';


const Promise = require('bluebird');
const { Service } = require('egg');
const {
  case1,
  case2,
  case3,
  case4,
  case5,
  workflowConfig,
} = require('../../config/workflow.js');
const { generalArrange } = require('../util/arrange');


class WorkflowService extends Service {

  async showWorkflow() {

    const self = this;
    const { ctx } = this;
    const { service } = ctx;

    const arrangeContext = {
      step: 0,
    };

    const taskArr = await generalArrange(arrangeContext, case1, service, self);
    // await generalArrange(arrangeContext, case2, service, self);
    // await generalArrange(arrangeContext, case3, service, self);
    // await generalArrange(arrangeContext, case4, service, self);
    // await generalArrange(arrangeContext, case5, service, self);

    ctx.dashLogger.info('taskArr:', JSON.stringify(taskArr));
  }


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


module.exports = WorkflowService;
