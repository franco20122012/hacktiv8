'use strict'
// Exercise 16 - String to Array
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

function stringToArray (str) {
  // Change the string to array using split()
  const result = str.split(',')
  // Do looping to change each element in the array into array of character using split()
  for (let i = 0; i < result.length; i++) {
    const char = result[i].split('')
    result[i] = char
  }
  return result
}

// TEST CASES - RELEASE 0
console.log(stringToArray('aqrst,ukaei,ffooo'))
// [['a', 'q', 'r', 's', 't'], ['u', 'k', 'a', 'e', 'i'], ['f', 'f', 'o', 'o', 'o']]
console.log(stringToArray('qwer,tyui,asdf,ghjk'))
// [['q', 'w', 'e', 'r'], ['t', 'y', 'u', 'i'], ['a', 's', 'd', 'f'], ['g', 'h', 'j', 'k']]
