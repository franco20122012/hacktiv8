'use strict'

class User {
  constructor (username, server) {
    this.username = username
    this.win = 0
    this.lose = 0
    this.server = server
  }
}

module.exports = User
