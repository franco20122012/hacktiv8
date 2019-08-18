'use strict'
// Exercise 4 - Mango Tree
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Release 2
class FruitTree {
  // Initialize a new fruit tree
  constructor (growRate = 0.4, maxGrowthAge = 17, matureAge = 3, maxAge = 20, fruitName = 'Fruit') {
    // super()
    this._fruitName = fruitName
    this._age = 0
    this._height = 0
    this._fruits = []
    this._harvested = 0
    this._healthy = true
    this._matureAge = matureAge
    this._maxAge = maxAge
    this._maxGrowthAge = maxGrowthAge
    this._maxFruits = 50
    this._good = 0
    this._bad = 0
    this._growRate = growRate
  }

  get maxGrowthAge () {
    return this._maxGrowthAge
  }

  get maxAge () {
    return this._maxAge
  }

  get growRate () {
    return this._growRate
  }

  get fruitName () {
    return this._fruitName
  }

  get age () {
    return this._age
  }

  get height () {
    return this._height.toFixed(1)
  }

  get fruits () {
    return this._fruits
  }

  get healthStatus () {
    return this._healthy
  }

  get harvested () {
    return this._harvested
  }

  // Get current states here

  // Grow the tree
  grow () {
    // Add the age of the tree by 1 year
    this._age++

    // Randomize the tree height increment
    if (this.age < this.maxGrowthAge) {
      this._height += this.growRate
    }

    // Set the maximum age
    if (this._age < this._maxAge) {
      this._healthy = true
    } else {
      this._healthy = false
    }
  }

  // Produce some fruits
  produceFruits () {
    // If tree already reached mature age, produce fruits
    if (this._age >= this._matureAge) {
      const totalFruits = Math.floor(Math.random() * 20) + 30
      for (let i = 0; i < totalFruits; i++) {
        const fruit = new Fruit()
        const quality = fruit.quality
        if (quality === 'good') {
          this._good++
        } else {
          this._bad++
        }
        this._fruits.push(quality)
      }
    }
  }

  // Get some fruits
  harvest () {
    this._harvested = `${this._fruits.length} (${this._good} good, ${this._bad} bad)`
    this._fruits = []
    this._bad = 0
    this._good = 0
  }
}

class Fruit {
  // Produce a fruit
  constructor (colour = 'white') {
    this._quality = this.quality
    this._colour = colour
  }

  get quality () {
    return ((Math.floor(Math.random() * 50)) % 2 === 0) ? 'good' : 'bad'
  }
}

// Release 0
class MangoTree extends FruitTree {
  // Initialize a new MangoTree
  constructor (growRate = 0.3, maxGrowthAge = 18, matureAge = 5, maxAge = 22, fruitName = 'Mango') {
    super(growRate, maxGrowthAge, matureAge, maxAge, fruitName)
  }

  // Produce some mangoes
  produceFruits () {
    // If tree already reached mature age, produce fruits
    if (this._age >= this._matureAge) {
      const totalFruits = Math.floor(Math.random() * 20) + 25
      for (let i = 0; i < totalFruits; i++) {
        const fruit = new Mango()
        const quality = fruit.quality
        if (quality === 'good') {
          this._good++
        } else {
          this._bad++
        }
        this._fruits.push(quality)
      }
    }
  }
}

class Mango extends Fruit {
  // Produce a mango
  constructor () {
    super('yellow')
    this._quality = this.quality
    this._containMangiferin = true
  }
}

class AppleTree extends FruitTree {
  // Initialize a new AppleTree
  constructor (growRate = 0.4, maxGrowthAge = 21, matureAge = 6, maxAge = 25, fruitName = 'Apple') {
    super(growRate, maxGrowthAge, matureAge, maxAge, fruitName)
  }

  // Produce some apples
  produceFruits () {
    // If tree already reached mature age, produce fruits
    if (this._age >= this._matureAge) {
      const totalFruits = Math.floor(Math.random() * 20) + 10
      for (let i = 0; i < totalFruits; i++) {
        const fruit = new Apple()
        if (fruit.quality === 'good') {
          this._good++
        } else {
          this._bad++
        }
        this._fruits.push(fruit)
      }
    }
  }
}

class Apple extends Fruit {
  // Produce an apple
  constructor () {
    super('red')
    this._quality = this.quality
    this._astrigency = true
  }
}

class PearTree extends FruitTree {
  // Initialize a new PearTree
  constructor (growRate = 0.15, maxGrowthAge = 16, matureAge = 2, maxAge = 17, fruitName = 'Pear') {
    super(growRate, maxGrowthAge, matureAge, maxAge, fruitName)
  }

  // Produce some pears
  produceFruits () {
    // If tree already reached mature age, produce fruits
    if (this._age >= this._matureAge) {
      const totalFruits = Math.floor(Math.random() * 20) + 17
      for (let i = 0; i < totalFruits; i++) {
        const fruit = new Pear()
        if (fruit.quality === 'good') {
          this._good++
        } else {
          this._bad++
        }
        this._fruits.push(fruit)
      }
    }
  }
}

class Pear extends Fruit {
  // Produce a pear
  constructor () {
    super('chartreuse green')
    this._quality = this.quality
    this._roughTexture = true
  }
}

/**
  * Driver code untuk RELEASE 0
  */
const fruitTree = new FruitTree()
console.log(`The ${fruitTree.fruitName} tree is alive! :smile:`)
do {
  fruitTree.grow()
  fruitTree.produceFruits()
  fruitTree.harvest()
  console.log(`${fruitTree.fruitName} Tree [Year ${('0' + fruitTree.age).slice(-2)} Report] Height = ${fruitTree.height} m | Fruits harvested = ${fruitTree.harvested}`)
} while (fruitTree.healthStatus !== false)
console.log(`The ${fruitTree.fruitName} tree has met its end. :sad:\n`)

const mangoTree = new MangoTree()
console.log(`The ${mangoTree.fruitName} tree is alive! :smile:`)
do {
  mangoTree.grow()
  mangoTree.produceFruits()
  mangoTree.harvest()
  console.log(`${mangoTree.fruitName} Tree [Year ${('0' + mangoTree.age).slice(-2)} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus !== false)
console.log(`The ${mangoTree.fruitName} tree has met its end. :sad:\n`)

// RELEASE 1
const appleTree = new AppleTree()
console.log(`The ${appleTree.fruitName} tree is alive! :smile:`)
do {
  appleTree.grow()
  appleTree.produceFruits()
  appleTree.harvest()
  console.log(`${appleTree.fruitName} Tree [Year ${('0' + appleTree.age).slice(-2)} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus !== false)
console.log(`The ${appleTree.fruitName} tree has met its end. :sad:\n`)

// RELEASE 2
const pearTree = new PearTree()
console.log(`The ${pearTree.fruitName} tree is alive! :smile:`)
do {
  pearTree.grow()
  pearTree.produceFruits()
  pearTree.harvest()
  console.log(`${pearTree.fruitName} Tree [Year ${('0' + pearTree.age).slice(-2)} Report] Height = ${pearTree.height} m | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthStatus !== false)
console.log(`The ${pearTree.fruitName} tree has met its end. :sad:\n`)
