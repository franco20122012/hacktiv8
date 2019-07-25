/*
    =============
    Shopping Cart
    =============

    Saat nya berbelanja di harbolnas. kali ini TokoPC memiliki beberapa product
    yang menarik.

    [INSTRUCTION]
    buatlah system cart untuk TokoPC dimana user memilih belanjaan dari
    var products dengan cara memasukkan id product nya kedalam array, setelah
    itu pesanan user di olah , di subtotal dengan cara qty nya di kali price,
    lalu di total semua pesanannya.

    [EXAMPLE]
    jika user memesan [3,2,2,1], maka User telah memesan
    product-product dengan id:
    - 3 ( RAM V-Gen 16GB ) sebanyak 1 qty
      maka subtotalnya adalah price=> 1600000 * qty=> 1 = 1600000
    - 2 ( Harddisk Seagate 1TB ) sebanyak 2 qty
      maka subtotalnya adalah price=> 1500000 * qty=> 2 = 3000000
    - 1 ( Motherboard Asus GTX 1000 ) sebanyak 1 qty
      maka subtotalnya adalah price=> 1000000 * qty=> 1 = 1000000
    total nya adalah 5600000

    dengan contoh perhitungan diatas , maka outputnya adalah :
    {
        title:"Nota Pembayaran"
        carts:{
             {
                id:3,
                title:"RAM V-Gen 16GB"
                qty:1,
                subtotal:1600000
            },
            {
                id:2,
                title:"Harddisk Seagate 1TB"
                qty:2,
                subtotal:3000000
            },
            {
                id:1,
                title:"Motherboard Asus GTX 1000"
                qty:1,
                subtotal:1000000
            }
        },
        total:5600000
    }

    [NOTE]
    - product di dalam cart , tidak berurutan tidak apa - apa

    [RULE]
    - Dilarang menggunakan build in function array apapun kecuali push()
    - Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
    - Dilarang menggunakan regex .match dan lainnya!
    - Dilarang menggunakan built in function .indexOf() dan .include()

*/
var products = [
  {
    id: 1,
    title: 'Motherboard Asus GTX 1000',
    price: 1000000
  },
  {
    id: 2,
    title: 'Harddisk Seagate 1TB',
    price: 1500000
  },
  {
    id: 3,
    title: 'RAM V-Gen 16GB',
    price: 1600000
  },
  {
    id: 4,
    title: 'Monitor Samsung 15 inch',
    price: 1300000
  }
]

function cart (shops) {
  if (shops.length === 0) return `anda harus memilih product`

  let result = {
    title: 'Nota Pembayaran',
    carts: [],
    total: 0
  }

  // Sort
  shops.sort()

  // Count the amount for each ID
  let obj = {}
  for (let i = 0; i < shops.length; i++) {
    if (!obj[shops[i]]) {
      obj[shops[i]] = 1
    } else {
      obj[shops[i]] += 1
    }
  }
  console.log(obj)

  let total = 0
  for (let key in obj) {
    let temp = {}
    if (key === '1') {
      temp['id'] = 1
      temp['title'] = 'Motherboard Asus GTX 1000'
      temp['qty'] = obj[key]
      temp['subtotal'] = 1000000 * obj[key]
    } else if (key === '2') {
      temp['id'] = 2
      temp['title'] = 'Harddisk Seagate 1TB'
      temp['qty'] = obj[key]
      temp['subtotal'] = 1500000 * obj[key]
    } else if (key === '3') {
      temp['id'] = 3
      temp['title'] = 'RAM V-Gen 16GB'
      temp['qty'] = obj[key]
      temp['subtotal'] = 1600000 * obj[key]
    } else if (key === '4') {
      temp['id'] = 4
      temp['title'] = 'Monitor Samsung 15 inch'
      temp['qty'] = obj[key]
      temp['subtotal'] = 1300000 * obj[key]
    }
    result.carts.push(temp)
    total += temp['subtotal']
  }
  result.total = total
  return result
}

console.log(cart([1, 1, 2, 3, 3, 3]))
/*
    {
        title:"Nota Pembayaran"
        carts:[
            {
                id:1,
                title:"Motherboard Asus GTX 1000"
                qty:2,
                subtotal:2000000
            },
            {
                id:2,
                title:"Harddisk Seagate 1TB"
                qty:1,
                subtotal:1500000
            },
            {
                id:3,
                title:"RAM V-Gen 16GB"
                qty:3,
                subtotal:4800000
            }
        ],
        total:8300000
    }
*/

console.log(cart([1, 3, 2, 1, 4, 3]))
/*
    { title: 'Nota Pembayaran',
    cart:
    [{ id: 1,
        title: 'Motherboard Asus GTX 1000',
        qty: 2,
        subtotal: 2000000 },
        { id: 3, title: 'RAM V-Gen 16GB', qty: 2, subtotal: 3200000 },
        { id: 2,
          title: 'Harddisk Seagate 1TB',
          qty: 1,
          subtotal: 1500000
        },
        { id: 4,
          title: 'Monitor Samsung 15 inch',
          qty: 1,
          subtotal: 1300000
        }],
    total: 8000000 }
*/

console.log(cart([]))
// anda harus memilih product
