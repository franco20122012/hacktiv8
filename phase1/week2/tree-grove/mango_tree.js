// Mango Tree Class

const tree = require('./fruit_tree.js')
const FruitTree = tree.FruitTree
const Fruit = tree.Fruit

class MangoTree extends FruitTree {
  // Initialize a new MangoTree
  constructor (treeName = 'MangoTree', treeInitAge = 0, treeInitHeight = 0, matureAge = 5, healthInitStatus = true, growRate = 0.3, maxGrowthAge = 18, maxAge = 22) {
    super(treeName, treeInitAge, treeInitHeight, matureAge, healthInitStatus, growRate, maxGrowthAge, maxAge)
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

module.exports = MangoTree
