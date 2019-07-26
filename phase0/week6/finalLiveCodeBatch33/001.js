// Final Live Coding Week 6 - Question 1
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

/*
=================
TUG OF WAR WINNER
=================
Name : Andreas Sosilo
[INSTRUCTIONS]
Tug of War adalah sebuah function yang menerima string sebagai tarik tambang antara 2 belah pihak
Kamu harus bisa menentukan pemenang dari permainan tarik tambang ini dengan cara mengukur kekuatan setiap pemain
Kekuatan pemain ada 3 Level
  - A = 1
  - B = 2
  - C = 3

Sisi dengan kekuatan terbanyak akan menang dan jika kekuatannya sama maka hasilnya akan draw

[CONSTRAINTS]
Tidak ada batasan untuk soal ini.

[EXAMPLE]
tugOfWar('ABCA--V--ABCC')
Skor team kiri: 7
Skor team kanan: 9
output: Team KANAN Menang!

[Tulis PSEUDOCODE di bawah ini]
// Nilai tidak valid (0) jika logic dan PSEUDOCODE berbeda!
// Tidak harus formal pseudocode, tapi paling tidak jelaskan step by step logikanya
*/

function tugOfWar (sentence) {
  // If input equals to tug only, return message
  if (sentence === '--V--') return `NO PLAYERS`
  // Create two variables for left and right team score
  let score = {
    teamA: 0,
    teamB: 0
  }
  let key = 'teamA'
  // Use for-loop to check both teams score
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === 'A') {
      score[key] += 1
    } else if (sentence[i] === 'B') {
      score[key] += 2
    } else if (sentence[i] === 'C') {
      score[key] += 3
    } else {
      key = 'teamB'
    }
  }
  // Check who is the winner
  if (score.teamA > score.teamB) {
    return `Team Kiri Menang!`
  } else if (score.teamA < score.teamB) {
    return `Team Kanan Menang!`
  } else {
    return `DRAW`
  }
}

// TEST CASES
console.log(tugOfWar('ABCA--V--ABCC')) // "Team KANAN Menang!"
console.log(tugOfWar('CC--V--AAAA')) // "Team Kiri Menang!"
console.log(tugOfWar('BBBB--V--CCC')) // "Team KANAN Menang!"
console.log(tugOfWar('AAAA--V--CA')) // 'DRAW'
console.log(tugOfWar('--V--')) // 'NO PLAYERS'
