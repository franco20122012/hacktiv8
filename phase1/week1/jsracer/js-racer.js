'use strict'
// Exercise 21 - JS Racer
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

/*
Enter -> node js-racer.js 3 15 3
3 for number of players
15 for track length
3 for number of obstacles in each track
*/

// TEST CASE
const inputArgv = process.argv.slice(2)
const numberOfPlayer = Number(inputArgv[0])
const maxTrackLength = Number(inputArgv[1])
const numberOfObstacles = Number(inputArgv[2])

// Generate player name
const players = generatePlayerName(numberOfPlayer)
const playerNameList = Object.keys(players)
const positionList = Object.values(players)
const obstacleList = generateObstacle()
let currentWinner = 0

console.log(obstacleList) // [3,7,5]
// Play the game
play()

// Main function
function play () {
  // Handling for minimum player and minimum track length
  if (numberOfPlayer < 2) return console.log(`Invalid input. Minimum 2 players needed`)
  if (maxTrackLength < 15) return console.log(`Invalid input. Minimum track length is 15`)
  // Clear the initial terminal screen
  clearScreen()
  // Print initial board
  printBoard(playerNameList, positionList)
  // Display the screen for 1 second
  sleep(1000)
  // Set initial turn for player index 0 and the current winner is player index 0
  let playerTurn = 0
  // Run the game until we have a winner
  // console.log(finishLine, positionList)
  while (!finished()) {
    clearScreen()
    // Advance for the current player turn
    advance(playerTurn)
    // Change player turn
    playerTurn++
    // Check if the player turn already reached the last player, change to the first player again
    if (playerTurn >= numberOfPlayer) playerTurn = 0
    // clearScreen()
    // Print the updated board
    printBoard(playerNameList, positionList)
    // Display the screen for 1 second
    sleep(1000)
  }
  // Print who is the winner
  // console.log(playerNameList, currentWinner, playerNameList[currentWinner])
  console.log(winner(playerNameList[currentWinner]))
}

function diceRoll () {
  // Using Math.random() to randomize the dice
  return Math.floor(Math.random() * 6) + 1
}

function sleep (milliseconds) {
  var start = new Date().getTime()
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break
    }
  }
}

function printBoard (players, position) { // ['a','b','c'] , [0,0,0]
  for (let i = 0; i < numberOfPlayer; i++) {
    console.log(printLine(players[i], position[i], i))
  }
}

function printLine (player, pos, index) {
  // let result = '|'
  // // Create track line for one player

  // for (let i = 0; i < maxTrackLength; i++) {
  //   if (i === pos) {
  //     result += `${player}|`
  //   } else {
  //     result += ` |`
  //   }
  // }
  const result = Array(maxTrackLength).fill(' ')
  // Add obstacles to the array
  for (const key of obstacleList) {
    result[key] = 'x'
  }
  // Check if the player hits the obstacles
  let hitObstacle = false
  for (const key of obstacleList) {
    if (key === pos) hitObstacle = true
  }
  if (hitObstacle) {
    result[pos] = 'x'
    result[0] = player
    positionList[index] = 0
  } else {
    result[pos] = player
  }

  return `|${result.join('|')}|`
}

function generatePlayerName (num) {
  const players = {}
  const reference = 'abcdefghijklmnopqrstuvwxyz'
  for (let i = 0; i < num; i++) {
    players[reference[i]] = 0
  }
  return players
}

function generateObstacle () {
  const obstacle = []
  for (let i = 0; i < numberOfObstacles; i++) {
    let isValid = false
    let value = 0

    while (!isValid) {
      value = getRandomInt(1, maxTrackLength - 1)
      if (!obstacle.includes(value)) isValid = true
    }
    obstacle.push(value)
  }
  return obstacle
}

function advance (playerTurn) {
  // Set the value of the dice for the current player
  const diceValue = diceRoll()
  // Set the position of the current player turn according to the dice
  positionList[playerTurn] = (positionList[playerTurn] + diceValue < maxTrackLength - 1)
    ? positionList[playerTurn] + diceValue : maxTrackLength - 1
  // Change current winner
  if (positionList[playerTurn] > positionList[currentWinner]) currentWinner = playerTurn
}

function finished () {
  // Check if there is a winner already
  for (const key in positionList) {
    if (positionList[key] === maxTrackLength - 1) return true
  }
  return false
}

function winner (currentWinner) {
  return `The winner is player: ${currentWinner}`
}

function clearScreen () {
  // Un-comment this line if you have trouble with console.clear();
  // return process.stdout.write('\033c');
  console.clear()
}

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
