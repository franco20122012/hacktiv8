'use strict'
// Exercise 1 - Create a Nested Array
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

function createNestedArr (row, column) {
  // Create empty array for the board
  const nestedArr = []
  const reference = 'abcdefqhijklmnopqrstuvwxyz'

  // Using nested for-loops to fill the tic-tac-toe nestedArr
  for (let i = 0; i < row; i++) {
    // Create empty grid for the row
    let row = []
    for (let j = 0; j < column; j++) {
      // Fill the nestedArr with randomize alphabet char using Math.random()
      row.push(reference[Math.floor(Math.random() * reference.length)])
    }
    nestedArr.push(row)
  }
  return nestedArr
}

// TEST CASE
console.log(createNestedArr(5, 3))
// [['p', 's', 'w'], ['r', 'a', 'i'], ['q', 'x', 'c'], ['r', 'q', 'w'], ['m', 'o', 'y']]
console.log(createNestedArr(4, 2))
// [['p', 's'], ['r', 'a'], ['q', 'x'], ['r', 'q']]
