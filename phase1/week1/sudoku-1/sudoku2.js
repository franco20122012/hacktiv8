'use strict'
// Exercise - Sudoku Solver
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

class Sudoku {
  constructor (boardString) {
    this.string = boardString
    this.initial = this.initBoard()
    this.solved = this.initBoard()
  }

  // Initialize the sudoku board [9x9]
  initBoard () {
    let unsolvedArray = []
    // Get 9 rows of array
    for (let i = 0; i < this.string.length; i += 9) {
      let temp = []
      // Get 9 characters of the string and convert it to numbers -> push into a row
      for (let j = i; j < i + 9; j++) {
        temp.push(+this.string[j])
      }
      unsolvedArray.push(temp)
    }
    return unsolvedArray
  }

  solve () {
    let board = this.solved
    // Get empty position
    let zeroPos = this.getEmptyPosition(board)

    for (let i = 0; i < zeroPos.length; i++) {
      let row = zeroPos[i][0]
      let col = zeroPos[i][1]
      let newNumber = (board[row][col]) + 1

      let validation = this.isInRow(row, col, newNumber)
      while (!validation) {
        if (newNumber > 8) {
          board[row][col] = 0
          i -= 2
          break
        }
        validation = this.isOk(row, col, ++newNumber)
      }
      if (validation) {
        board[row][col] = newNumber
      }
    }

    return board
  }

  getEmptyPosition (board) {
    let result = []
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === 0) {
          result.push([i, j])
        }
      }
    }
    return result
  }

  // We check if a possible number is already in a row
  isInRow (row, number) {
    for (let i = 0; i < 9; i++) {
      if (this.solved[row][i] === number) {
        return true
      }
    }
    return false
  }

  // We check if a possible number is already in a column
  isInCol (col, number) {
    for (let i = 0; i < 9; i++) {
      if (this.solved[i][col] === number) {
        return true
      }
    }
    return false
  }

  // We check if a possible number is in its 3x3 box
  isInBox (row, col, number) {
    // Get the boundaries of the block
    let r = row - row % 3
    let c = col - col % 3

    for (let i = r; i < r + 3; i++) {
      for (let j = c; j < c + 3; j++) {
        if (this.solved[i][j] === number) {
          return true
        }
      }
    }
    return false
  }

  // Combined method to check if a number possible to a row,col position is ok
  isOk (row, col, number) {
    return !this.isInRow(row, number) && !this.isInCol(col, number) && !this.isInBox(row, col, number)
  }

  // Returns a string representing the current state of the board
  board () {
    console.log(`SUDOKU SOLVER\n=============`)
    console.log(`Problem : ${this.string}\n`)

    // Add vertical separator for each blocks
    for (let i = 0; i < 9; i++) {
      this.solved[i].splice(0, 0, '┃')
      this.solved[i].splice(4, 0, '┃')
      this.solved[i].splice(8, 0, '┃')
      this.solved[i].splice(12, 0, '┃')
      this.solved[i] = this.solved[i].join(' ')
      this.initial[i].splice(0, 0, '┃')
      this.initial[i].splice(4, 0, '┃')
      this.initial[i].splice(8, 0, '┃')
      this.initial[i].splice(12, 0, '┃')
      this.initial[i] = this.initial[i].join(' ')
    }
    // Make horizontal separator for each blocks
    let line = `┣━━━━━━━╋━━━━━━━╋━━━━━━━┫`

    for (let k = 3; k < 8; k += 4) {
      this.solved.splice(k, 0, line)
      this.initial.splice(k, 0, line)
    }

    // Print the initial sudoku board in terminal
    console.log('Initial Sudoku Board:')
    console.log('=====================')
    console.log(`┏━━━━━━━┳━━━━━━━┳━━━━━━━┓`)
    console.log(this.initial.join('\n'))
    console.log(`┗━━━━━━━┻━━━━━━━┻━━━━━━━┛\n`)

    // Print the solved sudoku board in terminal
    console.log('Solved Sudoku Board:')
    console.log('====================')
    console.log(`┏━━━━━━━┳━━━━━━━┳━━━━━━━┓`)
    console.log(this.solved.join('\n'))
    console.log(`┗━━━━━━━┻━━━━━━━┻━━━━━━━┛`)
  }
}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var boardString = fs.readFileSync('set-02_project-euler_50-easy-puzzles.txt')
  .toString()
  .split('\n')[1]

let game = new Sudoku(boardString)

// Remember: this will just fill out what it can and not "guess"
game.solve()
// Print the sudoku board 9x9
game.board()
