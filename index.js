const playertext=document.querySelector("#playertext");
const computertext=document.querySelector("#computertext");
const resulttext=document.querySelector("#resulttext");
const choice=document.querySelectorAll(".btn");
let player;
let computer;
let result;
choice.forEach(button=> button.addEventListener("click",()=>{
    player=button.textContent;
    computerturn();
    playertext.textContent=`Player: ${player}`;
    computertext.textContent=`Computer:${computer}`;
    resulttext.textContent=checkwinner();
}))
function computerturn(){
    const random=Math.floor(Math.random()*3)+1;
    switch(random){
        case 1:
            computer="ROCK";
            break;
        case 2:
            computer="PAPER";
            break;
        case 3:
            computer="SCISSORS";
            break;
    }
}
function checkwinner(){
    if(player===computer){
        return "Draw!!!";
    }
    else if(computer==="ROCK"){
        return (player=="PAPER")? "YOU WIN":"YOU LOSE";
    }
    else if(computer==="PAPER"){
        return (player=="SCISSORS")? "YOU WIN":"YOU LOSE";
    }
    else if(computer==="SCISSORS"){
        return (player=="STONE")? "YOU WIN":"YOU LOSE";
    }
}