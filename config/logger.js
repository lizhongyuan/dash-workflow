'use strict';


const homeDir = require('os').homedir();


exports.dashLoggerConfig = {
  datePattern: '-YYYY.MM.DD', // 日志文件名时间格式
  isDatePrefix: false, // 日志文件名时间是否是前缀
  filename: 'dash_workflow', // 日志文件名filename部分
  dir: homeDir + '/logs', // 日志文件目录: ~/logs
  level: 'info', // 最低日志等级
  console: true, // 是否在console打印
  needErrorFile: true, // 是否同时生成-error.log日志
  autoTraceId: true, // 初始化没有traceId的时候是否自动生成一个
};
