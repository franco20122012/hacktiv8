'use strict'
// Exercise 1 - Advance Calculator
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

class Calculator {
  constructor (num) {
    this.num = num
  }

  add (num) {
    this.num += num
    return this
  }

  subtract (num) {
    this.num -= num
    return this
  }

  multiply (num) {
    this.num *= num
    return this
  }

  divide (num2, num1 = this.num) {
    this.num = num1 / num2
    return this
  }

  square (num) {
    this.num **= num
    return this
  }

  squareRoot (num) {
    this.num = Math.pow(this.num, 1 / num)
    return this
  }

  pi () {
    return Math.PI
  }

  result () {
    return this.num
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

const calculate = new Calculator(10)

// TEST CASES
console.log(calculate.add(2).divide(4).subtract(1).multiply(6).square(2).squareRoot(2).result())
// 10 + 2 => 12 / 4 => 3 - 1 => 2 * 6 => 12 ** 2 => sqrt(144) => 12
console.log(calculate.pi())
// 3.141592653589793

module.exports = Calculator

/* (Notes) Destructured Assignment
const a = {
  hello: 'heloo',
  shout: 'argghh'
}

const { hello, shout } = a

console.log(hello)
console.log(shout) */
