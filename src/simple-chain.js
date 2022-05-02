const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  array: [],
  
  getLength() {
    return this.array.length
  },

  addLink(value) {
    if (value === undefined) {
      this.array.push('( )');
    } else {
      this.array.push(`( ${value} )`);
    }    
    return this  
  },

  removeLink(pos) {
    if ((typeof pos !== 'number') || (pos <= 0) || (pos > this.array.length)) {
      this.array = [];
      throw new Error("You can't remove incorrect link!");
    } else {      
      this.array.splice(pos - 1, 1);      
    }    
    return this;
  },

  reverseChain() {
    this.array.reverse();
    return this;
  },
  
  finishChain() {
    let string = this.array.join('~~');
    this.array = [];
    return string;
  }, 
};

module.exports = {
  chainMaker
};
