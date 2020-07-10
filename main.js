const body = document.querySelector('body');
const message = document.querySelector('#message');
const selections = document.querySelectorAll('.selection');
const playerText = document.querySelector('#playerChoice');
const computerText = document.querySelector('#computerChoice')
const standingsText = document.querySelector('#standings');
const standingsText2 = document.querySelector('#standings2')
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const tryAgain = document.querySelector('.hidden');
const rockPaperScissor = ['rock','paper','scissor'];
let playerChoice = undefined
let computerChoice = undefined;
let randomNum = undefined;
let computerTurn = false
let userWin = false;
let computerWin = false;
let userTally = 0
let computerTally = 0
let draw = 0
let gameOver = false

playRound();

function playRound() {
    for (let i=0; i < selections.length; i++) {
        selections[i].addEventListener("click", function () {
            if (selections[i]) {
                playerChoice = rockPaperScissor[i];
            } else {
                return console.error('failure');
            }
            computerTurn = true;
            computerPlay();
            winner();
            tally();
            // bestOf5(userTally, computerTally);
            decisions(playerChoice, computerChoice);
            return computerTurn = false;
        });
    };
};

function computerPlay() {
    if (computerTurn === true) {
        randomNum = Math.floor(Math.random() * Math.floor(3));
        return computerChoice = rockPaperScissor[randomNum];
    };
};

function decisions(playerSelection, computerSelection) {
    console.log(`Player chose ${playerSelection}, Computer chose ${computerSelection}`);
    message.textContent = `Player chose ${playerSelection}, Computer chose ${computerSelection}`;
    playerText.textContent = playerSelection;
    computerText.textContent = computerSelection;
    if (userWin) {
        standingsText.textContent = `you win! ${playerSelection} beats ${computerSelection}`;
        standingsText.style.color = "green";
    } else if (computerWin) {
        standingsText.textContent = `computer wins! ${computerSelection} beats ${playerSelection}`;
        standingsText.style.color = "red";
    } else {
        standingsText.textContent =`tie!`;
        standingsText.style.color = "orange";

    };
};

function winner() {
    if (playerChoice === computerChoice){
        userWin = false;
        computerWin = false;
        return;
    }; 
    if (playerChoice !== computerChoice){
        if (playerChoice === "paper" && computerChoice === "rock") {
            computerWin = false
            return userWin = true
        } else if (playerChoice === "paper" && computerChoice === "scissor") {
            userWin = false
            return computerWin = true
        };
        if (playerChoice === "scissor" && computerChoice === "paper") {
            computerWin = false
            return userWin = true
        } else if (playerChoice === "scissor" && computerChoice === "rock") {
            userWin = false
            return computerWin = true
        };
        if (playerChoice === "rock" && computerChoice === "scissor") {
            computerWin = false
            return userWin = true
        } else if (playerChoice === "rock" && computerChoice === "paper") {
            userWin = false
            return computerWin = true
        };
        // COMMENTED CODE IS ANOTHER SIMILAR METHOD
        // if (playerChoice === "rock") {
        //     if (computerChoice === "scissor") {
        //         console.log('you win!');
        //     } else if (computerChoice === "paper") {
        //         console.log('computer wins!')
        //     }
        // }
    };
};

function tally() {
    if (userWin) {
        userTally += 1
        console.log(userTally);
        return playerScore.textContent = `${userTally}`;

    } else if (computerWin) {
        computerTally += 1;
        console.log(computerTally);
        return computerScore.textContent = `${computerTally}`;
    }   else {
        draw += 1;
        return console.log(draw);
    };
};

// function bestOf5(userScore, computerScore) {
//     if (userScore === 5) {
//         console.log(`You win the game!`);
//         body.style.background = "green";
//         return gameOver = true
//     } else if (computerScore === 5) {
//         console.log(`computer wins the game`);
//         body.style.background = "red";
//         return gameOver = true
//     }
// }

// function gameCheck() {
//     if(!gameOver) {
//         console.log('game not over');
//     } else {
//         console.log('game over');
//         alert('gameover');
//         return;
//     }
// };




