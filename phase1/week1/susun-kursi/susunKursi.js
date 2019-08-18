// Exercise 2 - (Debugging) Susun Kursi
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

// bila ada 10 orang, ['a','b','c','d','e','f','g','h','i','j'].
// orang-orang tsb akan diatur tempat duduk nya berdasarkan urutannya secara vertikal,
// dan jumlah maksimal kursi per baris vertikal adalah 3.
// tampilkan siapa saja yg berada di baris 1, 2, dan 3 nya.

// hasil yg benar :
// Baris 0 :  [ 'a', 'd', 'g', 'j' ]
// Baris 1 :  [ 'b', 'e', 'h' ]
// Baris 2 :  [ 'c', 'f', 'i' ]

'use strict'

function generateSeats (row) {
  let seats = []
  for (let i = 0; i < row; i++) {
    seats.push([])
  }
  return seats
}

function managePerson (arr, rowSeats) {
  // Generate empty seats first
  let seats = generateSeats(rowSeats)
  let row = 0
  // Using for-loop to manage each person chairs according to the row
  for (let i = 0; i <= arr.length - 1; i++) {
    if (row <= 2) {
      seats[row].push(arr[i])
      row++
    }
    if (row > 2) {
      row = 0
    }
  }
  // Print using console log
  printSeats(seats)
}

function printSeats (seats) {
  for (let i = 0; i < seats.length; i++) {
    console.log(`Baris ${i} : `, seats[i])
  }
}

managePerson(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'], 3)
