'use strict'
// Exercise 24 - Boogle
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

/** To run the program, type node boogle.js 4 4
 * Where the first number is the row length
 * And the second number is the column length
 * */
const input = process.argv.slice(2)
const num1 = input[0]
const num2 = input[1]

// Get the words from dictionary data.js using module.exports
const dictionary = require('./data.js').Data

class Boggle {
  constructor (dictionary, num1, num2) {
    this.board = this.shake(num1, num2)
    this.newDictionary = this.filterDictionary(dictionary)
  }

  // Generate randomize boogle board according to row and column input
  shake (num1, num2) {
    if (num1 < 4 || num2 < 4) {
      return `Invalid input. Row and column must be at least 4 in length`
    }
    const reference = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
    const row = []
    for (let i = 0; i < num1; i++) {
      const col = []
      for (let j = 0; j < num2; j++) {
        const randomIndex = Math.floor(Math.random() * 26)
        col.push(reference[randomIndex])
      }
      row.push(col)
    }
    console.log(`\n╔══════════════╗\n║ Boggle Board ║\n╚══════════════╝`)
    return row
  }

  // Filter the dictionary, only contain the alphabet that listed in the boggle board
  filterDictionary (dictionary) {
    const result = []

    for (let i = 0; i < dictionary.length; i++) {
      if (this.inArray(this.board, dictionary[i][0])) {
        result.push(dictionary[i])
      }
    }
    return result
  }

  inArray (array, val) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        if (val === array[i][j]) {
          return true
        }
      }
    }

    return false
  }

  // Check the every word in boggle board that match with the dictionary
  checking () {
    const board = this.board
    if (this.newDictionary.length === 0) return `Please insert the dictionary first!`

    function firstWord (str) {
      const alphabetLocation = []
      for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
          if (str[0] === board[i][j]) {
            alphabetLocation.push([i, j])
          }
        }
      }
      return alphabetLocation
    }

    // Check each word in dictionary
    const output = []
    for (let i = 0; i < this.newDictionary.length; i++) {
      const str = this.newDictionary[i]
      // console.log(str)
      const firstWordLocation = firstWord(str)
      if (firstWordLocation.length > 1) {
        let flag = false
        let x = 0
        while (flag === false && x < firstWordLocation.length) {
          if (validation(str, firstWordLocation[x]) === true) {
            flag = true
            output.push(str)
            break
          }
          x++
        }
      } else if (firstWordLocation.length === 1) {
        if (validation(str, firstWordLocation[0]) === true) {
          output.push(str)
        }
      }
    }

    function validation (word, location) {
      let counter = 0
      const locationlist = [[location[0], location[1]]]
      let noWord = false
      while (counter < word.length - 1 && noWord === false) {
        let next = false
        const x = location[1]
        const y = location[0]
        if (
          word[counter + 1] === board[y][x + 1] &&
          board[y][x + 1] !== undefined
        ) {
          let flag = true
          if (!coordinateCheck(locationlist, y, x + 1)) {
            flag = false
            noWord = true
          }
          if (flag) {
            next = true
            noWord = false
            location[1] = x + 1
            locationlist.push([location[0], location[1]])
            counter++
          }
        }
        if (
          next === false &&
          board[y + 1] !== undefined &&
          word[counter + 1] === board[y + 1][x]
        ) {
          let flag = true
          if (!coordinateCheck(locationlist, y + 1, x)) {
            flag = false
            noWord = true
          }
          if (flag) {
            next = true
            noWord = false
            location[0] = y + 1
            locationlist.push([location[0], location[1]])
            counter++
          }
        }
        if (
          next === false &&
          word[counter + 1] === board[y][x - 1] &&
          board[y][x - 1] !== undefined
        ) {
          let flag = true
          if (!coordinateCheck(locationlist, y, x - 1)) {
            flag = false
            noWord = true
          }
          if (flag) {
            next = true
            noWord = false
            location[1] = x - 1
            locationlist.push([location[0], location[1]])
            counter++
          }
        }
        if (
          next === false &&
          board[y - 1] !== undefined &&
          word[counter + 1] === board[y - 1][x]
        ) {
          let flag = true
          if (!coordinateCheck(locationlist, y - 1, x)) {
            flag = false
            noWord = true
          }
          if (flag) {
            next = true
            noWord = false
            location[0] = y - 1
            locationlist.push([location[0], location[1]])
            counter++
          }
        }
        if (
          next === false &&
          board[y - 1] !== undefined &&
          word[counter + 1] === board[y - 1][x + 1]
        ) {
          let flag = true
          if (!coordinateCheck(locationlist, y - 1, x + 1)) {
            flag = false
            noWord = true
          }
          if (flag) {
            next = true
            noWord = false
            location[0] = y - 1
            location[1] = x + 1
            locationlist.push([location[0], location[1]])
            counter++
          }
        }
        if (
          next === false &&
          board[y + 1] !== undefined &&
          word[counter + 1] === board[y + 1][x + 1]
        ) {
          let flag = true
          if (!coordinateCheck(locationlist, y + 1, x + 1)) {
            flag = false
            noWord = true
          }
          if (flag) {
            next = true
            noWord = false
            location[0] = y + 1
            location[1] = x + 1
            locationlist.push([location[0], location[1]])
            counter++
          }
        }
        if (
          next === false &&
          board[y + 1] !== undefined &&
          word[counter + 1] === board[y + 1][x - 1]
        ) {
          let flag = true
          if (!coordinateCheck(locationlist, y + 1, x - 1)) {
            flag = false
            noWord = true
          }
          if (flag) {
            next = true
            noWord = false
            location[0] = y + 1
            location[1] = x - 1
            locationlist.push([location[0], location[1]])
            counter++
          }
        }
        if (
          next === false &&
          board[y - 1] !== undefined &&
          word[counter + 1] === board[y - 1][x - 1]
        ) {
          let flag = true
          if (!coordinateCheck(locationlist, y - 1, x - 1)) {
            flag = false
            noWord = true
          }
          if (flag) {
            next = true
            noWord = false
            location[0] = y - 1
            location[1] = x - 1
            locationlist.push([location[0], location[1]])
            counter++
          }
        }
        if (noWord === true || next === false) {
          return false
        }
      }
      if (counter === word.length - 1) {
        return true
      }

      function coordinateCheck (arr, y, x) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i][0] === y && arr[i][1] === x) {
            return false
          }
        }
        return true
      }
    }

    console.log(`\n╔════════╗\n║ Result ║\n╚════════╝`)
    const result = output.length + ((output.length <= 1) ? ' word found: ' : ' words found: ')
    return console.log(result, output)
  }
}

const game = new Boggle(dictionary, num1, num2)
console.log(game.board)
game.checking()
