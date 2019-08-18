'use strict'
// Exercise 3 - Classical Inheritance
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox
class Animal {
  constructor (numLegs, isWarmBlooded, voice) {
    this._numLegs = numLegs
    this._isWarmBlooded = isWarmBlooded
    this.superPower = new SuperPower()
    this._voice = voice
  }

  makeSound () {
    return this._voice
  }
}
class SuperPower {
  useLaserVision () {
    return `Bzzzzzzzzzzz------------>>>>>`
  }

  beInvisible () {
    return `Poffs, I'm invisible! You cannot see me!`
  }
}

class Frog extends Animal {
  constructor () {
    super(4, false, `croak croak!`)
    this._canSwim = true
  }
}

class Bat extends Animal {
  constructor () {
    super(2, false, `screech!`)
    this._canFly = true
  }
}

class Dog extends Animal {
  constructor () {
    super(4, true, `barks!`)
    this._canSwim = true
  }
}

class Fox extends Animal {
  constructor () {
    super(4, true, `awwwooooo!`)
    this._haveFang = true
  }
}

class Chicken extends Animal {
  constructor () {
    super(2, true, `pok pok petok!`)
    this._haveWings = true
  }
}

const chirpie = new Chicken()
console.log(`Chicken number's of legs: ${chirpie._numLegs}`) // 2
console.log(`Chicken is warm blooded: ${chirpie._isWarmBlooded}`) // true
console.log(`Chicken sound: ${chirpie.makeSound()}`)

const doggie = new Dog()
console.log(`Dog number's of legs: ${doggie._numLegs}`) // 4
console.log(`Dog is warm blooded: ${doggie._isWarmBlooded}`) // true
console.log(`Dog sound: ${doggie.makeSound()}`)

const foxie = new Fox()
console.log(`Fox number's of legs: ${foxie._numLegs}`) // 4
console.log(`Fox is warm blooded: ${foxie._isWarmBlooded}`) // true
console.log(`Fox superpower: ${foxie.superPower.useLaserVision()}`)
console.log(`Fox sound: ${foxie.makeSound()}`)

const froggie = new Frog()
console.log(`Frog number's of legs: ${froggie._numLegs}`) // 4
console.log(`Frog is warm blooded: ${froggie._isWarmBlooded}`) // false
console.log(`Frog superpower: ${froggie.superPower.beInvisible()}`)
console.log(`Frog sound: ${froggie.makeSound()}`)

const zubat = new Bat()
console.log(`Bat number's of legs: ${zubat._numLegs}`) // 2
console.log(`Bat is warm blooded: ${zubat._isWarmBlooded}`) // false
console.log(`Bat superpower: ${zubat.superPower.beInvisible()}`)
console.log(`Bat sound: ${zubat.makeSound()}`)
