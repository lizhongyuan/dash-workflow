'use strict';


class DashError extends Error {

  constructor(param) {
    super();

    const { code, message, detail, info } = param;

    this.code = code;
    this.message = message;
    this.data = detail;
    this.info = info;
  }

  toJSON() {
    return {
      code: this.code,
      message: this.message,
      data: this.data,
      info: this.info,
    };
  }

  toString() {
    return this.toJSON().toString();
  }
}


module.exports = DashError;
