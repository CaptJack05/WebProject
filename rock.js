let body = document.body;
let container = document.getElementById("container");
let botBox = document.getElementById("bot");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let winbar = document.getElementById("win");
let botScore = document.getElementById("bot-score");
let pScore = document.getElementById("p-score");
let reBtn = document.getElementById("resetButton");
let userBox = document.getElementById("user-box");

let scoreP = 0;
let scoreBot = 0;

let botChoices = ['rock','paper','scissor'];
let botChoice = ()=>{
    let rchoice = botChoices[Math.floor(Math.random()*botChoices.length)];
    return rchoice;
    
}
const reset= () =>{
    scoreP = 0;
    scoreBot = 0;
    pScore.innerText= scoreP;
    botScore.innerText = scoreBot;
    winbar.innerText = "";
    botBox.innerText = "Bot";
    userBox.innerText = "You";
    botBox.style.backgroundImage = 'url("rock.png")';
    userBox.style.backgroundImage = 'url("rock.png")';

}

const win = (u,b) =>{
    if((u==='rock')&&(b==='paper')){
        winbar.innerText = "Bot wins";
        scoreBot +=1;
    }
    else if((u==='rock')&&(b==='scissor')){
        winbar.innerText = "You win";
        scoreP +=1;
    }
    else if((u==='paper')&&(b==='scissor')){
        winbar.innerText = "Bot Win";
        scoreBot +=1;

    }
    else if((u==='paper')&&(b==='rock')){
        winbar.innerText = "You Win";
        scoreP +=1;

    }
    else if((u==='scissor')&&(b==='rock')){
        winbar.innerText = "Bot Win";
        scoreBot +=1;

    }
    else if((u==='scissor')&&(b==='paper')){
        winbar.innerText = "you Win";
        scoreP +=1;

    }
    else{
        winbar.innerText = "Round Draw";
    }

}
const clicked = (event) =>{
    user = event.target ;
    let b = botChoice();
    if (b === 'rock') {
        botBox.style.backgroundImage = 'url("rock.png")';
    } else if (b === 'paper') {
        botBox.style.backgroundImage = 'url("paper.png")';
    } else if (b === 'scissor') {
        botBox.style.backgroundImage = 'url("scissor.png")';
    }
    botBox.innerText = b;
    let u = String(user.getAttribute('id'));
    userBox.innerText = u;
    if (u === 'rock') {
        userBox.style.backgroundImage = 'url("rock.png")';
    } else if (u === 'paper') {
        userBox.style.backgroundImage = 'url("paper.png")';
    } else if (u === 'scissor') {
        userBox.style.backgroundImage = 'url("scissor.png")';
    }
    win(u,b);
    pScore.innerText= scoreP;
    botScore.innerText = scoreBot;
}
rock.addEventListener('click',clicked);
paper.addEventListener('click',clicked);
scissor.addEventListener('click',clicked);
reBtn.addEventListener('click',reset);


