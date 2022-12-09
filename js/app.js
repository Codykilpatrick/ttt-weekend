/*-------------------------------- Constants --------------------------------*/
winningCombos = [[sq0, sq1, sq2], [sq3, sq4, sq5], [sq6, sq7, sq8], [sq0, sq3, sq6],
                  [sq1, sq4, sq7], [sq2, sq5, sq8], [sq0, sq4, sq8], [sq2, sq4, sq6]]

/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner, tie, player



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
board = [null, null, null, null, null, null, null, null, null]
turn = 1
winner = false
tie = false
player = ""
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
  checkForWinner()
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
function checkForWinner(){
  if (board[0] === 1 && board[1] === 1 && board[2] === 1){
    winner = true
  }if (board[0] === -1 && board[1] === -1 && board[2] === -1){
    winner = true
  }if (board[3] === 1 && board[4] === 1 && board[5] === 1){
    winner = true
  }if (board[3] === -1 && board[4] === -1 && board[5] === -1){
    winner = true
  }if (board[6] === 1 && board[7] === 1 && board[8] === 1){
    winner = true
  }if (board[6] === -1 && board[7] === -1 && board[8] === -1){
    winner = true
  }if (board[0] === 1 && board[3] === 1 && board[6] === 1){
    winner = true
  }if (board[0] === -1 && board[3] === -1 && board[6] === -1){
    winner = true
  }if (board[1] === 1 && board[4] === 1 && board[7] === 1){
    winner = true
  }if (board[1] === -1 && board[4] === -1 && board[7] === -1){
    winner = true
  }if (board[2] === 1 && board[5] === 1 && board[8] === 1){
    winner = true
  }if (board[2] === -1 && board[5] === -1 && board[8] === -1){
    winner = true
  }if (board[0] === 1 && board[4] === 1 && board[8] === 1){
    winner = true
  }if (board[0] === -1 && board[4] === -1 && board[8] === -1){
    winner = true
  }if (board[2] === 1 && board[4] === 1 && board[6] === 1){
    winner = true
  }if (board[2] === -1 && board[4] === -1 && board[6] === -1){
    winner = true
  }
}
function switchPlayerTurn(){
  if (winner === true){
    return
  } else {
    turn = turn * -1
  }
}
