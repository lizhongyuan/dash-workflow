'use strict';


const DashError = require('../../common/error');


exports.isError = function(err) {
  return (err instanceof Error);
};


exports.isObject = function(obj) {
  return (obj instanceof Object);
};


exports.isNumber = function(number) {
  return (typeof number === 'number');
};


exports.isPositiveNumber = function(number) {
  return (typeof number === 'number' && number > 0);
};


exports.isNegativeNumber = function(number) {
  return (typeof number === 'number' && number < 0);
};


exports.isDashError = function(err) {
  return (err instanceof DashError);
};
