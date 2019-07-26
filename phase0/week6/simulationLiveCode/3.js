/*
  /////////////////////
  2ND WINNER GUILD WARS
  /////////////////////

  Function Guild Wars akan menentukkan juara ke-2 dalam bentuk string, dari peringkat 1 ke 4.
  Jumlah peserta selalu array dengan length 4.

  EXAMPLE
  INPUT: ['OOOO', 'ooOO', 'o', 'OOo']
  INFO:
  - O dihitung 2
  - o dihitung 1
  GUIDE:
  - Awal Sisi Kiri: (Tim 1 vs Tim 2) dan Sisi Kanan: (Tim 3 vs Tim 4)
  - Pemenang dari Sisi Kiri vs pemenang dari Sisi Kanan menghasilkan juara 1 dan 2
  - Yang kalah dari Sisi Kiri vs yang kalah dari Sisi Kanan menghasilkan juara 3 dan 4
  PROCESS:
  - Sisi Kiri => OOOO vs ooOO => OOOO (win), ooOO (lose)
  - Sisi Kanan => o vs OOo => o (lose), OOo (win)
  - Winner vs Winner => OOOO vs OOo => OOOO (1), OOo (2)
  - Loser vs Loser => ooOO vs o => ooOO(3), o (4)
  - Urutan pemenang [OOOO, OOo, ooOO, o]
  OUTPUT:
  Juara Ke-2 adalah tim OOo

  RULES:
  1. Jumlah yang bertanding selalu 4 tim
  2. Asumsi total kekuatan di setiap tim tidak ada yang sama
*/

function guildWars (guilds) {
  // Create array winner and loser for the 1st round
  let winners = []
  let losers = []
  // Check the winner of left arena
  winners.push(checkWinner(guilds[0], guilds[1]))
  // Check the loser of left arena
  losers.push(checkLoser(guilds[0], guilds[1]))
  // Check the winner of right arena
  winners.push(checkWinner(guilds[2], guilds[3]))
  // Check the loser of right arena
  losers.push(checkLoser(guilds[2], guilds[3]))

  // Check the 2nd position
  return `Juara ke-2 adalah tim ${checkLoser(winners[0], winners[1])}`
}

function checkScore (score) {
  // Check the score according to the info -> O: 2, o: 1
  let result = 0
  for (let i = 0; i < score.length; i++) {
    if (score[i] === 'O') {
      result += 2
    } else if (score[i] === 'o') {
      result += 1
    }
  }
  return result
}

function checkWinner (teamA, teamB) {
  return checkScore(teamA) > checkScore(teamB) ? teamA : teamB
}

function checkLoser (teamA, teamB) {
  return checkScore(teamA) < checkScore(teamB) ? teamA : teamB
}

console.log(guildWars(['OOOO', 'ooOO', 'o', 'OOo']))
// Juara ke-2 adalah tim OOo
console.log(guildWars(['OO', 'OOO', 'ooOOO', 'OOOo']))
// Juara ke-2 adalah tim OOO
console.log(guildWars(['ooo', 'oooo', 'oo', 'o']))
// Juara ke-2 adalah tim oo
