// Apple Tree Class

const tree = require('./fruit_tree.js')
const FruitTree = tree.FruitTree
const Fruit = tree.Fruit

class AppleTree extends FruitTree {
  // Initialize a new AppleTree
  constructor (treeName = 'AppleTree', treeInitAge = 0, treeInitHeight = 0, matureAge = 6, healthInitStatus = true, growRate = 0.4, maxGrowthAge = 21, maxAge = 25) {
    super(treeName, treeInitAge, treeInitHeight, matureAge, healthInitStatus, growRate, maxGrowthAge, maxAge)
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

module.exports = AppleTree
