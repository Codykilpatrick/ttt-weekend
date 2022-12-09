/*-------------------------------- Constants --------------------------------*/
winningCombos = [['0', '1', '2'], ['3', '4', '5'], ['6', '7', '8'], ['0', '3', '6'],
                  ['1', '4', '7'], ['2', '5', '8'], ['0', '4', '8'], ['2', '4', '6']]


/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner, tie, player, playerOneScore, playerTwoScore


/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll(".sqr")
const messageEl = document.getElementById("message")
const resetBtnEl = document.querySelector("button")



/*----------------------------- Event Listeners -----------------------------*/
document.addEventListener('DOMContentLoaded', init)
squareEls.forEach(function (el) {
  el.addEventListener('click', handleClick)
})
resetBtnEl.addEventListener('click', init)

/*-------------------------------- Functions --------------------------------*/
function init(evt){
board = [null, null, null, 
        null, null, null, 
        null, null, null]
turn = 1
winner = false
tie = false
player = ""
playerOneScore = []
playerTwoScore = []
render()
}
function render(evt){
  updateBoard()
  updateMessage()
}
function updateBoard(){
  board.forEach(function(value, idx) {
    square = squareEls[idx]
    if (board[idx] === null){
      square.innerText = " "
    }
    else if (board[idx] === 1){
      square.innerText = "X"
    }
    else if (board[idx] === -1){
      square.innerText = "O"
    }
    })
};
function updateMessage(){
  if (turn === 1){
    player = "X"
  } else {
    player = "O"
  }
  if (winner === false && tie === false){
    messageEl.innerText = `It is player ${player}'s turn`
  } else if (winner === false && tie === true){
    messageEl.innerText = "It's a tie!"
  } else {
    messageEl.innerText = `Congrats player ${player}!`
  }
}
function handleClick(evt){
  const sqIdx = evt.target.id[2];
  sq = evt.target
  if (sq.innerText === "X" || sq.innerText === "O"){
    return
  }
  if (winner === true){
    return
  }
  placePiece(sqIdx)
  checkForTie()
  checkForWinner(sqIdx)
  switchPlayerTurn()
  render()
}
function placePiece(idx){
  board[idx] = turn
}
function checkForTie(){
  if (board.includes(null)){
    tie = false
  } else {
    tie = true
  }
}
// function checkForWinner(){
//   if (board[0] === 1 && board[1] === 1 && board[2] === 1){
//     winner = true
//   }if (board[0] === -1 && board[1] === -1 && board[2] === -1){
//     winner = true
//   }if (board[3] === 1 && board[4] === 1 && board[5] === 1){
//     winner = true
//   }if (board[3] === -1 && board[4] === -1 && board[5] === -1){
//     winner = true
//   }if (board[6] === 1 && board[7] === 1 && board[8] === 1){
//     winner = true
//   }if (board[6] === -1 && board[7] === -1 && board[8] === -1){
//     winner = true
//   }if (board[0] === 1 && board[3] === 1 && board[6] === 1){
//     winner = true
//   }if (board[0] === -1 && board[3] === -1 && board[6] === -1){
//     winner = true
//   }if (board[1] === 1 && board[4] === 1 && board[7] === 1){
//     winner = true
//   }if (board[1] === -1 && board[4] === -1 && board[7] === -1){
//     winner = true
//   }if (board[2] === 1 && board[5] === 1 && board[8] === 1){
//     winner = true
//   }if (board[2] === -1 && board[5] === -1 && board[8] === -1){
//     winner = true
//   }if (board[0] === 1 && board[4] === 1 && board[8] === 1){
//     winner = true
//   }if (board[0] === -1 && board[4] === -1 && board[8] === -1){
//     winner = true
//   }if (board[2] === 1 && board[4] === 1 && board[6] === 1){
//     winner = true
//   }if (board[2] === -1 && board[4] === -1 && board[6] === -1){
//     winner = true
//   }
// }

function checkForWinner(sqIdx){
  if (turn === 1){
    playerOneScore.push(sqIdx)
  } else {
    playerTwoScore.push(sqIdx)
  }
  for (let i = 0; i < winningCombos.length; i++){
    if (playerOneScore.toString() === winningCombos[i].toString()){
      winner = true
    } else if (playerTwoScore.toString() === winningCombos[i].toString()){
      winner = true
    }
  }
}
function switchPlayerTurn(){
  if (winner === true){
    return
  } else {
    turn = turn * -1
  }
}
