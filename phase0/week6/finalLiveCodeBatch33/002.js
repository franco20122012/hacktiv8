// Final Live Coding Week 6 - Question 2
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

/*
========
MARATHON
========

[INSTRUCTION]
Kamu mengikuti lomba marathon, dengan rute lintasan tertentu dan stamina tertentu;

[EXAMPLE]
input lintasan: 'XXXXXXOOO-XXOOXXXXXOO-XXXXO'

'X' adalah jalan datar yang akan mengkonsumsi 1 stamina dengan maskimal repetisi 'X' 4 kali  ('XXXX')
'O' adalah jalan menanjak yang akan mengkonsumsi 1 stamina dengan maksimal repetisi 'O' 2 kali ('OO')
'-' adalah spot minum meningkatkan 2 stamina

partisi track:   XXXX XX OO O -  X   X O   O X   X  X  X XOO-XXXXO
stamina      : 5    4  3  2 1 3      2     1           0 (ENERGI HABIS, TIDAK BISA MELANJUTKAN)
jarak lari   :   1234 56 78 9 10 11,12 13,14 15,16,17,18
input stamina: 5
output: Selamat anda telah menempuh jarak 18

[RULES]
- Dilarang menggunakan .split, .join, .map, .sort, .filter, .indexOf, .includes
- WAJIB menggunakan pseudocode

*/

function marathon (track, stamina) {
  // Check if there are no inputs, return message
  if (!track || !stamina) return `Wrong input!`
  // Create variables for running distance and repetition
  let distance = 0
  let repetition = 0
  let changeTrack = false
  // Use for-loop to check the score
  for (let i = 0; i < track.length; i++) {
    // Check repetition first
    if ()
    if (repetition < 1) {
      if (stamina > 0) {
        stamina--
        repetition = 4
      } else {
        return `Stamina habis`
      }
    }
    // Check the track
    if (track[i] === 'X' && changeTrack === true) {
      repetition -= 1
    } else if (track[i] === 'X' && changeTrack === false) {

    }
    else if (track[i] === 'O') {
      repetition -= 2
    } else if (track[i] === '-') {
      stamina += 2
    }
  }
  // Check who is the winner
  return `Selamat anda telah menem`
}

function checkRepetition(stamina, repetition) {
  return repetition
}

console.log(marathon('XXXXXXOOO-XXOOXXXXXOO-XXXXO', 5)) // Selamat anda telah menempuh jarak 18 km
console.log(marathon('XXXXXXOOOXXOOXXXXXOOXXXXO', 5)) // Selamat anda telah menempuh jarak 11 km
console.log(marathon('XXXXXXXX', 3)) // Selamat anda telah menempuh garis finish
