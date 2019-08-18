'use strict'
// Exercise 10 - Linear Search
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// Release 0
console.log('Linear Search')
const linearSearch = (target, values) => {
  // Using for-loop to check every element in the array
  for (var i = 0; i < values.length; i++) {
    if (values[i] === target) {
      return i
    }
  } return -1
}

const random_numbers = [6, 29, 18, 2, 72, 19, 18, 10, 37]

console.log(linearSearch(18, random_numbers))
// 2
console.log(linearSearch(9, random_numbers))
// -1

// Release 1
console.log('Global Linear Search')
const globalLinearSearch = (target, values) => {
  // Create array to accomodate the target values index
  const indexArr = []
  // Using for-loop to check every element in the array
  for (var i = 0; i < values.length; i++) {
    if (values[i] === target) {
      indexArr.push(i)
    }
  } return indexArr
}

let banana_arr = 'banana'.split('')
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch('a', banana_arr))
// [ 1, 3, 5 ]

// Release 2
console.log('Global Hybrid Search')
const insertionSort = (arr) => {
  // Using for-loop to check each input array element, starting from index 1
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i]
    let j = i - 1
    while (j >= 0 && temp < arr[j]) { j-- }
    // Move sorted element
    arr.splice(i, 1)
    arr.splice(++j, 0, temp)
  }
  return arr
}

const globalBinarySearch = (search, arr) => {
  arr = insertionSort(arr)
  // Create variables as borderline left and right
  let left = 0
  let right = arr.length - 1
  // Create array to accomodate the target values index
  const indexArr = []
  // Use while-loop until the target value is find or until the left border is equal to right border
  while (left <= right) {
    const center = Math.floor((left + right) / 2)
    if (arr[center] === search) {
      // Get index for the left side of the target value
      for (let i = 0; i < center; i++) {
        if (arr[i] === search) {
          indexArr.push(i)
        }
      }
      indexArr.push(center)
      // Get index for the right side of the target value
      for (let j = center + 1; j < arr.length; j++) {
        if (arr[j] === search) {
          indexArr.push(j)
        }
      }
      return indexArr
    } else if (arr[center] < search) {
      left = center + 1
    } else {
      right = center - 1
    }
  } return -1
}

// TEST CASE
banana_arr = 'banana'.split('')
// ["b", "a", "n", "a", "n", "a"]
console.log(globalBinarySearch('a', banana_arr))
// [ 0, 1, 2 ]

module.exports = {
  linearSearch,
  globalLinearSearch
}
