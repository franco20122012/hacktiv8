/*
Dalam sebuah game, hero yang dapat dipilih memiliki jenis tertentu
Dalam game ini satu tim harus memilih 5 heroes yang akan dimainkan
Disini kamu diminta menampilkan apakah pick hero yang dilakukan tergolong good atau bad dengan kodisi sebagai berikut
good pick : jika dari hero yang di pick tidak memiliki lebih dari 2 tipe hero yang sama
bad pick : jika dari hero yang di pick ada 3 atau lebih tipe hero yang sama
pick list : ranger, mage, tank, warrior, atau assassin (cuma ada 5 tipe ini)
  tampilkan apakah good pick atau bad pick dan jenis apa yang lebih dari 2, pesan seperti pada test case

  [RULES]
  1. Wajib menggunakan Algoritma/Pseudocode
  2. Hanya boleh menggunakan built in function .split(), .unshift(), dan .push()
*/

/*
================================================================
PSEUDOCODE:
-----------
FUNCTION 'heroPick' with parameter 'composition'
  Change the input 'composition' from string to array
  SET 'list' array with splitted string from input 'composition' based on ',' string
  Check the input array if the length is less than 5
  IF 'list' array length  is LESS THAN 5
    DISPLAY 'not sufficient players'
  ENDIF
  Check the if there is odd input in the array 'list'
  IF 'isValid' equal to false
    DISPLAY `god is not on the pick list`
  ENDIF
  IF object key in the 'pick' object is more than 2 THEN
    DISPLAY `bad pick too many ${key}`
  ENDIF
  DISPLAY `good pick'`
ENDFUNCTION
================================================================
*/

function heroPick (composition) {
  // Change the input from string to array
  let pick = {
    ranger: 0,
    mage: 0,
    tank: 0,
    warrior: 0,
    assassin: 0
  }
  let list = []
  let string = ''
  for (let i = 0; i < composition.length; i++) {
    if (composition[i] !== ',') {
      string += composition[i]
    }
    if (composition[i] === ',' || i === composition.length - 1) {
      list.push(string)
      string = ''
    }
  }

  // Check the input array if the length is less than 5
  if (list.length < 5) return `not sufficient players`

  // Check if there is odd input
  for (let i = 0; i < list.length; i++) {
    if (notInArray(pick, list[i]) === false) {
      return `${list[i]} is not on the pick list`
    }
  }

  // Use for-loop to check if there is double
  for (let i = 0; i < list.length; i++) {
    for (let key in pick) {
      if (key === list[i]) {
        pick[key]++
      }
    }
  }
  for (let key in pick) {
    if (pick[key] > 2) {
      return `bad pick too many ${key}`
    }
  }
  return `good pick`
}

function notInArray (obj, arr) {
  for (let key in obj) {
    if (key === arr) {
      return true
    }
  }
  return false
}

// Test case
console.log(heroPick('ranger,ranger,mage,tank,warrior')) // good pick
console.log(heroPick('mage,mage,tank,mage,warrior')) // bad pick too many mage
console.log(heroPick('mage,mage,tank,mage')) // not sufficient players
console.log(heroPick('mage,mage,god,mage,mage')) // god is not on the pick list
