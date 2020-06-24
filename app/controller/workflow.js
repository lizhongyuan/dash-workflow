'use strict';


const { Controller } = require('egg');


class WorkflowController extends Controller {


  /*
   * 测试复杂编排
   */
  async showWorkflow() {

    const { ctx } = this;

    await ctx.service.workflow.showWorkflow();
    ctx.setSuccessResBody();
  }


  async cal1() {

    const { ctx } = this;

    const { num1, num2 } = ctx.request.body;

    const res = await ctx.service.workflow.cal1(num1, num2);

    ctx.setSuccessResBody(res);
  }

}


module.exports = WorkflowController;
