const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0,
      str = s2;

  for (let char1 of s1) {
    let currentIndex = 0;
    if (~str.indexOf(char1)){
      count++;
      currentIndex = str.indexOf(char1);
      str = str.slice(0,currentIndex) + str.slice(currentIndex + 1);
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
