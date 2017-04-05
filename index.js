/**
 * @file 配置信息
 * @author hushicai(bluthcy@gmail.com)
 */

function _get(db) {
  return {
    host: 'localhost',
    port: 6379,
    db: db
  }
}

exports = require('./conf/redis');

exports.webconfig = require('./conf/webconfig');

module.exports = exports;
