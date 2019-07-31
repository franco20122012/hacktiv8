// Manual join() => The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.

function join (arr) {
  let str = ''
  arr.forEach(function (i, index) {
    str += i
    if (index !== (arr.length - 1)) {
      str += ','
    }
  })
  return str
}

// TEST CASE

console.log(join(['a', 'b', 'c'])) // 'a,b,c'
