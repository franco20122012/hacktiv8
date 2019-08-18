'use strict'
// Exercise 18 - Create Array of Objects
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Create array to accomodate the objects of person
const arr = []

function createObj (name, phase, gender) {
  // Push the object literal into the array
  arr.push({ name, phase, gender })
}

function getData (name) {
  // Using for-of loop to check the array
  for (const key of arr) {
    if (key.name === name) return key
  }
  return `Invalid input`
}

// TEST CASES - RELEASE 0
createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Adhit', 2, 'male')
createObj('Tama', 2, 'male')
createObj('Rifky', 3, 'male')
console.log(`RELEASE 0\n=========`)
console.log(arr)

// TEST CASES - RELEASE 1
console.log(`RELEASE 1\n=========`)
console.log(getData('Icha')) // { name: 'Icha', phase: 1, gender: 'female' }
