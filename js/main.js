
let promptInput = prompt("Chose your weapon ");  // takes the user choice
let playerSelection = promptInput.toLowerCase();

const weapons = ["rock","paper","scissors"];

let computerSelection = weapons[Math.floor(Math.random()*weapons.length)]; // takes the computer choice


function playround(playerSelection, computerSelection){   // the rules of win, lose, tie
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
        result = "Tie";
    }

return result

}

console.log(playround(playerSelection,computerSelection)); // return the result of the match


//display the choices
console.log("player : "+playerSelection);
console.log("computer : "+computerSelection);
