/*
  ===================
  MOBA LEGEND ADDRESS
  ===================

  mobaLegendAddress adlaah sebuah function dimana menerima 1 parameter heroes
    - heroes adalah sebuah array of object yang berisi info hero-hero mobile legend

  output dari function ini adalah array dengan object yang memiliki address yang berbeda

  [NOTES]
  - apabila terdapat hero yang tidak memiliki address maka dianggap tidak valid
  - dilarang menggunakan built in function selain .push(), .unshift(), .pop(), .shift()
  - urutan tidak masalah
*/

function mobaLegendAddress(heroes) {
  // code here
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