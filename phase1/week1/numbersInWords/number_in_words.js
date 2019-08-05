// Exercise 5 - Number In Words
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

function numberToWords (num) {
  // Set reference -> array of units as words
  let reference = ['nol', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas']

  num = Math.floor(num)
  if (num < 12) {
    return reference[num]
  } else if (num < 20) {
    return numberToWords(num - 10) + ' belas'
  } else if (num < 100) {
    return numberToWords(num / 10) + ' puluh' + ((num % 10 === 0) ? '' : ' ' + numberToWords(num % 10))
  } else if (num < 200) {
    return 'seratus' + ((num % 100 === 0) ? '' : ' ' + numberToWords(num - 100))
  } else if (num < 1000) {
    return numberToWords(num / 100) + ' ratus' + ((num % 100 === 0) ? '' : ' ' + numberToWords(num % 100))
  } else if (num < 2000) {
    return 'seribu' + ((num % 1000 === 0) ? '' : ' ' + numberToWords(num - 1000))
  } else if (num < 1000000) {
    return numberToWords(num / 1000) + ' ribu' + ((num % 1000 === 0) ? '' : ' ' + numberToWords(num % 1000))
  } else if (num < 1000000000) {
    return numberToWords(num / 1000000) + ' juta' + ((num % 1000000 === 0) ? '' : ' ' + numberToWords(num % 1000000))
  } else if (num < 1000000000000) {
    return numberToWords(num / 1000000000) + ' milyar' + ((num % 1000000000 === 0) ? '' : ' ' + numberToWords(num % 1000000000))
  } else if (num < 1000000000000000) {
    return numberToWords(num / 1000000000000) + ' triliun' + ((num % 1000000000000 === 0) ? '' : ' ' + numberToWords(num % 1000000000000))
  }
}

// Driver code
console.log(numberToWords(0))
console.log(numberToWords(1000100))
console.log(numberToWords(2011845))
console.log(numberToWords(999999999999999))
