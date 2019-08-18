// Exercise 5 - Selection Sort
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

function selectionSort (arr) {
  // Using for-loop to check each element value in the array
  for (let i = 0; i < arr.length; i++) {
    let minimum = arr[i]
    let swapIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < minimum) {
        // Set element as new minimum
        minimum = arr[j]
        swapIndex = j
      }
    }
    // Swap minimum with first unsorted position
    if (i !== swapIndex) {
      let swapNumber = arr[i]
      arr[i] = minimum
      arr[swapIndex] = swapNumber
    }
  }
  return arr
}

// TEST CASE
console.log(selectionSort([8, 5, 7, 1, 9, 3])) // [1, 3, 5, 7, 8, 9]
