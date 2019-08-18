'use strict'
// Exercise 3 - Cookies and Ovens
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?

class Oven {
  constructor () {
    this.cakeBakingTray = []
  }

  addCake (cake) {
    this.cakeBakingTray.push(cake)
    return this
  }

  bake (timer) {
    // looping pertambahan timer setiap 5 menit -> check console log

    console.log(`\n┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`)
    console.log(`┃          Start Baking!          ┃`)
    console.log(`┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`)
    for (let i = 0; i <= timer; i += 5) {
      console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
      console.log(`Time: ${i} minutes`)
      console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
      for (let j = 0; j < this.cakeBakingTray.length; j++) {
        const cake = this.cakeBakingTray[j]
        cake.checkStatus(i)
        console.log(`${cake.name}, minutes to ${i} : ${cake.status}`)
      }
    }
    console.log(`┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`)
    console.log(`┃          Finish Baking!         ┃`)
    console.log(`┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`)
  }
}
class Cake {
  constructor (name = 'Cake', cookedTime = 10, status = 'uncooked') {
    this.name = name
    this.cookedTime = cookedTime
    this.status = status
  }

  checkStatus (time) {
    if (time > this.cookedTime) {
      this.status = 'burnt'
    } else if (time === this.cookedTime) {
      this.status = 'well-done'
    } else if (time < this.cookedTime && time >= this.cookedTime - 5) {
      this.status = 'half-cooked'
    }
  }
}

class ChocolateCake extends Cake {
  constructor () {
    super('Chocolate cake', 20)
    this.containChocolate = true
  }
  // waktu panggang kue cokelat : 20 menit
}

class PeanutCake extends Cake {
  constructor () {
    super('Peanut cake', 30)
    this.isCrispy = true
  }
  // waktu panggang kue kacang : 30 menit
}

class CheeseCake extends Cake {
  constructor () {
    super('Cheese cake', 35)
    this.containCheese = true
  }
  // waktu panggang keju : 35 menit
}

const chococolateCake = new ChocolateCake()
const cheeseCake = new CheeseCake()
const peanutCake = new PeanutCake()

const oven = new Oven()
oven.addCake(chococolateCake).addCake(cheeseCake).addCake(peanutCake)
oven.bake(30)
