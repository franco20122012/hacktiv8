// Exercise 6 - Binary Search and Insertion Sort
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

'use strict'

let testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
let testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function insertionSort (arr) {
  // Using for-loop to check each input array element, starting from index 1
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i]
    let j = i - 1
    while (j >= 0 && temp < arr[j]) { j-- }
    // Move sorted element
    arr.splice(i, 1)
    arr.splice(++j, 0, temp)
  }
  return arr
}

// TESTING INSERTION SORT
// console.log(insertionSort([5, 2, 6, 3, 8]))

function binarySearch (search, arr) {
  // Create variables as borderline left and right
  let left = 0
  let right = arr.length - 1
  // Use while-loop until the target value is find or until the left border is equal to right border
  while (left <= right) {
    let center = Math.floor((left + right) / 2)
    if (arr[center] === search) {
      return center
    } else if (arr[center] < search) {
      left = center + 1
    } else {
      right = center - 1
    }
  } return -1
}

let arrayGenapSorted = insertionSort(testArrayGenap)
let arrayGanjilSorted = insertionSort(testArrayGanjil)

// TEST CASES
console.log(`TEST CASES - RELEASE 0`)
let testArray = [1, 2, 3, 4, 5]
console.log(binarySearch(3, testArray) === 2) // true
testArray = [13, 19, 24, 29, 32, 37, 43]
console.log(binarySearch(35, testArray) === -1) // true
testArray = [100, 120, 130, 135, 150, 170]
console.log(binarySearch(3, testArray) === 3) // true

// Driver code
console.log(`TEST CASES - RELEASE 1`)
console.log(binarySearch(8, arrayGenapSorted)) // 0
console.log(binarySearch(10, arrayGenapSorted)) // 1
console.log(binarySearch(33, arrayGenapSorted)) // -1

console.log(binarySearch(53, arrayGanjilSorted)) // 4
console.log(binarySearch(3, arrayGanjilSorted)) // 0
console.log(binarySearch(2, arrayGanjilSorted)) // -1

module.exports = {
  binarySearch
}
