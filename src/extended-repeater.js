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
  if (typeof str !== 'string') str = String(str);
  if (!options.hasOwnProperty('repeatTimes')) {
    options.repeatTimes = 1;
  }
  if (!options.hasOwnProperty('separator')) {
    options.separator = '+';
  }
  if (options.hasOwnProperty('addition')) {
    if (typeof options.addition !== 'string')
      options.addition = String(options.addition);
  } else {
    options.addition = '';
  }
  if (!options.hasOwnProperty('additionRepeatTimes')) {
    options.additionRepeatTimes = 1;
  }
  if (!options.hasOwnProperty('additionSeparator')) {
    options.additionSeparator = '|';
  }

  let allAddition = [];
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    allAddition.push(options.addition);
  }

  str += allAddition.join(options.additionSeparator);

  let allString = [];
  for (let i = 0; i < options.repeatTimes; i++) {
    allString.push(str);
  }

  return allString.join(options.separator);
}

module.exports = {
  repeater
};
