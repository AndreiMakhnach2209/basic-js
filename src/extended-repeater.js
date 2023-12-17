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
  let repeatStr = (s, n, sep) => new Array(n).fill(s).join(sep);

  let defValue = (key, newValue) => {
    if (!options[key]) options[key] = newValue;
  }
  if (options.addition === null) options.addition = 'null';

  defValue('separator', '+');
  defValue('additionSeparator', '|');
  defValue('repeatTimes', 1);
  defValue('additionRepeatTimes', 1);
  

  return repeatStr(str + repeatStr(options.addition, options.additionRepeatTimes, options.additionSeparator),
                  options.repeatTimes, options.separator);
}



module.exports = {
  repeater
};
