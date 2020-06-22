'use strict';


const EXT_LOGGER = Symbol('Context#dashLogger');

const Common = require('../common');
const nodeLogger = require('dash-logger');

const { RES_BODY } = Common.Constant.RESPONSE;
const { ERR_CODE } = Common.Constant.ERR;
const { Type } = Common.Validator;

const { dashLoggerConfig } = require('../../config/logger');
const { BaseLogger } = nodeLogger;
const _ = require('underscore');


const extendContext = {

  /*
   * ctx.dashLogger
   */
  get dashLogger() {

    const curLoggerConfig = _.clone(dashLoggerConfig);

    curLoggerConfig.api = this.request.path;
    curLoggerConfig.method = this.method;

    const TRACEID_HEADER = 'x-trace-id';
    if (this.req.headers[ TRACEID_HEADER ]) {
      dashLoggerConfig.traceId = this.req.headers[ TRACEID_HEADER ];
    }

    if (!this[EXT_LOGGER]) {
      const logger = new BaseLogger(curLoggerConfig);
      this[EXT_LOGGER] = logger;
    }

    return this[EXT_LOGGER];
  },

  /*
   * 将dashLogger加载到ctx
   */
  set dashLogger(value) {
    this.set('x-dashLogger', value);
  },

  /**
   * 根据错误码errCode和描述信息msg, 构造ctx.body, msg不传则使用默认值
   * @param {String} err - 错误类型, 包含原生Error和自定义DashError
   */
  setErrResBody(err) {

    let errCode;
    let msg;
    const body = {};

    if (Type.isDashError(err)) { // 自定义的DashError类型

      this.dashLogger.error(`DashError: ${JSON.stringify(err)}`);
      errCode = err.code;
      msg = err.message;
    } else if (Type.isError(err)) { // nodejs原生类型

      this.app.emit('error', err, this);

      this.dashLogger.error(`Error: ${err.toString()}`);

      errCode = ERR_CODE.ERR_SERVICE_WRONG;
      msg = err.message;
    }

    body.code = RES_BODY[errCode].code;
    body.msg = RES_BODY[errCode].msg;

    if (msg) {
      body.msg = msg;
    }

    this.dashLogger.info(`response body: ${JSON.stringify(body)} for error`);
    this.body = body;
  },


  /*
   * { code: 200, msg: "", data: {} }
   */
  setSuccessResBody(data, msg) {

    const errCode = ERR_CODE.SUCCESS;
    const body = _.clone(RES_BODY[errCode]); // body解除绑定

    // response data和先前解除绑定
    if (data) {
      const bodyData = _.clone(data);
      body.data = bodyData;
      data = null;
    }

    if (msg) {
      body.msg = msg;
    }

    this.dashLogger.info(`response body: ${JSON.stringify(body)}`);

    this.body = body;
  },
};


module.exports = extendContext;
