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

  constructor(value) {
    this.isDirect = (value === false) ? false : true;
  }

  encrypt(str, keyWord) {
    if (!str || !keyWord) throw new Error('Incorrect arguments!');
    const strChars = str.toUpperCase().split(''),
          keyWordUpCase = keyWord.toUpperCase();
    let indexOfKey = -1;
    const vigenereChars = strChars.map((char, index) => {
      if (char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91){
        indexOfKey++;
        return String.fromCharCode(((char.charCodeAt(0) + keyWordUpCase.charCodeAt(indexOfKey % keyWord.length) - 130) % 26) + 65);
      }else{
        return char;
      }
    });
    if (this.isDirect) return vigenereChars.join('');
    return vigenereChars.reverse().join('');
  }

  decrypt(str, keyWord) {
    if (!str || !keyWord) throw new Error('Incorrect arguments!');
    const strChars = str.toUpperCase().split(''),
          keyWordUpCase = keyWord.toUpperCase();
    let indexOfKey = -1;
    const vigenereChars = strChars.map((char, index) => {
      if (char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91){
        indexOfKey++;
        return String.fromCharCode(((26 + char.charCodeAt(0) - keyWordUpCase.charCodeAt(indexOfKey % keyWord.length)) % 26) + 65);
      }else{
        return char;
      }
    });
    if (this.isDirect) return vigenereChars.join('');
    return vigenereChars.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
