'use strict';


const { Service } = require('egg');


class CalculationService extends Service {

  async multi2(params) {

    const { ctx } = this;
    const { arrange } = ctx;
    let { num1 } = arrange;

    arrange.step++;

    ctx.dashLogger.info(arrange);

    num1 = num1 * 2;

    arrange.num1 = num1;

    return {
      num1
    };
  }


  async multi4(params) {

    const { ctx } = this;
    const { arrange } = ctx;
    let { num2 } = arrange;

    arrange.step++;

    ctx.dashLogger.info(arrange);

    num2 = num2 * 4;

    arrange.num2 = num2;

    return {
      num2
    };
  }

  async add(params) {

    const { ctx } = this;
    const { arrange } = ctx;
    const { num1, num2 } = arrange;

    arrange.step++;

    ctx.dashLogger.info(arrange);

    const result = num1 + num2;

    arrange.result = result;

    return {
      result
    };
  }
}


module.exports = CalculationService;
