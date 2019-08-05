// Exercise 4 - Roman Numerals Recursive
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

function toRoman (num) {
  // Check if the number is within the constraint 1-3000
  if (num < 0 && num > 3000) return `Invalid input`
  // Create table conversion of roman numerals
  const reference = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }

  // BASE CASE
  if (num === 0) return ''
  // Using for-in to check the roman numeral conversion from the reference object
  for (let key in reference) {
    // If input 'num' is still bigger than any value in the reference, continue the while-loop
    while (num >= reference[key]) {
      // Recursion
      return key + toRoman(num - reference[key])
    }
  }
}

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', toRoman(4))
console.log('9     | IX       | ', toRoman(9))
console.log('23    | XXIII    | ', toRoman(23))
console.log('1453  | MCDLIII  | ', toRoman(1453))
console.log('1646  | MDCXLVI  | ', toRoman(1646))

module.exports = toRoman
