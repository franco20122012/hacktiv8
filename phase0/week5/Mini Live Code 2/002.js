/*
    ==================
    Range Prime Number
    ==================

    [INSTRUCTION]
    jika ditanya berapa angka prima yg pertama maka jawabannya adalah 2.
    yang mana prime[0] = 2;
    maka :

    [EXAMPLE]
    jika 10 angka prime pertama : [2,3,5,7,11,13,17,19]
    jika angka prime index ke-4 sampai index ke-11 maka : [11,13,17,19,23,29,31]

    diberikan 2 parameter "start","finish"
    "start" yaitu index angka prime yang ditentukan.
    "finish" yaitu batas index angka prime

    hasil akhirnya adalah deret angka prime yg telah ditentukan batasnya dalam bentuk array

*/

function rangePrimeNumber (start, finish) {
  // Create an array to accomodate prime numbers
  let primeNum = []
  // Create counter and number
  let number = 2
  let counter = 1
  // Do while-loop to get all prime numbers until 'finish' is reached
  while (counter <= finish) {
    let check = checkPrime(number)
    if (check) {
      primeNum.push(number)
      // Add counter if it is prime number
      counter++
    }
    // Add number to find if the next number is prime or not
    number++
  }
  // Create array result to get the prime numbers that we want
  let result = []
  for (let i = start - 1; i < finish; i++) {
    result.push(primeNum[i])
  }
  return result
}

function checkPrime (number) {
  if (number === 0 || number === 1) {
    return false
  } else {
    for (var i = 2; i < number; i++) {
      if (number % i === 0) {
        return false
      }
    }
  }
  return true
}

console.log(rangePrimeNumber(5, 10))
// output
// [11,13,17,19,23,29]

console.log(rangePrimeNumber(4, 9))
// output [7,11,13,17,19,23]
