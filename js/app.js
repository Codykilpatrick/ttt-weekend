/*-------------------------------- Constants --------------------------------*/
winningCombos = [['0', '1', '2'], ['3', '4', '5'], ['6', '7', '8'], ['0', '3', '6'],
                  ['1', '4', '7'], ['2', '5', '8'], ['0', '4', '8'], ['2', '4', '6',]]


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
  console.log(playerOneScore);
  for (let i = 0; i < winningCombos.length; i++){
    if (playerOneScore.toString() === winningCombos[i].toString()){
      winner = true
    } else if (playerTwoScore.toString() === winningCombos[i].toString()){
      winner = true
    }
  }
  //If player one wins on their 4th turn with the third move being obsolete
  if (playerOneScore.length == 4 ){
    playerOneScoreSlicedPartOne = playerOneScore.slice(0, 2)
    playerOneScoreSlicedPartTwo = playerOneScore.slice(3, 4)
    playerOneScoreFinal = playerOneScoreSlicedPartOne.concat(playerOneScoreSlicedPartTwo)
    for (let i = 0; i < winningCombos.length; i++){
      if (playerOneScoreFinal.toString() === winningCombos[i].toString()){
        winner = true
      } 
    }}
    //If player two wins on their 4th turn with the third move being obsolete
  if (playerTwoScore.length == 4 ){
    playerTwoScoreSlicedPartOne = playerTwoScore.slice(0, 2)
    playerTwoScoreSlicedPartTwo = playerTwoScore.slice(3, 4)
    playerTwoScoreFinal = playerTwoScoreSlicedPartOne.concat(playerTwoScoreSlicedPartTwo)
    for (let i = 0; i < winningCombos.length; i++){
      if (playerTwoScoreFinal.toString() === winningCombos[i].toString()){
        winner = true
      }
    }
  }
  //If player one wins on their 4th turn with the first move being obselete
  if (playerOneScore.length == 4 ){
    playerOneScoreFinal = playerOneScore.slice(1, 4)
    playerOneScoreFinal.sort()
    for (let i = 0; i < winningCombos.length; i++){
      if (playerOneScoreFinal.toString() === winningCombos[i].toString()){
        winner = true
      } 
    }}
    //If Player two wins on their 4th turn with their fist move being obselete
  if (playerTwoScore.length == 4 ){
    playerTwoScoreFinal = playerTwoScore.slice(1, 4)
    playerTwoScoreFinal.sort()
    for (let i = 0; i < winningCombos.length; i++){
      if (playerTwoScoreFinal.toString() === winningCombos[i].toString()){
        winner = true
      } 
    }}
  //If player one wins on the 5th turn with their first move being obselete
  if (playerOneScore.length == 5 ){
    playerOneScoreSlicedPartOne = playerOneScore.slice(1, 3)
    playerOneScoreSlicedPartTwo = playerOneScore.slice(4, 5)
    playerOneScoreFinal = playerOneScoreSlicedPartOne.concat(playerOneScoreSlicedPartTwo)
    for (let i = 0; i < winningCombos.length; i++){
      if (playerOneScoreFinal.toString() === winningCombos[i].toString()){
        winner = true
      } 
    }}
  //If player one wins on the 5th turn and their 2nd and 4th moves are obselete
  if (playerOneScore.length == 5 ){
    playerOneScoreSlicedPartOne = playerOneScore.slice(0, 1)
    playerOneScoreSlicedPartTwo = playerOneScore.slice(2, 3)
    playeroneScoreSlicedPartThree = playerOneScore.slice(-1)
    playerOneScoreFinal = playerOneScoreSlicedPartOne.concat(playerOneScoreSlicedPartTwo).concat(playeroneScoreSlicedPartThree)
    playerOneScoreFinal.sort()
    for (let i = 0; i < winningCombos.length; i++){
      if (playerOneScoreFinal.toString() === winningCombos[i].toString()){
        winner = true
      } 
    }}
  // if player one wins on the 5th turn and their 3rd and 4th turns are obselete
  if (playerOneScore.length == 5 ){
    playerOneScoreSlicedPartOne = playerOneScore.slice(0, 2)
    playerOneScoreSlicedPartTwo = playerOneScore.slice(-1)
    playerOneScoreFinal = playerOneScoreSlicedPartOne.concat(playerOneScoreSlicedPartTwo)
    playerOneScoreFinal.sort()
    for (let i = 0; i < winningCombos.length; i++){
      if (playerOneScoreFinal.toString() === winningCombos[i].toString()){
        winner = true
      } 
    }}
}
function switchPlayerTurn(){
  if (winner === true){
    return
  } else {
    turn = turn * -1
  }
}
