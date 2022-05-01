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
 function getDNSStats(domain) {
  let obj = {};
  for (let i = 0; i < domain.length; i++) {
    let arr = domain[i].split(".")
    let reversDomains = arr.reverse();
    for (let j = 0; j < reversDomains.length; j++) {
      let domain = `.${reversDomains.slice(0, j + 1).join('.')}`
      obj[domain] = obj[domain] ? obj[domain] + 1 : 1
    }
  }
  return obj
}

module.exports = {
  getDNSStats
};
