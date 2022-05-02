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
  result = '';
  for (let i = 0; i < str.length; i++) {
    let count = 1;
    while (str[i] === str[i + 1]) {
      count += 1;
      i++
    }
    if (count === 1) {
      result += str[i];
    } else {
      result += count + str[i]
    }
  }
  return result;
}

module.exports = {
  encodeLine
};