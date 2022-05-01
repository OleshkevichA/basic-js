const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(arr) {
  let dreamTeam = [];
  if (!Array.isArray(arr)){
    return false
  }
  for (let elem of arr){
    if (typeof elem == 'string'){
      elem = elem.split(' ').join('');
      dreamTeam.push(elem.slice(0, 1).toUpperCase())
    }
  }
  return dreamTeam.sort().join('')
}

module.exports = {
  createDreamTeam
};
