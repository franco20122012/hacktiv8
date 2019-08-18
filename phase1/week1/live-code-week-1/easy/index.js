'use strict'
// Easy - Live Code Phase 1 Week 1
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

function countDistance(arr, money) {
  // Create distance counter
  const position = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 'o') {
        position.push([i, j])
      }
    }
  }
  // Check distance counter
  let status = checkDistance(position, arr)
  let distance = status[0]
  // Check money
  let changes = checkMoney(money, status[1])

  if (changes > 0) {
    return `Sisa uang : ${changes}, jarak tempuh: ${convertToKM(distance)} km`
  } else {
    distance = checkRestDistance(position, arr, money) * 10
    return `Uang anda habis, jarak tersisa sampai tujuan adalah ${distance} km`
  }

}

function checkDistance(position, arr) {
  let distance = 0
  let countPay = 0
  let result = []
  let j = position[0][1]
  let isStart = false
  for (let i = position[0][0]; i < arr.length; i++) {
    if (isStart) j = 0
    for (j; j < arr[i].length; j++) {
      if (arr[i][j] === '') {
        distance++
      } else if (arr[i][j] === 'x') {
        distance++
        countPay++
      } else if (arr[i][j] === 'o' && isStart) {
        result.push(distance, countPay)
        return result
      }
      isStart = true
    }
  }
}

function convertToKM(distance) {
  return distance * 10
}

function checkMoney(money, pay) {
  let change = money - (pay * 10000)
  return change
}

function checkRestDistance(position, arr, money) {
  let restDistance = 0
  let result = []
  let j = position[0][1]
  let isStart = false
  for (let i = position[0][0]; i < arr.length; i++) {
    if (isStart) j = 0
    for (j; j < arr[i].length; j++) {
      if (money > 0) {
        if (arr[i][j] === 'x') {
          money -= 10000
        }
      } else {
        if (arr[i][j] === '') {
          restDistance++
        } else if (arr[i][j] === 'x') {
          money -= 10000
          restDistance++
        } else if (arr[i][j] === 'o' && isStart) {
          result.push(restDistance)
          return result
        }
      }
      isStart = true
    }
  }
}

console.log(countDistance([
  ['', 'o', '', '', 'o'],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
], 40000))
// output:
/* Sisa uang : 40000, jarak tempuh: 20 km */
console.log(countDistance([
  ['', '', 'o', '', ''],
  ['', 'x', ''],
  ['', '', '', '', '', 'x'],
  ['', 'o', '', '']
], 50000))
// // output:
// /* Sisa uang : 30000, jarak tempuh: 120 km */
console.log(countDistance([
  ['', '', '', '', ''],
  ['o', 'x', 'x', 'x', ''],
  ['', '', '', 'x', '', 'x'],
  ['', 'o', '', '']
], 40000))
// // output:
// /* Uang anda habis, jarak tersisa sampai tujuan adalah 30 km*/
console.log(countDistance([
  ['', 'o', 'x', 'x', 'x', 'x'],
  ['o', '', '', '', ''],
  ['', '', '', '', ''],
], 30000))
// // output:
// /* Uang anda habis, jarak tersisa sampai tujuan adalah 10 km*/