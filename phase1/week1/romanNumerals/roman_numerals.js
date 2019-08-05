// Exercise 2 - Roman Numerals
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

function toRoman (num) {
  // Check if the number is within the constraint 1-3000
  if (num < 1 && num > 3000) return `Invalid input`
  // Create variable to accomodate the result
  let result = ''
  // Create table conversion of roman numerals
  const reference = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }

  // Using for-in to check the roman numeral conversion
  for (let key in reference) {
    // If input 'num' is still bigger than any value in the reference, continue the while-loop
    while (num >= reference[key]) {
      result += key
      num -= reference[key]
    }
  }
  return result
}

// Drive code
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', toRoman(4))
console.log('9     | IX       | ', toRoman(9))
console.log('13    | XIII     | ', toRoman(13))
console.log('1453  | MCDLIII  | ', toRoman(1453))
console.log('1646  | MDCXLVI  | ', toRoman(1646))
