/*
  ===================
  MOBA LEGEND ADDRESS
  ===================

  mobaLegendAddress adalah sebuah function dimana menerima 1 parameter heroes
    - heroes adalah sebuah array of object yang berisi info hero-hero mobile legend

  output dari function ini adalah array dengan object yang memiliki address yang berbeda

  [NOTES]
  - apabila terdapat hero yang tidak memiliki address maka dianggap tidak valid
  - dilarang menggunakan built in function selain .push(), .unshift(), .pop(), .shift()
  - urutan tidak masalah
*/

function mobaLegendAddress (heroes) {
  // Create an array to accomodate the result
  let result = []
  // Do looping to find the unique address
  for (let i = 0; i < heroes.length; i++) {
    // Declare variable 'count' to count the appearance of the address
    let count = 0
    if (heroes[i].address) {
      // Do the 2nd loop to check the appearance of the address
      for (let j = 0; j < heroes.length; j++) {
        if (heroes[j].address !== undefined) {
          // Increment the count if you find the same address
          if (heroes[i].address === heroes[j].address) {
            count++
          }
        }
      }
    }
    // If there is a unique address that appears only once, push to the result array
    if (count === 1) {
      result.push(heroes[i])
    }
  }
  return result
}

console.log(mobaLegendAddress([
  {
    name: 'Layla',
    address: 'Cimahi'
  },
  {
    name: 'Zi Long',
    address: 'Sukabumi'
  },
  {
    name: 'Balmond',
    address: 'Cimahi'
  },
  {
    name: 'Freya'
  }
]))
// [{
//   name: 'Zi Long',
//   address: 'Sukabumi'
// }]
