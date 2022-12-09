/*-------------------------------- Constants --------------------------------*/
winningCombos = [[sq0, sq1, sq2], [sq3, sq4, sq5], [sq6, sq7, sq8], [sq0, sq3, sq6],
                  [sq1, sq4, sq7], [sq2, sq5, sq8], [sq0, sq4, sq8], [sq2, sq4, sq6]]

/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner, tie



/*------------------------ Cached Element References ------------------------*/
//* Plan A
const squareEls = document.querySelectorAll(".sqr")
const messageEl = document.getElementById("message")



/*----------------------------- Event Listeners -----------------------------*/
document.addEventListener('DOMContentLoaded', init)
squareEls.forEach(function (el) {
  el.addEventListener('click', handleClick)
})

/*-------------------------------- Functions --------------------------------*/
function init(evt){
console.log("We loaded!");
board = [null, null, null, null, null, null, null, null, null]
turn = 1
winner = false
tie = false
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
      square.innerText = "null"
    }
    else if (board[idx] === 1){
      square.innerText = "1"
    }
    else if (board[idx] === -1){
      square.innerText = "-1"
    }
    })
};
function updateMessage(){
  if (winner === false && tie === false){
    messageEl.innerText = `It is player ${turn}'s turn`
  } else if (winner === false && tie === true){
    messageEl.innerText = "It's a tie!"
  } else {
    messageEl.innerText = `Congrats player whatever!`
  }
}
function handleClick(evt){
  const sqIdx = evt.target;
  if (sqIdx.innerText === "1" || sqIdx.innerText === "-1"){
    return
  }
  if (winner === true){
    return
  } 
}
function placePiece(idx){
  board[idx] = turn
}
function checkForTie(){
  if (board.includes("null")){
    tie = false
  } else {
    tie = true
  }
}
