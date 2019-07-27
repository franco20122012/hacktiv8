/*
============================
 Menseleksi DOM Lebih Dalam
============================
*/

/*
1. Parent -> Child -> Child cara biasa
*/

// Menseleksi element <div id="contoh-div-1">
let contohDiv1 = document.getElementById('contoh-div-1')
console.log(contohDiv1)

// Mendapatkan <p id="contoh-p-1"> di dalam <div id="contoh-div-1">
let contohP1 = contohDiv1.children[0]
console.log(contohP1)

// Mendapatkan <strong> di dalam <p id="contoh-p-1">
let strongElem = contohP1.children[0]
console.log(strongElem)
