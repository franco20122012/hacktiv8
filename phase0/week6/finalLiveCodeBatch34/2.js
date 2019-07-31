/*
  ///////////
  diagonAlley
  ///////////
  Function diagonAlley adalah sebuah function yang membentuk tulisan dalam bentuk diagonal dan
  membentuk bingkai kotak seperti pada test cases. function ini akan menerima parameter string, dan
  function ini berfungsi hanya untuk menampilkan.

  [EXAMPLE]
  INPUT: non
  OUTPUT:
    n-|
    |o|
    |-n
  NOTES:
    - word membentuk diagonal
    - tepi bingkai horizontal disambung dengan -
    - tepi bingkai vertical disambung dengan |

  [RULES]
  1. Ukuran bingkai sesuai dengan panjang karakter yang diberikan.
  2. Minimal panjang karakter yang diinput adalah 3
*/

function diagonAlley (word) {
  // Minimum input character is 3
  if (word.length < 3) return console.log(`Invalid input`)
  // code here
  let width = word.length
  for (let i = 0; i < width; i++) {
    let string = ''
    for (let j = 0; j < width; j++) {
      if (j === i) {
        string += word[i]
      } else if (j === (width - 1) || j === 0) {
        string += '|'
      } else if (i === 0 || i === width - 1) {
        string += '-'
      } else {
        string += ' '
      }
    }
    console.log(string)
  }
}

// TEST CASES

diagonAlley('kuroko')
/*
  k----|
  |u   |
  | r  |
  |  o |
  |   k|
  |----o
*/
console.log('')
diagonAlley('non')
/*
  n-|
  |o|
  |-n
*/
console.log('')
diagonAlley('basuke')
/*
  b----|
  |a   |
  | s  |
  |  u |
  |   k|
  |----e
*/
console.log('')
diagonAlley('no')
// Invalid input
