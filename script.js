let ticTac = document.querySelector(".ticTac");
let boxes  = document.querySelectorAll('.box')
let heading = document.querySelector('.heading')
let restartBtn = document.querySelector('#restartBtn');


let currentPlayer = "X";
let count  = 0;

let winningCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function startGame(e) {
  if (e.target.className !== "ticTac") {
    if (e.target.innerText === "") {
      e.target.innerText = currentPlayer;
      count++;
      winner();
      currentPlayer === "X" ? (currentPlayer = "O") : (currentPlayer = "X");
    }
    if(count === 9){
       heading.innerText = `Match Draw`
      console.log('match Draw')
    }
  }
}

ticTac.addEventListener("click", startGame );

function winner(){
    winningCondition.forEach((item)=>{
        let index0 = item[0]
        let index1 = item[1]
        let index2 = item[2]
        // console.log(index0,index1,index2)
        let val0 = boxes[index0].innerText
        let val1 = boxes[index1].innerText
        let val2 = boxes[index2].innerText
        // console.log(index0,val0,index1,val1,index2,val2)
        if(val0 !== '' && val1 !== '' && val2 !== ''){
          if(val0 === val1 && val1 === val2){
            console.log('winner is :' , val0)
            boxes[index0].classList.add('winnerClass')
            boxes[index1].classList.add('winnerClass')
            boxes[index2].classList.add('winnerClass')
            count= 0;
            heading.innerText = `winner is ${val0}`
            ticTac.removeEventListener('click',startGame)
          }
        }

    })
}

restartBtn.addEventListener('click',() =>{
  currentPlayer = 'X'
  heading.innerText = 'Tic Tac Toe'
  boxes.forEach((item)=>{
    item.innerText  = ''
    item.classList.remove('winnerClass')
    item.classList.remove('winnerClass')
    item.classList.remove('winnerClass')
    ticTac.addEventListener("click", startGame );
  })
})