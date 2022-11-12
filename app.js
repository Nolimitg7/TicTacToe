let playerSpan = document.getElementById("player");
let counter = 0;
function playerSwitch() {
  if (playerSpan.innerText === "X") playerSpan.innerText = "O";
  else playerSpan.innerText = "X";
}
let board = document.getElementById("board");

function changeTurn(event) {
  // if (event.target.localName === 'div' && !event.target.innerText)
  // {
  //     event.target.innerText = playerSpan.innerText
  // }
}

//var board;
let player1 = "X";
let player2 = "O";
let currentPlayer = player1;
let gameOver = false;
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

function beginGame() {
  board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];
}

//Game Board//
let boxes = document.querySelectorAll(".box");
boxes.forEach((square) => square.addEventListener("click", squareClick));

function squareClick(event) {
  let cell = event.target;
  counter++;
  if (counter % 2 === 0) {
    cell.innerText = "X";
  }
  if (counter % 2 === 1) {
    cell.innerText = "O";
  }
}
// for(let i = 0;i < boxes.length;i++){
//     let div = boxes[i]
//     div.addEventListener('click',function(event){
// event.target.innerText = currentPlayer
// //if (event.target.innerText === currentPlayer)

//     })
// }

//Alternating Players//

//Game Reset//
let button = document.querySelector("button");

button.addEventListener("click", function (reload) {
  reload.type.reload = button;
  console.log(reload);
});
