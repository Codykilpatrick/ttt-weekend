/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner, tie



/*------------------------ Cached Element References ------------------------*/
//* Plan A
const squareEls = document.querySelector(".board")
const messageEl = document.getElementById("message")



/*----------------------------- Event Listeners -----------------------------*/
document.addEventListener('DOMContentLoaded', init)


/*-------------------------------- Functions --------------------------------*/
function init(evt){
console.log("We loaded!");
board = [null, null, null, null, null, null, null, null, null]
turn = 1
winner = false
tie = false
render()
}
function render(){
  updateBoard()
  updateMessage()
}
function updateBoard(){
  board.forEach(function(value, idx) {
    square = squareEls.children[idx]
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
