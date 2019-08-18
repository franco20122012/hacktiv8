'use strict'
// OOP - Live Code Phase 1 Week 2
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

function generateBarChart(numbers) {
  // Find the max height
  let maxNum = Math.max(...numbers)

  // Create an empty chart
  // Create row x column array
  let arr = []
  let col = numbers.length
  let row = maxNum
  Array(row).fill('').forEach(e => { arr.push(Array(col).fill('   ')) })
  // arr[1][1] = 'a'
  // Before
  console.log(`\n┏━━━━━━━━━━━━━━━━━━━━━━━━━━┓`)
  console.log(`┃          Before!         ┃`)
  console.log(`┗━━━━━━━━━━━━━━━━━━━━━━━━━━┛`)
  console.log(arr)

  // Fill the chart with the value from the array
  for (let row = 0; row < maxNum; row++) {
    for (let col = 0; col < numbers.length; col++) {
      if (row < numbers[col]) {
        arr[row][col] = 'III '
      } else {
        arr[row][col] = '    '
      }
    }
  }
  // After
  console.log(`\n┏━━━━━━━━━━━━━━━━━━━━━━━━━━┓`)
  console.log(`┃          After!          ┃`)
  console.log(`┗━━━━━━━━━━━━━━━━━━━━━━━━━━┛`)
  arr.reverse()

  // Modify number
  let numString = ''
  for (let i = 0; i < numbers.length; i++) {
    numString += `-(${numbers[i]})-`
    if (i < numbers.length - 1) {
      numString += ','
    }
  }
  // Add explanation
  arr.push(numString.split(','))
  let counter = maxNum
  for (let i = 0; i < arr.length; i++) {
    arr[i].splice(0, 0, counter + '|')
    counter--
  }

  // Print the array into string
  let string = ''
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      string += arr[i].join('') + '\n'
    } else {
      string += arr[i].join(' ') + '\n'
    }
  }

  console.log(string)
}

// generateBarChart([1, 2, 3, 4, 5, 4, 3, 2, 1]);
generateBarChart([3, 6, 4, 7, 2]);
// generateBarChart([9, 8, 7, 0, 1, 2, 3]);
