'use strict'
// Exercise 19 - Nested Arrays 2 for Conversion and Seeding
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Multidimensional array
const roster = [
  ['Number', 'Name', 'Position', 'Points per Game'],
  [12, 'Joe Schmo', 'Center', [14, 32, 7, 0, 23]],
  [9, 'Ms. Buckets', 'Point Guard', [19, 0, 11, 22, 0]],
  [31, 'Harvey Kay', 'Shooting Guard', [0, 30, 16, 0, 25]],
  [7, 'Sally Talls', 'Power Forward ', [18, 29, 26, 31, 19]],
  [22, 'MK DiBoux ', 'Small Forward ', [11, 0, 23, 17, 0]]
]

// [[roster[0][0], roster[1][0]], [roster[0][1], roster[1][1]],...

function convertRosterFormat (arr) {
  const result = []
  // Using nested for-loop to input the data into the
  for (let i = 1; i < arr.length; i++) {
    result.push({ [arr[0][0]]: arr[i][0], [arr[0][1]]: arr[i][1], [arr[0][2]]: arr[i][2], [arr[0][3]]: arr[i][3] })
  }
  console.log(result)
  return result
}

// TEST CASES - RELEASE 0
const objectRoster = convertRosterFormat(roster)
console.log(objectRoster[2])

// => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }

console.log(objectRoster[0]['Name'] === 'Joe Schmo') // outputs true

module.exports = {
  convertRosterFormat
}
