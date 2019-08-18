// Exercise 7 - (Debugging) Broken Palindrome Swapper
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

/**
 * @function palindromeSwapper
 * menukar 2 huruf berurutan dari n = 0 sampai n-1
 * contoh: makan => amkan, mkaan, maakn, makna
 * @param {string} str - input kata yang ingin di-swap dan dicek palindrom
 * @returns {boolean} true bila kata yang di-swap adalah palindrom
 */
function palindromeSwapper (str) {
  // Create a variable to accomodate the new string
  let newStr = ''
  // Check if the current string input is already palindrome or not
  if (isPalindrome(str)) return true
  // Using for-loop to check if the swapped string is palindrom or not
  for (var i = 0; i < str.length; i++) {
    newStr = ''
    for (var j = 0; j < str.length; j++) {
      if (i === j) {
        newStr += str[j + 1]
        newStr += str[j]
        j++
      } else {
        newStr += str[j]
      }
    }
    if (isPalindrome(newStr)) return true
  }
  return false
}

/**
 * @function isPalindrome
 * Cek apabila kata merupakan palindromeSwapper
 * @param {string} str - input kata yang dicek bila palindrom
 * @returns {boolean} true bila kata adalah palindrom
 */
function isPalindrome (str) {
  if (str.split('').reverse().join('') === str) return true
  return false
}

console.log(palindromeSwapper('arcecar')) // TRUE
console.log(palindromeSwapper('racecar')) // TRUE
console.log(palindromeSwapper('recacar')) // FALSE
