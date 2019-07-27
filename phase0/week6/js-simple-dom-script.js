let pageTitleElement = document.getElementById('page-title')
// Menyeleksi DOM berdasarkan Id element dan menampungnya ke dalam variabel.
// Isinya merupakan object HTML element

let pageBoxElements = document.getElementsByClassName('page-box')
// Menyeleksi DOM berdasarkan nama class element dan menampungnya ke dalam variabel.
// Isinya merupakan array dari object HTML element, walau <h1> hanya ada 1.

let pageHeadings = document.getElementsByTagName('h1')
// Menyeleksi DOM berdasarkan tag <h1> dan menampungnya ke dalam variabel.
// Isinya merupakan array dari object HTML element

let pageTitleElementsContent = pageTitleElement.innerHTML
console.log('isi <div id="page-title"> :' + pageTitleElementsContent)
// isi <div id="page-title"> adalah Sample Page Title

// Meloop array pageBoxElements
for (let i = 0; i < pageBoxElements.length; i++) {
  let currentPageBoxElement = pageBoxElements[i]
  let currentPageBoxElementContent = currentPageBoxElement.innerHTML
  console.log('isi <div class="page-box"> index ke ' + i + ': ' + currentPageBoxElementContent)
}

// Mengubah isi pageTitleElement
pageTitleElement.innerHTML = '<h2>Updated Content of Page Title Element</h2>'
let newPageTitleElementContent = pageTitleElement.innerHTML
console.log('isi baru dari <div id="page-title"> :' + newPageTitleElementContent)
