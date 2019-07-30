/*
=======================
INVENTARIS KERAN MASJID
=======================

[INSTRUCTION]
Terdapat function inventarisKeran yang menerima 1 parameter berupa string ,
string input menggambar kondisi keran masjid
keran yang berjalan dengan baik dilambangkan dengan symbol ^,
keran yang rusak dilambangkan dengan ?,
symbol X melambangkan dinding pemisah keran wudhu

[EXAMPLES]
input: 'XX^XX^XX^XX?XX^XX'
output :
'terdapat 4 keran yang berjalan nomor(1, 2, 3, 5) , dan 1 keran rusak nomor(4)'

input: 'XX?XX?XX^XX'
output:
'terdapat 1 keran yang berjalan nomor(3), dan 2 keran rusak nomor(1,2)'

input : 'XX^XX^XX'
output :
'Semua keran berjalan dengan baik'

input : 'XX?XX?XX'
output :
'Semua keran rusak'

[RULES]
- WAJIB MENGGUNAKAN PSEUDOCODE !
- dilarang menggunakan splice, slice, split, substring, substr

// YOUR PSEUDOCODE/ALGORITHM HERE

*/

function inventarisKeran (str) {
  // Create counters and arrays for OK and NOT OK
  let position = 0
  let arrOk = []
  let arrNotOk = []
  let countOk = 0
  let countNotOk = 0
  // Do looping to check the water tap condition
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '^') {
      countOk++
      position++
      arrOk.push(position)
    } else if (str[i] === '?') {
      countNotOk++
      position++
      arrNotOk.push(position)
    }
  }
  // Check how many tap are OK and NOT OK
  if (countNotOk === 0) return `Semua keran berjalan dengan baik`
  if (countOk === 0) return `Semua keran rusak`

  return `terdapat ${countOk} keran yang berjalan nomor(${arrOk}), dan ${countNotOk} keran rusak nomor(${arrNotOk})`
}

console.log(inventarisKeran('XX^XX^XX^XX?XX^XX'))
// terdapat 4 keran yang berjalan nomor(1, 2, 3, 5) , dan 1 keran rusak nomor(4)
console.log(inventarisKeran('XX?XX?XX^XX'))
// terdapat 1 keran yang berjalan nomor(3), dan 2 keran rusak nomor(1,2)
console.log(inventarisKeran('XX^XX^XX'))
// Semua keran berjalan dengan baik
console.log(inventarisKeran('XX?XX?XX'))
// Semua keran rusak
