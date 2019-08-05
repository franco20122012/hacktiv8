// Exercise 3 - Money Coins
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

function convertToCoin (money) {
  // Check if the input is number
  if (typeof money !== 'number') return `Invalid input`
  // Create variable to accomodate the result
  let result = []
  // Create reference for money coins
  const reference = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]

  // Using for-loop to check the coins
  for (let coin of reference) {
    // If input 'money' is still bigger than any value in the reference, continue the while-loop
    while (money >= coin) {
      // Store the coin to result array
      result.push(coin)
      // Substract the 'money' with the coin value
      money -= coin
    }
  }
  return result
}

// Drive code
console.log(convertToCoin(543))
// output : [ 500, 20, 20, 1, 1, 1 ]

console.log(convertToCoin(7752))
// output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(convertToCoin(37454))
// output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
