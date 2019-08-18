function matchExpectations (user, targetUser) {

}

function tinderApps (people) {
  let arrMen = []
  let arrWo = []
  for (let i = 0; i < people.length; i++) {
    if (people[i].gender === 'Men') {
      arrMen.push(people[i])
    } else if (people[i].gender === 'Women') {
      arrWo.push(people[i])
    }
  }
  let count = 0
  let arr = []

  for (let i = 0; i < arrMen.length; i++) {
    for (let j = 0; j < arrWo.length; j++) {
      for (let k in arrMen[i].expectation) {
        for (let l in arrWo[i].traits) {
          if (arrMen[i].expectation[k] === arrWo[j].traits[l]) {
            if (arrWo[j].expectation[k] === arrMen[i].traits[l]) {
              arr.push([arrMen[i], arrWo[j]])
            }
          }
        }
      }
    }
  }

  // for (let i=0 ; i<arrWo.length ; i++){
  //   for (let k in arrWo[i].expectation){
  //     for (let l in arrMen[i].traits){
  //       if (arrWo[i].expectation[k]===arrMen[i].traits[l]){
  //         if (arrMen[i].expectation[k]===arrWo[i].traits[l]){
  //           arr.push(arrWo[i])
  //         }
  //       }

  //     }
  //   }
  // }

  console.log(arr)
  // console.log('>>>',arrMen);
  // console.log('<<<',arrWo);
}

// console.log(tinderApps([
//   { name: 'Andre', gender: 'Men', traits: ['Dewasa', 'Tampan'], expectation: ['Cantik', 'Jujur', 'Kaya']},
//   { name: 'Marsya', gender: 'Women', traits: ['Cantik', 'Kaya'], expectation: ['Kaya', 'Olahragawan'] },
//   { name: 'Dimas', gender: 'Men', traits: ['Pintar', 'Kaya'], expectation: ['Cantik', 'Pintar'] },
//   { name: 'Bella', gender: 'Women', traits: ['Cantik', 'Pintar'], expectation: ['Pintar', 'Jujur'] }
// ]))
console.log(tinderApps([
  { name: 'Andre', gender: 'Men', traits: ['Dewasa', 'Tampan'], expectation: ['Cantik', 'Jujur', 'Kaya'] },
  { name: 'Marsya', gender: 'Women', traits: ['Cantik', 'Kaya'], expectation: ['Kaya', 'Olahragawan'] },
  { name: 'Dimas', gender: 'Men', traits: ['Pintar', 'Kaya'], expectation: ['Cantik', 'Pintar'] },
  { name: 'Bella', gender: 'Women', traits: ['Cantik', 'Pintar'], expectation: ['Pintar', 'Jujur'] },
  { name: 'Derpina', gender: 'Women', traits: ['Cantik', 'Sederhana', 'Rajin'], expectation: ['Pintar', 'Jujur', 'Baik'] }
]))
/*
  {
    Andre: { status: 'Belum dapat match' },
    Marsya: { Dimas: 'Expectation Match 50%', status: 'Match dengan Dimas' },
    Dimas: {
      Marsya: 'Expectation Match 50%',
      Bella: 'Expectation Match 100%',
      Derpina: 'Expectation Match 50%',
      status: 'Match dengan Marsya, Bella, Derpina'
    },
    Bella: { Dimas: 'Expectation Match 50%', status: 'Match dengan Dimas' },
    Derpina: { Dimas: 'Expectation Match 33%', status: 'Match dengan Dimas' }
  }
*/

// console.log(tinderApps([
//   { name: 'Giant', gender: 'Men', traits: ['Kaya', 'Tampan'], expectation: ['Pintar', 'Kuat']},
//   { name: 'Shizuka', gender: 'Women', traits: ['Cantik', 'Pintar', 'Imut'], expectation: ['Sederhana', 'Jujur'] },
//   { name: 'Nobita', gender: 'Men', traits: ['Pintar', 'Jujur'], expectation: ['Pintar', 'Imut', 'Rajin'] },
//   { name: 'Doremi', gender: 'Women', traits: ['Cantik', 'Pintar'], expectation: ['Pintar', 'Jujur', 'Kaya', 'Tampan'] },
//   { name: 'Sakura', gender: 'Women', traits: ['Kuat', 'Sederhana'], expectation: ['Jujur', 'Tampan'] }
// ]))

/*
  {
  Giant:
   { Doremi: 'Expectation Match 50%',
     Sakura: 'Expectation Match 50%',
     status: 'Match dengan Doremi, Sakura' },
  Shizuka:
   { Nobita: 'Expectation Match 50%',
     status: 'Match dengan Nobita' },
  Nobita:
   { Shizuka: 'Expectation Match 67%',
     Doremi: 'Expectation Match 33%',
     status: 'Match dengan Shizuka, Doremi' },
  Doremi:
   { Giant: 'Expectation Match 50%',
     Nobita: 'Expectation Match 50%',
     status: 'Match dengan Giant, Nobita' },
  Sakura: { Giant: 'Expectation Match 50%', status: 'Match dengan Giant' }
  }
*/
