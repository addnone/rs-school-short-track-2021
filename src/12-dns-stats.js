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
  const counter = {};

  domains.forEach((path) => {
    const pathArr = path.split('.').reverse();
    for (let idx = 1; idx <= pathArr.length; idx++) {
      const arr = [''].concat(pathArr.slice(0, idx));

      const key = arr.join('.');

      if (counter[key]) {
        counter[key] += 1;
      } else {
        counter[key] = 1;
      }
    }
  });

  return counter;
}

module.exports = getDNSStats;
