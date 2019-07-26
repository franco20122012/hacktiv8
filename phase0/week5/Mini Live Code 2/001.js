/*
    =======================
    Salary Range Calculator
    =======================

    Buatlah sebuah program sederhana yang menghitung
    `salaryNett` dan `totalBPJS` yang didapatkan setiap karyawan sesuai dengan
    Golongan `brutoSalary` nya masing - masing.
    pengertian :
    - `brutoSalary` adalah gaji kotor
    - `salaryNett` adalah gaji bersih yang didapat karyawan dengan rumus
    salaryNett` = `brutoSalary` - (`brutoSalary` * `Tax`) - ( (`brutoSalary` - (`brutoSalary` * `Tax`)) * `BPJS` )
    - `totalBPJS` adalah total BPJS yang telah dibayarkan oleh karyawan
    pada bulan ke (`months`) tertentu. rumusnya :
    `totalBPJS` = ( (`brutoSalary` - (`brutoSalary` * `Tax`)) * `BPJS` ) * `months`

    [INSTRUCTION]
    Diketahui jika :
    `brutoSalary` => 9000000 keatas , maka : golongan I
    `brutoSalary` => 6000000 - 8999999,  maka : golongan II
    `brutoSalary` => 3000000 - 5999999, maka : golongan III
    `brutoSalary` => 1000000 - 2999999,  maka : golongan IV

    Golongan I
    diwajibkan membayar :
    - `Tax` 4% dari `brutoSalary`
    - `BPJS` 5% dari `brutoSalary` setelah dikurangi `Tax`

    Golongan II
    diwajibkan membayar :
    - `Tax` 3% dari `brutoSalary`
    - `BPJS` 4% dari `brutoSalary` setelah dikurangi `Tax`

    Golongan III
    diwajibkan membayar :
    - `Tax` 2% dari `brutoSalary`
    - BPJS 3% dari `brutoSalary` setelah dikurangi `Tax`

    Golongan IV
    diwajibkan membayar :
    - tidak dikenakan `Tax`
    - BPJS 2% dari `brutoSalary`

    Jika `brutoSalary` dibawah 1000000 maka outputnya
    "Gaji anda dibawah standard perusahaan"

    [EXAMPLE]
    diberikan input :
    brutoSalary = 5000000
    months = 3

    maka outputnya adalah :
    "netSalary = 4753000, totalBPJS yang telah dibayarkan = 441000"

    **WAJIB MENGGUNAKAN PSEUDOCODE**

    [YOUR PSEUDOCODE HERE]

*/

function salaryRangeCalculator (brutoSalary, months) {
  // Check for low salary condition
  if (brutoSalary < 1000000) return `Gaji anda dibawah standard perusahaan`
  // Create the main list for tax and BPJS
  let list = {
    I: {
      tax: 0.04,
      BPJS: 0.05
    },
    II: {
      tax: 0.03,
      BPJS: 0.04
    },
    III: {
      tax: 0.02,
      BPJS: 0.03
    },
    IV: {
      tax: 0,
      BPJS: 0.02
    }
  }
  // Check tax class according to bruto salary
  let taxClass = ''
  if (brutoSalary >= 9000000) {
    taxClass = 'I'
  } else if (brutoSalary >= 6000000) {
    taxClass = 'II'
  } else if (brutoSalary >= 3000000) {
    taxClass = 'III'
  } else if (brutoSalary >= 1000000) {
    taxClass = 'IV'
  }
  // Find nett salary
  let netSalary = brutoSalary - (brutoSalary * list[taxClass].tax) - ((brutoSalary - (brutoSalary * list[taxClass].tax)) * list[taxClass].BPJS)
  //   console.log(`brutoSalary : ${brutoSalary}`)
  //   console.log(`tax : ${brutoSalary * list[taxClass].tax}`)
  //   console.log(`BPJS : ${(brutoSalary - (brutoSalary * list[taxClass].tax)) * list[taxClass].BPJS}`)
  //   console.log(`tax class : ${taxClass}`)
  // Find paid BPJS according to months
  let paidBPJS = ((brutoSalary - (brutoSalary * list[taxClass].tax)) * list[taxClass].BPJS) * months
  // Return output
  return `netSalary = ${netSalary}, totalBPJS yang telah dibayarkan = ${paidBPJS}`
}

console.log(salaryRangeCalculator(5000000, 3))
// netSalary = 4753000, totalBPJS yang telah dibayarkan = 441000
