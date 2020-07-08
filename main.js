const message = document.querySelector('#message');
const selections = document.querySelectorAll('.selection');
const playerText = document.querySelector('#playerChoice');
const computerText = document.querySelector('#computerChoice')
const standingsText = document.querySelector('#standings');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
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


playRound();

function playRound() {
    for (const i in selections) {
        selections[i].addEventListener("click", function() {
            if (selections[i]) {
                playerChoice = rockPaperScissor[i];
            } else {
                return console.error('failure');
            }
            computerTurn = true;
            computerPlay();
            winner();
            tally();
            decisions(playerChoice, computerChoice);
            return computerTurn = false;
        });
    };
};

function randomNumber() {
    return randomNum = Math.floor(Math.random() * Math.floor(3))
}

function computerPlay() {
    if (computerTurn === true) {
        randomNumber();
        return computerChoice = rockPaperScissor[randomNum];
    };
};

function decisions(playerSelection, computerSelection) {
    console.log(`Player chose ${playerSelection}, Computer chose ${computerSelection}`);
    message.textContent = `Player chose ${playerSelection}, Computer chose ${computerSelection}`;
    playerText.textContent = playerSelection;
    computerText.textContent = computerSelection;
    if (userWin) {
        standingsText.textContent = `you win!`;
        standingsText.style.color = "green";
    } else if (computerWin) {
        standingsText.textContent = `computer wins!`;
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
        console.log(userTally += 1);
        return playerScore.textContent = `${userTally}`;

    } else if (computerWin) {
        console.log(computerTally += 1);
        return computerScore.textContent = `${computerTally}`;
    }   else {
        return console.log(draw +=1);
    };
};



