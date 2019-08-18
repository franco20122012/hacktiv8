'use strict'
// Exercise 10 - Callback Countdown
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

const { timer } = require('./controllers')

const main = () => {
  const seconds = parseInt(process.argv[2]) || 10
  timer(seconds)
}

main()
