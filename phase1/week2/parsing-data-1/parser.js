'use strict'
// Exercise 2 - Parsing Data 1
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

const fs = require('fs')
const faker = require('faker')
// Faker
faker.locale = 'id_ID'

class Person {
  // Look at the above CSV file
  // What attributes should a Person object have?
  constructor (data) {
    this.id = data.id || 1
    this.firstName = data.firstName
    this.lastName = data.lastName
    this.email = data.email
    this.phone = data.phone
    this.createdAt = data.createdAt ? new Date(data.createdAt) : new Date()
  }
}

class PersonParser {
  constructor (file) {
    // Convert CSV file input string into array of data
    this._file = file
    this._people = []
  }

  generateFaker (num) {
    for (let i = 0; i < num; i++) {
      console.log(faker.name.firstName)
    }
  }

  parse () {
    const parse = fs.readFileSync(this._file, { encoding: 'utf8' }).split('\n')
    for (const element in parse) {
      if (element !== 0) {
        const splitted = parse[element].split(',')
        this._people.push(new Person({
          id: splitted[0],
          firstName: splitted[1],
          lastName: splitted[2],
          email: splitted[3],
          phone: splitted[4],
          createdAt: splitted[5]
        }))
      }
    }
  }

  get people () {
    return this._people
  }

  get file () {
    return this._file
  }

  addPerson (person) {
    const newPerson = new Person(person)
    newPerson.id = this._people.length
    this._people.push(newPerson)
  }

  save () {
    // The first line of the CSV file -> ID, ...
    let string = 'id,first_name,last_name,email,phone,created_at\n'

    for (let i = 1; i < this._people.length; i++) {
      string += `${this._people[i].id},${this._people[i].firstName},${this._people[i].lastName},${this._people[i].email},${this._people[i].phone},${this._people[i].createdAt.toISOString()}`
      string += (i === this._people.length - 1) ? '' : '\n'
    }

    fs.writeFileSync(this._file, string, 'utf8')
  }
}
const parser = new PersonParser('people.csv')
parser.parse()

// Add new Person
parser.addPerson({ firstName: faker.name.firstName(), lastName: faker.name.lastName(), email: faker.internet.email(), phone: faker.phone.phoneNumberFormat() })
parser.save()
console.log(parser.people)
console.log(`There are ${parser.people.length} people in the file '${parser.file}'.`)
