/*
=============================================
 Menseleksi DOM berdasarkan hubungan Sibling
=============================================
*/

// Menseleksi element <div id="contoh-div-1">
let contohDiv1 = document.getElementById('contoh-div-1')

// Mendapatkan sibling setelah <div id="contoh-div-1">
let contohDiv1NextSibling = contohDiv1.nextElementSibling

console.log(contohDiv1NextSibling) // <div id="contoh-div-2">...</div>
