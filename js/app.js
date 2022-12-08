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
function init(){
console.log("We loaded!");
board =[null, null, null, null, null, null, null, null, null]
turn = 1
winner = false
tie = false
render()
}
