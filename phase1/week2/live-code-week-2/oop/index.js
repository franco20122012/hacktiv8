'use strict'
// OOP - Live Code Phase 1 Week 2
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

class Person {
  constructor(name, email, phone) {
    this.name = name
    this.email = email
    this.phone = phone
  }
}

class Ticket {
  constructor(type, price, title, orderedBy) {
    this.type = type
    this.price = price
    this.ticketCode = Math.floor(Math.random() * (999999999 - 111111111) + 11111111)
    this.status = 'booked'
    this.title = title
    this.orderedBy = orderedBy
  }
}

class MovieTicket extends Ticket {
  constructor(title, orderedBy) {
    super('movie', 50000, title, orderedBy)
  }
}

class EventTicket extends Ticket {
  constructor(title, orderedBy) {
    super('event', 300000, title, orderedBy)
  }
}

class Emoney {
  constructor(user, balance) {
    this.user = user
    this.balance = balance
  }

  topUp(value) {
    this.balance += value
    console.log(`Top up success, you added ${value} to your balance, your current balance is ${this.balance}`)
  }

  orderRide(distance) {
    let invoice = distance * 3000
    this.balance -= invoice
    if (this.balance >= invoice) {
      console.log(`Success order ride. You spent ${invoice} on your balance, your current balance is ${this.balance}`)
    } else {
      console.log(`Success order ride. You need to pay ${Math.abs(this.balance)} more when arrived on destination`)
    }
  }
}

class Gopay extends Emoney {
  orderTickets(type, title, quantity) {
    let newTicket = []
    if (type === 'movie') {
      for (let i = 0; i < quantity; i++) {
        newTicket.push(new MovieTicket(title, this.user.phone))
      }
    } else if (type === 'event') {
      for (let i = 0; i < quantity; i++) {
        newTicket.push(new EventTicket(title, this.user.phone))
      }
    }
    return newTicket
  }

  payTickets(orderedTickets) {
    let isPhoneValid = false
    let totalPayment = 0

    for (let i = 0; i < orderedTickets.length; i++) {
      isPhoneValid = false

      // Validation phone number
      if (orderedTickets[i].orderedBy === this.user.phone) {
        isPhoneValid = true
        // console.log(isPhoneValid)
      }
      // console.log(orderedTickets[i].status)
      // console.log(orderedTickets[i].price)
      // console.log(this.balance)

      if (isPhoneValid) {
        // Check if the ticket has been paid
        if (orderedTickets[i].status === 'paid') {
          return console.log(`Ticket has been bought`)
        } else if (orderedTickets[i].status === 'booked') { // Check if the balance is enough to pay the ticket
          // tambahin totalpayment
          totalPayment += orderedTickets[i].price
        }
      } else {
        return console.log(`Sorry this ticket already ordered by another person`)
      }
    }
    // console.log(`Total Payment: ${totalPayment}`)
    // Check totalPayment to balance
    if (totalPayment > this.balance) {
      console.log(`Payment for tickets failed, please top up first`)
    } else { // If okay, pay the ticket, reduce the balance
      this.balance -= totalPayment
      for (let i = 0; i < orderedTickets.length; i++) {
        orderedTickets[i].status = 'paid'
      }
      console.log(`Payment for tickets success. You spent ${totalPayment}`)
    }
  }
}

class Ovo extends Emoney {

}

class Company {
  constructor(name) {
    this.name = name
    this.users = []
  }

  registerUser(user, value) {
    let isPhoneValid = true
    // Check registered number first is it is valid
    for (let i = 0; i < this.users.length; i++) {
      // console.log(this.users[i])
      if (user.phone === this.users[i].user.phone) {
        isPhoneValid = false
      }
    }

    if (isPhoneValid) {
      let newUser
      if (this.name === 'gojek') {
        newUser = new Gopay(user, value)
        this.users.push(newUser)
        console.log(`You success register your gopay ! Welcome abroad ${user.name}`)
      } else if (this.name === 'grab') {
        newUser = new Ovo(user, value)
        this.users.push(newUser)
        console.log(`You success register your grab ! Welcome abroad ${user.name}`)
      }
      return newUser
    } else {
      console.log(`Phone number already registered`)
    }
  }
}

console.log('===========RELEASE 1===============')
let hardhim = new Person('hary dhimas', 'hardhim@gmail.com', '080989999')
let isro = new Person('Isro', 'isro@gmail.com', '0881239123')
let tony = new Person('Tony', 'tony@gmail.com', '0881239124')
let semmy = new Person('Semmi', 'semmy@gmail.com', '0881239124')
console.log(hardhim)

let gojek = new Company('gojek')
let grab = new Company('grab')
console.log(gojek)
console.log(grab)

let hardhimGopay = gojek.registerUser(hardhim, 100000)

/*
  You success register your gopay ! Welcome abroad hary dhimas
*/
let isroGopay = gojek.registerUser(isro, 500000)
/*
  You success register your gopay ! Welcome abroad Isro
*/
let tonyOvo = grab.registerUser(tony, 10000)
/*
  You success register your grab ! Welcome abroad Tony
*/
let semmyOvo = grab.registerUser(semmy, 2000)
/*
  Phone number already registered
*/

console.log('===========RELEASE 2===============')
console.log(tonyOvo)
tonyOvo.orderRide(9)
/*
  Success order ride. You need to pay 17000 more when arrived on destination
*/
hardhimGopay.orderRide(10)
/*
  Success order ride. You spent 30000 on your balance, your current balance is 70000
*/

let orderedTickets = hardhimGopay.orderTickets('movie', 'Lion King', 2)
console.log(orderedTickets)
// /*
//   [ MovieTicket {
//     type: 'movie',
//     price: 50000,
//     ticketCode: '206535692',
//     status: 'booked',
//     title: 'Lion King',
//     orderedBy: '080989999' },
//   MovieTicket {
//     type: 'movie',
//     price: 50000,
//     ticketCode: '800939523',
//     status: 'booked',
//     title: 'Lion King',
//     orderedBy: '080989999' } ]
// */

let orderedEventTickets = isroGopay.orderTickets('event', 'Coldplay Concert', 1)
console.log(orderedEventTickets)
// /*
//   [ EventTicket {
//     type: 'event',
//     price: 300000,
//     ticketCode: '729053281',
//     status: 'booked',
//     title: 'Coldplay Concert',
//     orderedBy: '0881239123' } ]
// */

console.log('===========RELEASE 3===============')
hardhimGopay.payTickets(orderedTickets)
// /*
//   Payment for tickets failed, please top up first
// */

hardhimGopay.topUp(500000)
// /*
//   Top up success, you added 500000 to your balance, your current balance is 570000
// */

hardhimGopay.payTickets(orderedEventTickets)
// /*
//   Sorry this ticket already ordered by another person
// */

hardhimGopay.payTickets(orderedTickets)
// /*
//   Payment for tickets success. You spent 100000
// */
isroGopay.payTickets(orderedEventTickets)
// /*
//   Payment for tickets success. You spent 300000
// */
isroGopay.payTickets(orderedEventTickets)
// /*
//   Ticket has been bought
// */
