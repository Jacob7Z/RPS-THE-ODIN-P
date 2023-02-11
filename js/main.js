
const weapons = ["rock","paper","scissors"];
function computerSelection(weapons){ // gets the computer choice
    cpSelection = weapons[Math.floor(Math.random()*weapons.length)]; 
    return cpSelection
}

let playerSelection ='';

const buttons = document.querySelectorAll('.buttons button'); //selecting the html divs
const resultOfTheGame = document.querySelector('.result');
const cpChoice = document.querySelector('.cpChoice');
const plChoice = document.querySelector('.plChoice');


function playround(playerSelection, computerSelection){   // the rules of the game
    let result;

    if(playerSelection === "rock" && computerSelection(weapons) === "paper" ){
        result = "Lose";
    }else if (playerSelection === "rock" && computerSelection(weapons) === "scissors" ){
        result = "Win"
    }else if(playerSelection === "paper" && computerSelection(weapons) === "rock" ){
        result = "Win";
    }else if (playerSelection === "paper" && computerSelection(weapons) === "scissors" ){
        result = "Lose"
    }else if (playerSelection === "scissors" && computerSelection(weapons) === "rock" ){
        result = "Lose";
    }else if (playerSelection === "scissors" && computerSelection(weapons) === "paper" ){
        result = "Win";
    }else if (playerSelection === computerSelection(weapons) ){
        result = "Tie";
    }
    
return result
}

function getPlayerChoice(e){    
    let chocice = e.target.textContent.toLowerCase(); // get the player choice "the pressed button "
    resultOfTheGame.textContent = playround(chocice,computerSelection); // display the result
    // console.log(playround(chocice,computerSelection));
    
    //display the choices
    plChoice.textContent = "Player Choice: "+chocice;
    // console.log("Player Choice: "+chocice);

    cpChoice.textContent = "Computer Choice : "+computerSelection(weapons);
    // console.log("Computer Choice : "+computerSelection(weapons));    
}

buttons.forEach(button =>{button.addEventListener('click',getPlayerChoice)}); // start a round when a button is pressed






