/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber (equation) {
  // Change the number to string, to check the length
  equation = equation.toString()
  // Base case
  if (equation.length === 1 && equation === '0') {
    return ''
  } else if (equation.length === 1) {
    return equation
  }
  // Get the multiplier
  let multiplier = Math.pow(10, equation.length - 1)
  // Return the message
  // If the rest elements in the string are 0s, return the value itself
  if (!Number(equation.slice(1))) {
    return equation[0] * multiplier + ''
  } // If not, continue the recursion
  return equation[0] * multiplier + '+' + parseNumber(Number(equation.slice(1)))
}

console.log(parseNumber(3333)) // 3000+300+30+3
console.log(parseNumber(90)) // 90
console.log(parseNumber(2333)) // 2000+300+30+3
console.log(parseNumber(5050)) // 5000+50
console.log(parseNumber(550000)) // 5 5 000
