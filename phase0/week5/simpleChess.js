function isSave (board) {
  let posB = []
  let posP = []
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'B') {
        posB.push(i, j)
      }
      if (board[i][j] === 'P') {
        posP.push(i, j)
      }
    }
  }
  console.log(posB, posP)
  return !(posP[0] === posB[0] || posP[1] === posB[1])
}

console.log(isSave(
  [
    [' ', ' ', ' ', 'P', ' '],
    [' ', 'B', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ']
  ]
)) // true

console.log(isSave(
  [
    [' ', ' ', ' '],
    [' ', 'B', ' '],
    [' ', 'P', '']
  ]
)) // false

console.log(isSave(
  [
    [' ', ' ', ' '],
    [' ', 'B', 'P'],
    [' ', ' ', ' ']
  ]
)) // false
