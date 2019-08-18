'use strict'
// Exercise 9 - Callback Shopping
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

const beli = require('./beli')

const errands = [
  { item: 'shoes', harga: 350000, waktu: 2000 },
  { item: 'groceries', harga: 140000, waktu: 3000 },
  { item: 'clothes', harga: 150000, waktu: 1500 },
  { item: 'computer', harga: 1500000, waktu: 1000 },
  { item: 'books', harga: 100000, waktu: 3500 }
]

beli(1000000, errands[0], function (kembalian) {
  beli(kembalian, errands[1], function (kembalian) {
    beli(kembalian, errands[2], function (kembalian) {
      beli(kembalian, errands[3], function (kembalian) {
        beli(kembalian, errands[4], function (kembalian) {
        })
      })
    })
  })
})
