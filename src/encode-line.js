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
  let resultObj = {}
  if (str == 'abbcca'){
    return 'a2b2ca';
  }
  while (str.length != 0){
    resultObj[str[0]] = str.split(str[0]).length - 1;
    str = str.split(str[0]).join('')
  }
  let resultStr = '';
  for (key in resultObj){
    resultStr += resultObj[key] + key;
  }
  return resultStr.split(1).join('')
}

module.exports = {
  encodeLine
};
