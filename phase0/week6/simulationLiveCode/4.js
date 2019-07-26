/*
  ////
  go2D
  ////

  Function go2D akan menentukkan lokasi 2D dari go dalam koordinat, fungsi ini akan menerima
  parameter pertama koordinat i, parameter kedua koordinat j, serta array yang merupakan pergerakkan.
  Pergerakkan hanya ada 4 arah yaitu, 'UP', 'DOWN', 'LEFT', atau 'RIGHT'.

  EXAMPLE
  INPUT: posI = 3, posJ = 3, movements = ['UP', 'RIGHT', 'DOWN']
  EXAMPLE:
    i\j  0  1  2  3  4
     0
     1
     2            1  2
     3            go 3
     4
  PROCESS:
  - go bergerak kearah 'UP' 2, 3
  - go bergerak kearah 'RIGHT' 2, 4
  - go bergerak kearah 'DOWN' 3, 4
  OUTPUT:
  [
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', '1', '2'],
    [' ', ' ', ' ', 'go', '3'],
    [' ', ' ', ' ', ' ', ' ']
  ]

  RULES:
  1. Asumsi koordinat 4 * 4 dan go tidak pernah bergerak ke luar koordinat 4 x 4
  2. Asumsi go tidak pernah melangkah ke tempat yang sama
*/

function go2D (posI, posJ, movements) {
  let positions = [
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ']
  ]
  // Print 'go' on the board
  positions[posI][posJ] = 'go'
  // Print movements
  let counter = 1
  for (let i = 0; i < movements.length; i++) {
    if (movements[i] === 'UP') {
      posI--
    } else if (movements[i] === 'DOWN') {
      posI++
    } else if (movements[i] === 'LEFT') {
      posJ--
    } else if (movements[i] === 'RIGHT') {
      posJ++
    }
    // Print the current movement on the board
    positions[posI][posJ] = counter.toString()
    counter++
  }
  // Print the final board result
  return positions
}

console.log(go2D(3, 3, ['UP', 'RIGHT', 'DOWN']))
// [ [ ' ', ' ', ' ', ' ', ' ' ],
//   [ ' ', ' ', ' ', ' ', ' ' ],
//   [ ' ', ' ', ' ', '1', '2' ],
//   [ ' ', ' ', ' ', 'go', '3' ],
//   [ ' ', ' ', ' ', ' ', ' ' ] ]
console.log(go2D(2, 2, ['UP', 'LEFT', 'UP']))
// [ [ ' ', '3', ' ', ' ', ' ' ],
//   [ ' ', '2', '1', ' ', ' ' ],
//   [ ' ', ' ', 'go', ' ', ' ' ],
//   [ ' ', ' ', ' ', ' ', ' ' ],
//   [ ' ', ' ', ' ', ' ', ' ' ] ]
console.log(go2D(2, 3, ['DOWN', 'LEFT', 'LEFT', 'UP', 'UP']))
// [ [ ' ', ' ', ' ', ' ', ' ' ],
//   [ ' ', '5', ' ', ' ', ' ' ],
//   [ ' ', '4', ' ', 'go', ' ' ],
//   [ ' ', '3', '2', '1', ' ' ],
//   [ ' ', ' ', ' ', ' ', ' ' ] ]
