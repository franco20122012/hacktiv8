'use strict'
// Exercise 22 - Battleship
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

/* Input -> node battleship.js A7 D9 J4 A5 B7 E4 I7 I5 J3 J10 */

// TEST CASE
const bomb = process.argv.slice(2)
const fleet = [
  { ship: 'Aircraft carrier', size: 5, tag: 'A', health: 5 },
  { ship: 'Battleship', size: 4, tag: 'B', health: 4 },
  { ship: 'Cruiser', size: 3, tag: 'C', health: 3 },
  { ship: 'Destroyer', size: 2, tag: 'D', health: 2 }
]
const reference = 'ABCDEFGHIJ'

console.log(bomb)
play()

function play () {
  // Generate the battleship board
  const board = generateBoard()
  // Randomize ship
  randomizeShip(board)
  // Convert the input bomb into array
  const bombList = checkBombLocation(bomb)
  // Attack the ships using bombs
  dropBomb(board, bombList)
  // Display board in string
  for (const key in board) {
    console.log(board[key].join('|') + '|')
  }
  // Create message to display the remaining fleet's health
  displayResult()
}

function generateBoard () {
  const board = []

  for (let i = 0; i < 11; i++) {
    const row = Array(11).fill(' ')
    board.push(row)
    if (i > 0) board[i][0] = reference[i - 1]
    if (i === 0) {
      for (let j = 1; j < 11; j++) {
        board[i][j] = j
      }
    }
  }
  return board
}

function randomizeShip (board) {
  let shipsPlaced = 0
  while (shipsPlaced < fleet.length) {
    const size = fleet[shipsPlaced].size
    const shipPos = generateShipPosition()
    const direction = checkDirection()
    const isPlaced = (direction === 'vertical') ? checkVertical(shipPos, size, board)
      : checkHorizontal(shipPos, size, board)
    // If the current ship is already place, increment the counter
    if (isPlaced) {
      if (direction === 'vertical') {
        for (let i = shipPos[0]; i < shipPos[0] + size; i++) {
          board[i][shipPos[1]] = fleet[shipsPlaced].tag
        }
      } else {
        for (let j = shipPos[1]; j < shipPos[1] + size; j++) {
          board[shipPos[0]][j] = fleet[shipsPlaced].tag
        }
      }
      shipsPlaced++
    }
  }
}

function checkDirection () {
  const directionRef = ['vertical', 'horizontal']
  // Randomize horizontal or vertical position of the ship
  return directionRef[Math.floor(Math.random() * 2)]
}

function generateShipPosition () {
  // Insert row position
  const row = Math.floor(Math.random() * 11) + 1
  // Insert column position
  const col = Math.floor(Math.random() * 11) + 1
  return [row, col]
}

function checkVertical (shipPos, size, board) {
  const row = shipPos[0]
  const col = shipPos[1]
  // If the ships is placed outside the board border, return false
  if (row + size > 10) return false
  // Check against another placed ships
  for (let i = row; i < row + size; i++) {
    if (board[i][col] !== ' ') return false
  }
  return true
}

function checkHorizontal (shipPos, size, board) {
  const row = shipPos[0]
  const col = shipPos[1]
  // If the ships is placed outside the board border, return false
  if (col + size > 10) return false
  // Check against another placed ships
  for (let i = col; i < col + size; i++) {
    if (board[i][row] !== ' ') return false
  }
  return true
}

function checkBombLocation (arr) {
  const bombList = []
  for (let i = 0; i < arr.length; i++) {
    let rowPos = ''
    const colPos = parseInt(arr[i].substring(1))
    for (let j = 0; j < reference.length; j++) {
      if (reference[j] === arr[i][0]) rowPos = j + 1
    }
    bombList.push({ rowPos, colPos })
  }
  return bombList
}

function dropBomb (board, bombList) {
  for (let i = 0; i < bombList.length; i++) {
    const x = bombList[i].rowPos
    const y = bombList[i].colPos
    if (board[x][y] === ' ' || board[x][y] === '/') {
      board[x][y] = '/'
    } else {
      for (let i = 0; i < fleet.length; i++) {
        if (fleet[i].tag === board[x][y]) fleet[i].health--
      }
      board[x][y] = 'X'
    }
  }
}

function displayResult () {
  for (let i = 0; i < fleet.length; i++) {
    const health = Math.round(fleet[i].health / fleet[i].size * 100)
    console.log(`${fleet[i].ship} remaining health is ${health}%`)
  }
}
