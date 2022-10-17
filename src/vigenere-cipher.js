const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
 class VigenereCipheringMachine {
  constructor(value = true) {
    this.value = value;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(script, key) {
    if (!script || !key) {
      throw new Error('Incorrect arguments!');
    }
    const scriptUpper = script.toUpperCase();
    let keyWord = key.toUpperCase();
    if (scriptUpper.length > keyWord.length) {
      keyWord = keyWord
        .repeat(Math.ceil(scriptUpper.length / keyWord.length))
        .slice(0, scriptUpper.length);
    }
    let result = '';
    let count = 0;
    for (let i = 0; i < scriptUpper.length; i += 1) {
      if (this.alphabet.includes(scriptUpper[i])) {
        result +=
          this.alphabet[
            (this.alphabet.indexOf(scriptUpper[i]) +
              this.alphabet.indexOf(keyWord[i - count])) %
              this.alphabet.length
          ];
      } else {
        result += scriptUpper[i];
        count += 1;
      }
    }
    if (this.value === false) {
      return result.split('').reverse().join('');
    }
    return result;
  }

  decrypt(script, key) {
    if (!script || !key) {
      throw new Error('Incorrect arguments!');
    }
    const scriptUpper = script.toUpperCase();
    let keyWord = key.toUpperCase();
    if (scriptUpper.length > keyWord.length) {
      keyWord = keyWord
        .repeat(Math.ceil(scriptUpper.length / keyWord.length))
        .slice(0, scriptUpper.length);
    }
    let result = '';
    let count = 0;
    for (let i = 0; i < scriptUpper.length; i += 1) {
      if (this.alphabet.includes(scriptUpper[i])) {
        result +=
          this.alphabet[
            (this.alphabet.indexOf(scriptUpper[i]) -
              this.alphabet.indexOf(keyWord[i - count]) +
              this.alphabet.length) %
              this.alphabet.length
          ];
      } else {
        result += scriptUpper[i];
        count += 1;
      }
    }
    if (this.value === false) {
      return result.split('').reverse().join('');
    }
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
