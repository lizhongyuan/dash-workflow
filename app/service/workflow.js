'use strict';


const Promise = require('bluebird');
const { Service } = require('egg');
const {
  cal1,
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

    ctx.dashLogger.info('taskMap:', JSON.stringify(taskArr));
  }

  async cal1() {

    const self = this;
    const { ctx } = this;
    const { service } = ctx;

    const arrangeContext = {
      step: 0,
    };

    const taskMap = await generalArrange(arrangeContext, cal1, service, self);

    ctx.dashLogger.info('cal1 taskMap:', JSON.stringify(taskMap));
  }

}


module.exports = WorkflowService;
