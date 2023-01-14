// get computerchoice and userchoice via prompt

let promptInput = prompt("Chose your weapon ");
let playerSelection = promptInput.toLowerCase();

const weapons = ["rock","paper","scissors"];

let computerSelection = weapons[Math.floor(Math.random()*weapons.length)];
console.log(computerSelection);

// playround() the rule of paper beats rock and so on

function playround(playerSelection, computerSelection){
    let result;

    if(playerSelection === "rock" && computerSelection === "paper" ){
        result = "Lose";
    }else if (playerSelection === "rock" && computerSelection === "scissors" ){
        result = "Win"
    }else if(playerSelection === "paper" && computerSelection === "rock" ){
        result = "Win";
    }else if (playerSelection === "paper" && computerSelection === "scissors" ){
        result = "Lose"
    }else if (playerSelection === "scissors" && computerSelection === "rock" ){
        result = "Lose";
    }else if (playerSelection === "scissors" && computerSelection === "paper" ){
        result = "Win";
    }else if (playerSelection === computerSelection ){
        result = "tie";
    }

return result;

}


console.log(playround(playerSelection,computerSelection));
console.log("player : "+playerSelection);
console.log("computer : "+computerSelection);
// game() takes playround()  using for loop