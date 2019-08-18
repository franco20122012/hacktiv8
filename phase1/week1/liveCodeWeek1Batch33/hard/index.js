
function generateBoard(num) {
  let board = [
    ['*', '*', '*', '*'],
    ['*', '*', '*', '*'],
    ['*', '*', '*', '*'],
    ['*', '*', '*', '*']
  ]
  // console.log('...',board)
  return board
}
// let board = generateBoard(4)
// console.log(generateCoordinate(board))

function generateCoordinate(staticPos, size) {
  let cheatBoard = generateBoard(size)
  for (let i = 0; i < cheatBoard.length; i++) {
    for (let j = 0; j < cheatBoard[i].length; j++) {
      for (let k in staticPos) {
        if (i == staticPos[k].pos[0] && j == staticPos[k].pos[1]) {
          cheatBoard[i][j] = staticPos[k].chara
        }
      }
    }
  }
  return cheatBoard
}

function generateAnswer(tebakan) {
  let tebakPerHuruf = []
  let toArr = []
  let count = 0
  if (tebakan.length % 2 !== 0) {
    return `Tebakan kurang 1`
  } else {
    for (let j = 0; j < tebakan.length; j++) {
      let splitTebakan = tebakan[j].split(',')
      toArr.push(splitTebakan)
    }
    for (let i = 0; i < toArr.length / 2; i++) {
      tebakPerHuruf.push([])
    }
    let i = 0
    for (let j = 0; j < toArr.length; j++) {
      if (count < 2) {
        tebakPerHuruf[i].push(toArr[j])
        count++
      }
      else {
        tebakPerHuruf[i + 1].push(toArr[j])
        count -= 1
        i++
      }
    }
  }
  // console.log(tebakPerHuruf)
  return tebakPerHuruf
}

function tebakHuruf(pos, arrString) {
  let count = 0
  let answers = generateAnswer(arrString)
  let mainBoard = generateBoard(4)
  let game = generateBoard(4)

  let randomPos = ''
  let cheatBoard = generateCoordinate(pos, 4)
  console.log(answers)
  console.log(mainBoard)
  console.log(cheatBoard)

  for (let k = 0; k < answers.length; k++) {
    if (cheatBoard[answers[k][0][0]][answers[k][0][1]] !== '*') {
      let hurufPertama = cheatBoard[answers[k][0][0]][answers[k][0][1]]
      game[answers[k][0][0]][answers[k][0][1]] = hurufPertama
      console.log(game)
      if (cheatBoard[answers[k][1][0]][answers[k][1][1]] == hurufPertama){
      game[answers[k][1][0]][answers[k][1][1]] = hurufPertama
      console.log(game)
        count++
      }else {
        game[answers[k][1][0]][answers[k][1][1]] = ' '
        console.log(game)
        game[answers[k][1][0]][answers[k][1][1]] = '*'
        game[answers[k][0][0]][answers[k][0][1]] = '*'
        console.log(game)
      }
    }
    else {
      game[answers[k][0][0]][answers[k][0][1]] = ' '
      console.log(game)
      if (cheatBoard[answers[k][1][0]][answers[k][1][1]] !== '*'){
        let huruf = cheatBoard[answers[k][1][0]][answers[k][1][1]]
        game[answers[k][1][0]][answers[k][1][1]] = huruf
        console.log(game)
        game[answers[k][1][0]][answers[k][1][1]] = '*'
      }
      console.log(game)
    }
  }
  // console.log(mainBoard)
  console.log(count)
  // console.log(cheatBoard[0][1])
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

const dummyBoard = [
  { chara: 'A', pos: [0, 0] },
  { chara: 'A', pos: [3, 2] },
  { chara: 'B', pos: [0, 1] },
  { chara: 'B', pos: [0, 3] },
  { chara: 'C', pos: [2, 2] },
  { chara: 'C', pos: [0, 2] },
  { chara: 'D', pos: [2, 3] },
  { chara: 'D', pos: [3, 0] }
] //dummyBoard is just for testing purpose only

tebakHuruf(dummyBoard, ['3,0', '2,3', '3,3', '2,1', '0,1', '1,1'])


