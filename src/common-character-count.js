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
  s1 = s1.split('');
  s2 = s2.split('');
  let count = 0;
  console.log(s1, s2)
  if (s1.length <= s2.length) {
    for (let i = 0; i < s1.length; i++) {
      for (let j = 0; j < s2.length; j++) {
        if (s1[i] === s2[j]) {
          s2[j] = undefined;
          count++;
          break;
        }
      }
    }
    console.log(count);
  }
  return count
}
getCommonCharacterCount("aabcc", "adcaa");
module.exports = {
  getCommonCharacterCount
};