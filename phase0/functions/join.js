// Manual join() => The pop() method removes the last element from an array and returns that element.

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
