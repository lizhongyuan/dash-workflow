'use strict';


const { Service } = require('egg');


class CalculationService extends Service {

  async multi2(arrangeContext, params) {

    const { ctx } = this;
    let { num1 } = arrangeContext;

    arrangeContext.step++;

    ctx.dashLogger.info(arrangeContext);

    num1 = num1 * 2;

    arrangeContext.num1 = num1;

    return {
      num1
    };
  }


  async multi4(arrangeContext, params) {

    const { ctx } = this;
    let { num2 } = arrangeContext;

    arrangeContext.step++;

    ctx.dashLogger.info(arrangeContext);

    num2 = num2 * 4;

    arrangeContext.num2 = num2;

    return {
      num2
    };
  }

  async add(arrangeContext, params) {

    const { ctx } = this;
    const { num1, num2 } = arrangeContext;

    arrangeContext.step++;

    ctx.dashLogger.info(arrangeContext);

    const result = num1 + num2;

    arrangeContext.result = result;

    return {
      result
    };
  }
}


module.exports = CalculationService;
