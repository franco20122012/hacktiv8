// Pear Tree Class

const tree = require('./fruit_tree.js')
const FruitTree = tree.FruitTree
const Fruit = tree.Fruit

class PearTree extends FruitTree {
  // Initialize a new PearTree
  constructor (treeName = 'PearTree', treeInitAge = 0, treeInitHeight = 0, matureAge = 2, healthInitStatus = true, growRate = 0.15, maxGrowthAge = 16, maxAge = 17) {
    super(treeName, treeInitAge, treeInitHeight, matureAge, healthInitStatus, growRate, maxGrowthAge, maxAge)
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

module.exports = PearTree
