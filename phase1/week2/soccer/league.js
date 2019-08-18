'use strict'

class League {
  constructor (country, ceo) {
    this.country = country
    this.ceo = ceo
    this.clubs = []
  }

  addClub (objClub) {
    this.clubs.push(objClub)
  }

  members () {
    const members = this.clubs
    console.log(`\nList club in this League:`)
    console.log(`===============================`)
    for (let i = 0; i < members.length; i++) {
      console.log(`${i + 1}. ${members[i].teamName}, stadium: ${members[i].stadium}`)
    }
  }
}

class PremierLeague extends League {
  constructor () {
    super('United Kingdom', 'Richard Scudamore')
  }
}

class LaLiga extends League {
  constructor () {
    super('Spain', 'Javier Gomez')
  }
}

module.exports = { PremierLeague, LaLiga }
