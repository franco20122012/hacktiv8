'use strict'

class Club {
  constructor (user, teamName, stadium, location, manager, budgetTransfer) {
    this.user = user
    this.teamName = teamName
    this.stadium = stadium
    this.location = location
    this.manager = manager
    this.budgetTransfer = budgetTransfer
    this.players = []
  }

  addPlayer (objPlayer) {
    objPlayer.currentClub = this.teamName
    this.players.push(objPlayer)
  }

  buyPlayer (objPlayer, currentClub) {
    // Validation
    let isSameClub = false
    let indexPlayer = -1
    if (currentClub === null && objPlayer.currentClub === null) {
      isSameClub = true
    } else {
      if (currentClub.teamName === objPlayer.currentClub) {
        for (let i = 0; i < currentClub.players.length; i++) {
          if (currentClub.players[i] === objPlayer) {
            isSameClub = true
            indexPlayer = i
          }
        }
      }
    }

    if (isSameClub) {
      // Budget validation
      if (this.budgetTransfer >= objPlayer.transferFee || currentClub === null) {
        this.addPlayer(objPlayer)
        this.budgetTransfer -= objPlayer.transferFee
        if (currentClub !== null) {
          currentClub.budgetTransfer += objPlayer.transferFee
          currentClub.players.splice(indexPlayer, 1)
        }
        console.log(`You buy ${objPlayer.playerName} with transfer fee $${objPlayer.transferFee}, remaining budget: $${this.budgetTransfer}`)
      } else {
        console.log(`Budget not sufficient to buy ${objPlayer.playerName}. Your club need extra money for $${Math.abs(this.budgetTransfer - objPlayer.transferFee)} to buy this player`)
      }
    } else {
      console.log(`There is no Player with name ${objPlayer.playerName} in ${this.teamName}`)
    }
  }
}

class RealMadrid extends Club {
  constructor (user) {
    super(user, 'Real Madrid F.C.', 'Santiago Bernabéu', 'Madrid', 'Zinedine Zidane', 10000000000)
  }
}

class Barcelona extends Club {
  constructor (user) {
    super(user, 'F.C. Barcelona', 'Camp Nou', 'Barcelona', 'Ernesto Valverde', 20000000)
  }
}

class Liverpool extends Club {
  constructor (user) {
    super(user, 'Liverpool F.C.', 'Anfield', 'Liverpool', 'Jürgen Klopp', 50000000)
  }
}

class Arsenal extends Club {
  constructor (user) {
    super(user, 'Arsenal F.C.', 'Emirates Stadium', 'London', 'Arsène Wenger', 35000000)
  }
}

module.exports = { RealMadrid, Barcelona, Liverpool, Arsenal }
