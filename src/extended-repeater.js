const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  repeatTimes = (options.repeatTimes || 1);
  separator = (options.separator || '+');
  addition = ("addition" in options ? String(options.addition) : '');
  additionRepeatTimes = (options.additionRepeatTimes || 1);
  additionSeparator = (options.additionSeparator || "|");

  let adder = [];
  for (let i = 0; i < additionRepeatTimes; i++) {
    adder.push(addition)
  }
  adder = adder.join(additionSeparator);

  let result = [];
  for (let i = 0; i < repeatTimes; i++) {
    result.push(str + adder)
  }
  result = result.join(separator);

  return result;
}


module.exports = {
  repeater
};