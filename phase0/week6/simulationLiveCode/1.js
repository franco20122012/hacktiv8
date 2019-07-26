/*
  SELECT OPTION
  Select Option adalah sebuah fungsi untuk mengambil nilai tengah atau median dari
  array hasil kelipatan dari keynya.
  Fungsi akan menerima parameter berupa array dan key yang ingin dicari.

  EXAMPLE
  INPUT: array = [1, 2, 3, 4, 5, 6, 7], key = 2
  PROCESS: [2, 4, 6] adalah array yang merupakan kelipatan 2
  MEDIAN: 4
  OUTPUT: 4 adalah nilai median dari array di process

  INPUT: array = [1, 2, 3, 4, 5, 6], key = 1
  PROCESS: [1, 2, 3, 4, 5, 6] adalah array yang merupakan kelipatan 1
  MEDIAN: (3 + 4)/2
  OUTPUT: 3.5 adalah nilai tengah dari array di process

  RULES:
  1. Tidak boleh menggunakan built in function selain .push(), Math, dan .unshift()
  2. WAJIB menggunakan PSEUDOCODE
*/

/*
================================================================
PSEUDOCODE:
-----------
FUNCTION 'selectOption' with parameter 'array' and 'key'
  Create new array with empty value
  FOR each index of 'array' DO
    Check the element in the 'array' that is the divisor of 'key'
    IF 'array' of the current index modulus with 'key is true THEN
    PUSH the array current index value to new array
    ENDIF
  ENDFOR
  IF 'newArray' index length is 0 THEN
    DISPLAY There's not option`
  ENDIF
  SET 'medianIndex' with the value of 'newArray' length divided by 2 minus 1
  IF 'newArray' length is even THEN
    CALCULATE the mean value of medianIndex and medianIndex+1
    DISPLAY the median value of the 'newArray'
  ELSE
    DISPLAY the median value of the 'newArray
  ENDIF
ENDFUNCTION
================================================================
*/

function selectOption (array, key) {
  let newArray = []
  // Check the array
  for (let i = 0; i < array.length; i++) {
    if (array[i] % key === 0) {
      newArray.push(array[i])
    }
  }
  // If there is no element in the new array, return message
  if ((newArray.length === 0)) return `There's not option`
  // Check median of the new array
  let medianIndex = Math.round(newArray.length / 2) - 1
  if (newArray.length % 2 === 0) {
    return (newArray[medianIndex] + newArray[medianIndex + 1]) / 2
  } else {
    return newArray[medianIndex]
  }
}

// TEST CASE
console.log(selectOption([1, 2, 3, 4, 5, 6, 7], 2)) // 4
console.log(selectOption([1, 2, 3, 4, 5, 6], 1)) // 3.5
console.log(selectOption([1, 2, 3, 4, 5, 6], 3)) // 4.5
console.log(selectOption([1, 2, 3, 4, 5, 6], 4)) // 4
console.log(selectOption([1, 2, 3, 4, 5, 6], 7)) // There's not option
