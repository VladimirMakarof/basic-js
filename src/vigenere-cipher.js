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

  constructor(flag = true) {
    this.flag = flag
  }

  generateAlphabet() {
    const res = []

    for (let i = 65; i < 91; i++) {
      res.push(String.fromCharCode(i))
    }

    return res
  }



  getMatrix() {
    const matrix = []
    let alphabet = this.generateAlphabet()
    for (let i = 0; i < alphabet.length; i++) {
      matrix.push(alphabet)
      alphabet = alphabet.slice(1).concat(alphabet.slice(0, 1))
    }
    return matrix
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error(`Incorrect arguments!`)

    let k = Math.ceil(message.length / key.length)///сколько раз надо повторить ключ
    const keyLong = key.repeat(k)

    const mesArr = message.toUpperCase().split('')
    const keyArr = keyLong.toUpperCase().split('')//делаем массивы

    const res = []
    const alphabet = this.generateAlphabet()
    const matrix = this.getMatrix()
    let keyIndex = 0

    for (let i = 0; i < mesArr.length; i++) {
      if (!alphabet.includes(mesArr[i])) {
        res.push(mesArr[i])//если не буква, то пушим
      } else {
        res.push(matrix[alphabet.indexOf(mesArr[i])][alphabet.indexOf(keyArr[keyIndex])])//ищем в матрице по индексам
        keyIndex += 1
      }
    }
    if (!this.flag) {
      res.reverse()
    }
    return res.join('')
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error(`Incorrect arguments!`)

    let k = Math.ceil(message.length / key.length)
    const keyLong = key.repeat(k)

    const mesArr = message.toUpperCase().split('')
    const keyArr = keyLong.toUpperCase().split('')

    const res = []
    const alphabete = this.generateAlphabet()
    const matrix = this.getMatrix()
    let keyIndex = 0

    for (let i = 0; i < mesArr.length; i++) {
      if (!alphabete.includes(mesArr[i])) {
        res.push(mesArr[i])
      } else {
        let j = matrix[alphabete.indexOf(keyArr[keyIndex])].indexOf(mesArr[i])
        res.push(alphabete[j])
        keyIndex += 1
        // keyArr = keyArr.slice(1).concat(keyArr.slice(0,1))
      }
    }
    if (!this.flag) {
      res.reverse()
    }
    return res.join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};