const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {}
  for (let elem of domains) {
    let arr = elem.split('.').reverse()
    let key = ''
    for (let str of arr) {
      key += `.${str}`
      if (!obj[key]) {
        obj[key] = 1
      } else {
        obj[key] = obj[key] + 1
      }
    }
  }
  return obj
}

module.exports = {
  getDNSStats
};