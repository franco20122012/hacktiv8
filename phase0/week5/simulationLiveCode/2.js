/*
  HEROES
  Heroes adalah sebuah fungsi untuk menentukkan karakter apa saja yang disukai
  orang sehingga yang duplikat tidak perlu dicatat.
  Fungsi akan menerima parameter berupa string

  EXAMPLE
  INPUT: "saitama&&naruto&&nobita&&nobita&&saitama&&sasuke"
  OUTPUT: [saitama, naruto, nobita, sasuke]

  RULES:
  1. Tidak boleh menggunakan built in function selain .push(), .unshift()
*/

function Heroes (hero) {
  // If the input is empty string, return message
  if (hero === '') return `There's no heroes`
  // Get the hero character and push to the new array
  let arr = []
  let temp = ''
  for (let i = 0; i < hero.length; i++) {
    if (hero[i] !== '&') {
      temp += hero[i]
    }
    if ((hero[i] === '&' && hero[i - 1] === '&') || i === hero.length - 1) {
      arr.push(temp)
      temp = ''
    }
  }
  // Eliminate the duplicate heroes
  let result = []
  for (let i = 0; i < arr.length; i++) {
    let isNotThere = true
    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        isNotThere = false
      }
    }
    if (isNotThere) {
      result.push(arr[i])
    }
  }
  return result
}

// TEST CASE
console.log(Heroes('saitama&&naruto&&nobita&&nobita&&saitama&&sasuke'))
// [ 'saitama', 'naruto', 'nobita', 'sasuke' ]
console.log(Heroes('doraemon&&sakura&&inuyasha&&saitama&&shoji&&ikan indosiar'))
// [ 'doraemon', 'sakura', 'inuyasha', 'saitama', 'shoji', 'ikan indosiar' ]
console.log(Heroes(''))
// There's no heroes
