const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let count = 1;
  let temp = '';
  for (let char of str) {
    if (temp === char) {
      count++
    }else{
      if (count > 1) res += count.toString() + temp;
      else res += temp;
      temp = char;
      count = 1;
    }
  }
  return (count > 1) ? res + count.toString() + temp : res += temp;
}

module.exports = {
  encodeLine
};
