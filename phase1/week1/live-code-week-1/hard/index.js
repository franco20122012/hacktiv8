'use strict'
// Hard - Live Code Phase 1 Week 1
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

function pirateFindTreasure(str) {
  // Create the map according to the input string
  let map = generateMap(str)

  // Get multidimensional array coordinate for P, T, H from the map
  // Filled with Pirates,Treasure, Harbour, Distance position [[P], [T], [H], [D]]
  let position = saveCoordinate(map)
  console.log(map)

  // Check how many treasures are there in the map
  let treasuresCount = position[1].length
  console.log(`Treasures: ${treasuresCount}`)

  // Do while loop until all pirates get all treasures and go back to harbour
  while (treasuresCount !== 0) {
    // console.log(`TreasuresCount: ${treasuresCount}`)
    // console.log(`Pirates Position: ${position[0]}`)
    // console.log(`Distance: ${position[3]}`)
    // Go to the nearest treasure
    position = findTreasure(position)
    treasuresCount--
  }

  // Go back to harbour
  // position = backToHarbour(position)
  console.log(`Pirates Position: ${position[0]}`)
  console.log(`Distance: ${position[3]}`)
  return position
}

function backToHarbour(position) {

}

function findTreasure(position) {
  let nearest = findNearest(position)
  position[0] = nearest[0]
  for (let i = 0; i < position[1].length; i++) {
    if (position[1][i] === nearest[0]) {
      position[1][i].splice(i, 1)
    }
  }
  position[3] += nearest[1]
  return position
}

function findNearest(position) {
  // [[coordinate], distance]
  let result = []
  let nearestDist = Number.MAX_SAFE_INTEGER
  let nearestCoordinate
  for (let i = 0; i < position[1].length; i++) {
    let treasure = position[1][i]
    let ship = position[0]

    let distance = Math.abs(ship[0] - treasure[0]) + Math.abs(ship[1] - treasure[1])
    if (distance < nearestDist) {
      nearestCoordinate = position[1][i]
      nearestDist = distance
    }
  }
  result.push(nearestCoordinate, nearestDist)
  return result
}

function generateMap(str) {
  // Create empty map
  let arr = []
  Array(4).fill('').forEach(e => { arr.push(Array(4).fill('*')) })
  // Fill the map with string
  let counterIndex = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = str[counterIndex]
      counterIndex++
    }
  }
  return arr
}

function saveCoordinate(map) {
  // Filled with Pirates,Treasure, Harbour position [[P], [T], [H], [D]]
  const result = [[], [], [], []]
  // Save coordinate
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === 'P') {
        result[0].push(i, j)
      } else if (map[i][j] === 'T') {
        result[1].push([i, j])
      } if (map[i][j] === 'H') {
        result[2].push(i, j)
      }
    }
  }
  return result
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function clearScreen() {
  // Un-comment this line if you have trouble with console.clear();
  // return process.stdout.write('\033c');
  console.clear();
}
console.log(`Map 1\n ===== `);
console.log(pirateFindTreasure("OOOOOOTTOPHOOTOO")) // 7 kotak
// console.log(`Map 2\n ===== `);
// console.log(pirateFindTreasure("TOOOOPOHOTOTOTOO")) // 14 kotak
