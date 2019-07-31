/*
=================================
Recursive Mastery : Data Reducer
=================================
Nama:________
[INSTRUKSI]
Diberikan sebuah function dataReducer yang menerima satu parameter berupa string.
Function akan memproses string dengan mengecek secara alphabet urutan yang dimulai dari karakter pertama.
Apabila ditemukan karakter yang bukan merupakan alphabet setelahnya, karakter tersebut di skip.
Function akan mereturn karakter apa saja yang di-skip, dalam bentuk string dibatasi dengan koma.
[CONTOH]
input: abcdxefgh5wi menjadi abcdefghi,
proses: kita meng-skip x karena setelah d harusnya e, dan 5 dan w karena setelah h harusnya i.
output: 'x,5,w'
input: opqrstu menjadi opqrstu,
proses: tidak ada yang terskip
output: ''
input: acdefghij => a
proses: kita meng-skip c,d,e,f,g,h,i,j karena setelah a seharusnya b
output: c,d,e,f,g,h,i,j
*/

function dataReducer (data) {
  let result = ''
  let newData = ''
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let index
  let recursive = null

  for (let i = 0; i < alphabet.length; i++) {
    if (alphabet[i] === data[0]) index = i
  }

  if (data[1] === alphabet[index + 1]) newData = data.substr(1)
  else {
    result += data[1]
    newData = data[0] + data.substr(2)
  }

  if (data.length === 2) return result
  recursive = dataReducer(newData)

  if (recursive && result.length) {
    return result + ',' + recursive
  }
  return result + recursive
}

// function dataReducer (data) {
//   // BASE CASE
//   if (data.length > 2) {
//     return (data[0].charCodeAt() + 1 === data[1].charCodeAt()) ? dataReducer(data.slice(1)) : data[1] + ',' + dataReducer(data[0] + data.slice(2))
//   } else {
//     return (data[0].charCodeAt() + 1 === data[1].charCodeAt()) ? '' : data[1]
//   }
// }

console.log(dataReducer('abcdxefgh5wi')) // 'x,5,w'
console.log(dataReducer('opqrstu')) // ''
console.log(dataReducer('acdefghij')) // 'c,d,e,f,g,h,i,j'
console.log(dataReducer('testu')) // 'e,s,t'
