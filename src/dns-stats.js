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
  const revDomains = domains.map( item => item.split('.').reverse() );
  const dnsArray = revDomains.map( item => 
    item.map( (i, ind) => '.' + item.slice(0, ind + 1).join('.'))
  )
  const res = {};
    dnsArray.forEach( item => {
      item.forEach(i => {
        if (res[i]) res[i]++;
        else res[i] = 1;
      });
    });
  return res;
}

module.exports = {
  getDNSStats
};
