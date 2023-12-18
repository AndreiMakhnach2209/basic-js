const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  return arr.reduce((acc, item, index, array) => {
    const a = Array.from(array);
    a.splice(index, 1);
    if (Number(a.join('')) > acc) return Number(a.join(''));
    return acc;
  }, 0)
}

module.exports = {
  deleteDigit
};
