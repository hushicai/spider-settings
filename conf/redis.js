/**
 * @file redis配置信息
 * @author hushicai(bluthcy@gmail.com)
 */

function _get(db) {
  return {
    host: 'localhost',
    port: 6379,
    db: db
  }
}

module.exports = {
  rule_redis_db: _get(0),

  url_redis_db: _get(1),

  report_redis_db: _get(2),

  proxy_redis_db: _get(3)
};
