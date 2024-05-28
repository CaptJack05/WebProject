let currMode = "light";

let modeBtn = document.getElementById("bgMode");
modeBtn.addEventListener("click",()=>{
    if(currMode==="light"){
        document.body.style.backgroundColor = "grey";
        currMode = "dark";
        modeBtn.innerText = "Light Mode";
    }
    else{
        document.body.style.backgroundColor = "white";
        currMode = "light";
        modeBtn.innerText = "Dark Mode"
    }
})

let pstat = document.getElementsByClassName("playerStaus");
let turnX = document.getElementById("turnX");
let turnO = document.getElementById("turnO");
turnX.style.backgroundColor = "rgb(224, 37, 37)";
turnO.style.backgroundColor = "white";

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let cells = document.querySelectorAll(".cell");
let reBtn = document.getElementById("resetButton");
let winTrack = document.getElementById("winTrack");
let turn = "X"
let choices = ['', '', '', '', '', '', '', '', ''];

changeTurn = ()=>{
    turn = (turn === "X") ? "O" : "X";

}
function updateTurnIndicator() {
    if (turn === 'X') {
        turnX.style.backgroundColor = "rgb(224, 37, 37)";
        turnO.style.backgroundColor = "white";
    } else {
        turnO.style.backgroundColor = "rgb(224, 37, 37)";
        turnX.style.backgroundColor = "white";


    }
}
checkWinner = () =>{
    for (let pattern of winPattern) {
        let [a, b, c] = pattern;
        let el1 = choices[a];
        let el2 = choices[b];
        let el3 = choices[c];

        if(el1 != "" && el1 === el2 && el2 === el3){
            console.log("winner");
            winTrack.innerText = (turn + " won");
            winTrack.style.backgroundColor = "Green";
            winTrack.style.borderRadius = "20px";

        }

    }
}

clicked= (event) =>{
    const cCell = event.target ;
    const cIndex = cCell.getAttribute("id");
    if(choices[cIndex]===''){
        choices[cIndex]=turn;
        cCell.innerText = turn;
        checkWinner();
        changeTurn();
        updateTurnIndicator();

    }
    
}


cells.forEach(cell => {
    cell.addEventListener("click",clicked);
    
});
function resetGame() {
    turn = "X";
    choices = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => cell.textContent = '');
    winTrack.innerText = "";
    turnX.style.backgroundColor = "red";
    turnO.style.backgroundColor = "white";



}
reBtn.addEventListener("click", resetGame);


