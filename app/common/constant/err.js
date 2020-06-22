'use strict';


const ERR_CODE = {

  SUCCESS: 'SUCCESS',

  ERR_AUTH_SIGN_WRONG: 'ERR_AUTH_SIGN_WRONG',

  ERR_TMS_API_WRONG: 'ERR_TMS_API_WRONG',

  ERR_PARAM_ILLEGAL: 'ERR_PARAM_ILLEGAL', // 参数错误

  ERR_REPEAT_ACTION: 'ERR_REPEAT_ACTION', // 重复操作

  ERR_NO_TARGET_DATA: 'ERR_NO_TARGET_DATA', // 没有对应单据

  ERR_API_WRONG: 'ERR_API_WRONG', // 接口异常

  ERR_SERVICE_WRONG: 'ERR_SERVICE_WRONG', // 服务异常
};


const API_ERROR = {

  TYPE: {
    CANT_ACCESS: 0,
    RESPONSE_WRONG: 1,
  },
};


module.exports = {
  ERR_CODE,
  API_ERROR,
};