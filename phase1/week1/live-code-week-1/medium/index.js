'use strict'
// Medium - Live Code Phase 1 Week 1
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

function fillTheClans(people, clans) {
  // put code here
  const result = []
  for (let i = 0; i < clans.length; i++) {
    let counter = 2
    while (counter > 0) {
      let randomIndex = (Math.floor(Math.random() * people.length))
      if (people[randomIndex][`clan`] === undefined) {
        people[randomIndex][`clan`] = clans[i]
        counter--
      }
    }
  }
  return people
}

function getPairPerson(peopleWithClan) {
  const result = []
  let counter = 2
  let previousIndex = null
  // Randomize index from the list
  while (counter > 0) {
    let randomIndex = (Math.floor(Math.random() * peopleWithClan.length))
    if (randomIndex !== previousIndex || previousIndex === null) {
      result.push(peopleWithClan[randomIndex])
      counter--
      previousIndex = randomIndex
    }
  }
  return result
}

function comboBattle(player1, player2) {
  // Calculate total power for each players
  let totalPowerPlayer1 = player1[0].power + player1[1].power
  let totalPowerPlayer2 = player2[0].power + player2[1].power
  // Additional bonus +1000 if the clan is same
  if (player1[0].clan === player1[1].clan) totalPowerPlayer1 += 1000
  if (player2[0].clan === player2[1].clan) totalPowerPlayer2 += 1000
  // Check winner
  let winner = ''
  if (totalPowerPlayer1 > totalPowerPlayer2) {
    winner = `Player 1 Win!`
  } else if (totalPowerPlayer1 < totalPowerPlayer2) {
    winner = `Player 2 Win!`
  } else {
    winner = `It's a Draw!`
  }
  return `Player 1 Powers is: ${totalPowerPlayer1} and Player 2 power is: ${totalPowerPlayer2}, ${winner}`
}

function play(peopleWithClan) {

}

const people = [
  { name: 'Hinata', power: 1000 },
  { name: 'Karin', power: 500 },
  { name: 'Naruto', power: 3000 },
  { name: 'Boruto', power: 800 },
  { name: 'Itachi', power: 1900 },
  { name: 'Sasuke', power: 2400 },
  { name: 'Obito', power: 1300 },
  { name: 'Hanabi', power: 800 }
]

const clans = ['Uzumaki', 'Kazekage', 'Uchiha', 'Hyuuga']

// TEST CASES
let peopleWithClan = fillTheClans(people, clans)
console.log('Release 0')
console.log('---------')
console.log(peopleWithClan)

console.log('\nRelease 1')
console.log('---------')
let firstPlayer = getPairPerson(peopleWithClan)
console.log('Player 1:')
console.log(firstPlayer)
let secondPlayer = getPairPerson(peopleWithClan)
console.log('Player 2:')
console.log(secondPlayer)

console.log('\nRelease 2')
console.log('---------')
console.log(comboBattle(firstPlayer, secondPlayer))

console.log('\nRelease 3')
console.log('---------')
console.log(play(peopleWithClan));