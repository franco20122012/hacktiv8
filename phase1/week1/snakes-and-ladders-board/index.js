'use strict'
// Exercise 7 - Snake and Ladders Board
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// SOLUTION 1
// function generateBoard (num) {
//   // use unshift()
//   // Create the empty board array
//   let board = []
//   // Set starting value by 1
//   let value = 1
//   let isNotReverse = true
//   // Using for and while loops to insert the value into the board
//   for (let i = 0; i < num; i++) {
//     let row = []
//     let counter = 1
//     while (counter <= num) {
//       counter++
//       if (isNotReverse) {
//         row.push(value++)
//       } else {
//         row.unshift(value++)
//       }
//     }
//     if (isNotReverse) {
//       isNotReverse = false
//     } else {
//       isNotReverse = true
//     }
//     board.unshift(row)
//   }
//   return board
// }

// SOLUTION 2
function generateBoard (num) {
  // Create the empty board array
  let board = []
  // Set starting value
  let value = Math.pow(num, 2)
  // Check if the starting point is reversed or not
  let isNotReverse = num % 2 === 0
  // Using nested for loops to insert the value into the board
  for (let i = 0; i < num; i++) {
    board.push([])
    let counter = value - num + 1
    for (let j = 0; j < num; j++) {
      if (isNotReverse) {
        board[i].push(value)
      } else {
        board[i].push(counter++)
      }
      value--
    }
    isNotReverse = !isNotReverse
  }
  return board
}

// TEST CASE - RELEASE 0
console.log(`RELEASE 0\n=========`)
console.log(generateBoard(10))

// TEST CASE - RELEASE 1
console.log(`RELEASE 1\n=========`)
console.log(generateBoard(15))

// function printArray (arr) {
//   arr.forEach(el => console.log(JSON.stringify(el)))
// }
