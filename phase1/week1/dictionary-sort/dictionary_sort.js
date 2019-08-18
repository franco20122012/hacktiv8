function dictionarySort (dictionaries) {
  // Using for-loop to check each input array element, starting from index 1
  for (let i = 1; i < dictionaries.length; i++) {
    let temp = dictionaries[i]
    let j = i - 1
    while (j >= 0 && temp < dictionaries[j]) { j-- }
    // Move sorted element
    dictionaries.splice(i, 1)
    dictionaries.splice(++j, 0, temp)
  }
  return dictionaries.join(',')
}

// TEST CASES
let arrOfWord = ['makan', 'duduk', 'tidur', 'terbang'] // duduk,makan,terbang,tidur
console.log(dictionarySort(arrOfWord))
arrOfWord = ['anggi', 'angga', 'ani', 'adi'] // adi,angga,anggi,ani
console.log(dictionarySort(arrOfWord))

module.exports = dictionarySort
