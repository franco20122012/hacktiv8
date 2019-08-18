'use strict'
// Exercise 15 - Tic Tac Toe
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// SOLUTION 1
// function ticTacToeBoard () {
//   // Create empty array for the board
//   let board = []
//   // Create variables for 'x' and 'o' counters
//   let xCount = 0
//   let oCount = 0
//   // Using nested for-loops to fill the tic-tac-toe board
//   for (let i = 0; i < 3; i++) {
//     // Create empty grid for the row
//     let row = []
//     for (let j = 0; j < 3; j++) {
//       let random = Math.random()
//       // Fill the board with 'x' or 'o' using Math.random() for randomize
//       if (random < 0.5 && xCount < 5) {
//         xCount++
//         row.push('x')
//       } else if (oCount < 5) {
//         oCount++
//         row.push('o')
//       } else {
//         row.push('x' || 'o')
//       }
//     }
//     // Push the filled row grid to the board
//     board.push(row)
//   }
//   return board
// }

// SOLUTION 2 - WITH WINNER
function ticTacToeBoard () {
  // Create arrays for board and empty coordinate
  const board = []
  const emptyCoordinate = []
  let result = ''
  // Using nested for-loops to fill the tic-tac-toe board
  for (let i = 0; i < 3; i++) {
    // Create empty grid for the row
    const row = []
    for (let j = 0; j < 3; j++) {
      // Fill the board with '-'
      row.push('-')
      emptyCoordinate.push([i, j])
    }
    board.push(row)
  }
  // Set who is playing first, 'X' or 'O'
  let isPlaying = (Math.floor(Math.random() * 2) === 0) ? 'X' : 'O'
  // Play the game
  while (emptyCoordinate.length > 0) {
    // Get the empty position from emptyCoordinate
    const selectedIndex = Math.floor(Math.random() * emptyCoordinate.length)
    // Fill that coordinate with the current player ('X' or 'O')
    board[emptyCoordinate[selectedIndex][0]][emptyCoordinate[selectedIndex][1]] = isPlaying
    // Delete the empty coordinate after filled
    emptyCoordinate.splice(selectedIndex, 1)
    // Check winner
    result = checkWinner(board)
    if (result === 'X') {
      console.log(board)
      return `Winner is player X`
    }
    if (result === 'O') {
      console.log(board)
      return `Winner is player O`
    }
    // Change player turn
    isPlaying = (isPlaying === 'X') ? 'O' : 'X'
  }
  return board
}

function checkWinner (arr) {
  for (let i = 0; i < arr.length; i++) {
    // Check horizontal
    if (arr[i].every(element => element === 'X')) return 'X'
    if (arr[i].every(element => element === 'O')) return 'O'
    // Check vertical
    let countX = 0
    let countO = 0
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[j][i] === 'X') countX++
      if (arr[j][i] === 'O') countO++
    }
    if (countX === 3) {
      return 'X'
    } else if (countO === 3) {
      return 'O'
    }
  }
  // Check diagonal
  if ((arr[0][0] === 'X' && arr[1][1] === 'X' && arr[2][2]) === 'X' ||
    (arr[0][2] === 'X' && arr[1][1] === 'X' && arr[2][0] === 'X')) return 'X'
  if ((arr[0][0] === 'O' && arr[1][1] === 'O' && arr[2][2]) === 'O' ||
    (arr[0][2] === 'O' && arr[1][1] === 'O' && arr[2][0] === 'O')) return 'O'

  return '-'
}

// TEST CASE - RELEASE 0
console.log(`RELEASE 0\n=========`)
console.log(ticTacToeBoard()) // => make a random tic-tac-toe board
