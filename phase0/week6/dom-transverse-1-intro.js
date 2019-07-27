/*
====================================================
 Menseleksi DOM berdasarkan hubungan Parent - Child
====================================================
*/

// Menseleksi element <body>
let body = document.body

// Mendapatkan element children dari <body>
let bodyChilds = body.children

// Menampilkan DOM yang menjadi child dari <body> dalam bentuk array
console.log(bodyChilds) // h1, div id="contoh-div-1", div id="contoh-div-2", scripts js
