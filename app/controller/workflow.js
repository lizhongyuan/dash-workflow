'use strict';


const { Controller } = require('egg');


class WorkflowController extends Controller {


  /*
   * 测试复杂编排
   */
  async showWorkflow() {

    const { ctx } = this;

    await ctx.service.workflow.showWorkflow(ctx);
    ctx.setSuccessResBody();
  }

}


module.exports = WorkflowController;
