function matchExpectations(user, targetUser) {
  let count = 0
  let totalExpectation = user.expectation.length
  for (let i in user.expectation) {
    for (let j in targetUser.traits) {
      if (user.expectation[i] === targetUser.traits[j]) {
        count++
      }
    }
  }
  let persentase = Math.trunc(count / totalExpectation * 100)
  return persentase
}

function tinderApps(people) {
  let obj = {}
  for (let i = 0; i < people.length; i++) {
    obj[people[i].name] = []
    for (let j = 0; j < people.length; j++) {
      if (people[i].gender !== people[j].gender) {
        for (let m in people[i].expectation) {
          for (let n in people[j].traits) {
            if (people[i].expectation[m] === people[j].traits[n]) {
              for (let x in people[j].expectation) {
                for (let y in people[i].traits) {
                  if (people[j].expectation[x] === people[i].traits[y]) {
                    if (people[j] !== people[i]){
                    let checkMatch = matchExpectations(people[i], people[j])
                    obj[people[i].name].push([people[j].name, checkMatch])
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  let result = {}
  for (let key in obj) {
    result[key] = {}
    if (obj[key].length == 0) {
      result[key].status = 'Belum dapat match'
    }
    else {
      let temp = []
      for (let i in obj[key]) {
        if (obj[key] !== [obj[key][i][0]]) {
          result[key][obj[key][i][0]] = `Expectation Match ${obj[key][i][1]}%` 
        }
      }
      for (let k in result[key]){
        temp.push(k)
      }
      result[key].status = `Match dengan ${temp.join(', ')}`
    }
  }
  return result
}

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



console.log(tinderApps([
  { name: 'Giant', gender: 'Men', traits: ['Kaya', 'Tampan'], expectation: ['Pintar', 'Kuat']},
  { name: 'Shizuka', gender: 'Women', traits: ['Cantik', 'Pintar', 'Imut'], expectation: ['Sederhana', 'Jujur'] },
  { name: 'Nobita', gender: 'Men', traits: ['Pintar', 'Jujur'], expectation: ['Pintar', 'Imut', 'Rajin'] },
  { name: 'Doremi', gender: 'Women', traits: ['Cantik', 'Pintar'], expectation: ['Pintar', 'Jujur', 'Kaya', 'Tampan'] },
  { name: 'Sakura', gender: 'Women', traits: ['Kuat', 'Sederhana'], expectation: ['Jujur', 'Tampan'] }
]))

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
