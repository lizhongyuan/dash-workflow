'use strict';


/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1556960858429_760';

  // add your middleware config here
  config.middleware = [
    'errorHandler',
  ];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.httpclient = {
    request: {
      timeout: 10 * 60 * 1000,
    },
  };

  /*
  // add your mongodb info here
  config.mongoose = {
    clients: {
      // clientId, access the client instance by app.mongooseDB.get('clientId')
      dunningdb: {
        url: 'mongodb://127.0.0.1/dunning',
        options: {},
      },
    },
  };
   */

  config.security = {
    csrf: {
      enable: false,
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
