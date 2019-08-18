'use strict'

class Player {
  constructor (playerName, height, position, nationality, transferFee, currentClub) {
    this.playerName = playerName
    this.height = height
    this.position = position
    this.nationality = nationality
    this.transferFee = transferFee
    this.currentClub = currentClub || null
  }
}

module.exports = Player
