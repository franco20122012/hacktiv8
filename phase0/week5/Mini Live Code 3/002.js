/*
==========
negaraKota
==========

yaitu sebuah program khusus untuk mengelompokkan data yang berserakan
berupa negara dan kota dari internet berupa array multidimensi.

[INSTRUCTION]
tugas kalian adalah merapikan
data yg di dapat tersebut menjadi object literal yg mudah di baca.

untuk dapat mengetahui perbedaan antara data negara dan kota adalah :
1. negara
bentuk data negara berupa array yg berisi 3 data yaitu :
[n,a,b]
n = penanda kalau ini data negara
a = kode negara , yang nanti nya sebagai acuan penyocok dengan data kota
b = nama negara , yang akan menjadi key output
2. kota
bentuk data kota berupa array yg berisi 2 data yaitu :
[a,c]
a = kode negara , yang nanti nya sebagai acuan penyocok dengan data negara
c = nama kota , yang nantinya akan di pasangkan dengan nama negara masing - masing

[EXAMPLE]
input : [
["n","id","Indonesia"],["id","Jakarta"],["n","usa","Amerika Serikat"],
["id","Surabaya"],["usa","New York"],["usa","Washington DC"],["usa","California"],
["n","ch","China"],["ch","Beijing"],["n","ind","India"],["ch","Shanghai"],["ind","Bangalore"],
["ind","New Delhi"],["n","ru","Rusia"],["ru","Moscow"]
]
maka outputnya :
{
    Indonesia: [ 'Jakarta', 'Surabaya' ],
    'Amerika Serikat': [ 'New York', 'Washington DC', 'California' ],
    China: [ 'Beijing', 'Shanghai' ],
    India: [ 'Bangalore', 'New Delhi' ],
    Rusia: [ 'Moscow' ]
}

[RULE]
- Dilarang menggunakan build in function array apapun kecuali push()
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .indexOf() dan .include()
*/

function negaraKota (arr) {
  // Create object to accomodate the result
  let result = {}
  // Create array to accomodate countries name
  let countries = []
  // Create array to accomodate cities name
  let cities = []
  // Do for-loop to get the countries and cities
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 3) {
      countries.push(arr[i])
    } else if (arr[i].length === 2) {
      cities.push(arr[i])
    }
  }
  // Do another loop for countries array -> create key in 'result' object
  for (var j = 0; j < countries.length; j++) {
    if (result[countries[j][2]] === undefined) {
      result[countries[j][2]] = []
    }
  }
  // Do loop for cities array -> add cities according to the countries code
  for (var k = 0; k < cities.length; k++) {
    for (var l = 0; l < countries.length; l++) {
      if (cities[k][0] === countries[l][1]) {
        result[countries[l][2]].push(cities[k][1])
      }
    }
  }
  return result
}

console.log(negaraKota([
  ['n', 'id', 'Indonesia'], ['id', 'Jakarta'], ['n', 'usa', 'Amerika Serikat'],
  ['id', 'Surabaya'], ['usa', 'New York'], ['usa', 'Washington DC'], ['usa', 'California'],
  ['n', 'ch', 'China'], ['ch', 'Beijing'], ['n', 'ind', 'India'], ['ch', 'Shanghai'], ['ind', 'Bangalore'],
  ['ind', 'New Delhi'], ['n', 'ru', 'Rusia'], ['ru', 'Moscow']
]))

/*
{
    Indonesia:['Jakarta','Surabaya'],
    'Amerika Serikat':['New York','Washington DC','California'],
    China:['Beijing','Shanghai'],
    India:['Bangalore','New Delhi'],
    Rusia:['Moscow']
}
*/

console.log(negaraKota([
  ['n', 'br', 'Brazil'], ['br', 'Rio de Jeneiro'], ['n', 'usa', 'Amerika Serikat'],
  ['ru', 'St. Petersburg'], ['usa', 'New York'], ['ksa', 'Mekkah'], ['usa', 'Washington DC'], ['usa', 'California'],
  ['n', 'ch', 'China'], ['ksa', 'Madinah'], ['ch', 'Beijing'], ['n', 'ind', 'India'], ['ch', 'Shanghai'], ['ind', 'Bangalore'],
  ['ind', 'New Delhi'], ['n', 'ru', 'Rusia'], ['ru', 'Moscow'], ['n', 'ksa', 'Arab Saudi']
]))

/*
{
    Brazil: [ 'Rio de Jeneiro' ],
    'Amerika Serikat': [ 'New York', 'Washington DC', 'California' ],
    China: [ 'Beijing', 'Shanghai' ],
    India: [ 'Bangalore', 'New Delhi' ],
    Rusia: [ 'St. Petersburg', 'Moscow' ],
    'Arab Saudi': [ 'Mekkah', 'Madinah' ]
}
*/
