'use strict'
// Exercise 17 - Check All Vowels in Array
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

function checkVowelsInArray (row, column) {
  // Create generated random alphabet array
  const arr = createNestedArr(row, column)
  console.log(arr)
  // const arr = [['A', 'X', 'C', 'Y'], ['E', 'O', 'O', 'S'], ['I', 'U', 'I', 'N'], ['M', 'Y', 'O', 'E'], ['P', 'D', 'A', 'I']]
  // Create variable to count the block filled with vowels
  let count = 0

  // Do looping to check block filled with vowels
  for (let i = 0; i < row - 1; i++) {
    for (let j = 0; j < column - 1; j++) {
      let vowelsCount = 0
      if ('AEIOU'.includes(arr[i][j])) vowelsCount++
      if ('AEIOU'.includes(arr[i][j + 1])) vowelsCount++
      if ('AEIOU'.includes(arr[i + 1][j])) vowelsCount++
      if ('AEIOU'.includes(arr[i + 1][j + 1])) vowelsCount++
      if (vowelsCount === 4) count++
    }
  }
  return `Number of block filled with vowels: ${count}`
}

// Function to generate random alphabet multidimensional array
function createNestedArr (row, column) {
  // Create empty array for the board
  const nestedArr = []
  const reference = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  // Using nested for-loops to fill the tic-tac-toe nestedArr
  for (let i = 0; i < row; i++) {
    // Create empty grid for the row
    const row = []
    for (let j = 0; j < column; j++) {
      // Fill the nestedArr with randomize alphabet char using Math.random()
      row.push(reference[Math.floor(Math.random() * reference.length)])
    }
    nestedArr.push(row)
  }
  return nestedArr
}

// TEST CASES - RELEASE 0
console.log(checkVowelsInArray(5, 4))
