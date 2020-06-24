'use strict';


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

    ctx.arrange = {
      step: 0,
    };

    const taskArr = await generalArrange(case1, service, self);
    // await generalArrange(case2, service, self);
    // await generalArrange(case3, service, self);
    // await generalArrange(case4, service, self);
    // await generalArrange(case5, service, self);

    ctx.dashLogger.info('taskMap:', JSON.stringify(taskArr));
  }


  async cal1(num1, num2) {

    const self = this;
    const { ctx } = this;
    const { service } = ctx;

    ctx.arrange = {
      step: 0,
      num1,
      num2
    };

    const taskMap = await generalArrange(cal1, service, self);

    ctx.dashLogger.info('cal1 taskMap:', JSON.stringify(taskMap));

    const res = taskMap.result.res;

    return res;
  }

}


module.exports = WorkflowService;
