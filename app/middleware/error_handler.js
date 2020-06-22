'use strict';


async function errorHandler(ctx, next) {

  try {
    await next();
    // ctx.dashLogger.info(`req succeed, body: ${JSON.stringify(ctx.request.body)}`);
  } catch (err) {
    ctx.dashLogger.error(`req error, body: ${JSON.stringify(ctx.request.body)}`);
    ctx.setErrResBody(err);
  }

}


module.exports = () => {
  return errorHandler;
};
