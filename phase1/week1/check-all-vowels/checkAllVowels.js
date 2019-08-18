// Exercise 3 - Check All Vowels
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// FIRST SOLUTION
// function checkVowel (str) {
//   let reference = 'aeiou'
//   for (let i = 0; i < str.length; i++) {
//     let isVocal = false
//     for (let j = 0; j < reference.length; j++) {
//       if (str[i].toLowerCase() === reference[j]) isVocal = true
//     }
//     if (!isVocal) return false
//   }
//   return true
// }

// SECOND SOLUTION - Using indexOf()
function checkVowel (str) {
  for (let i = 0; i < str.length; i++) { if (!isVowel(str[i])) return false }
  return true
}
// Create modular function to check each character
function isVowel (char) { return 'aeiou'.indexOf(char[0].toLowerCase()) !== -1 }

// THIRD SOLUTION - Using includes()
// function checkVowel (str) {
//   return 'aeiou'.includes(str)
// }

// TEST CASES
console.log(checkVowel('sdjfsidjfA')) // false
console.log(checkVowel('aieuAO')) // true
