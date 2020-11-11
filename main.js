const body = document.querySelector('body');
const input = document.querySelector('.input-selection');
const reset = document.querySelector('.reset-button');
const message = document.querySelector('#message');
const selections = document.querySelectorAll('.selection');
const playerChoiceText = document.querySelector('#playerChoice');
const computerChoiceText = document.querySelector('#computerChoice')
const standingsText = document.querySelector('#standings');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const tieScore = document.querySelector('#tie-score');
const rockPaperScissor = ['rock','paper','scissor'];
const rock = document.querySelector('#img-rock')
let playerChoice = undefined;
let computerChoice = undefined;
let randomNum = undefined;
let computerTurn = false;
let userWin = false;
let computerWin = false;
let userTally = 0;
let computerTally = 0;
let draw = 0;
let winningScore = 5;
let gameOver = false;

playRound();

function playRound() {
    for (let i=0; i < selections.length; i++) {
        selections[i].addEventListener("click", () => {
            if (selections[i]) {
                playerChoice = rockPaperScissor[i];
            } else {
                return console.error('failure');
            };
            computerTurn = true;
            computerPlay();
            chooseRoundWinner();
            tally();
            updateStandings(playerChoice, computerChoice);
            verifyWinner();
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

function chooseRoundWinner() {
    if (playerChoice === computerChoice) {
        userWin = false;
        computerWin = false;
    }; 
    if (playerChoice !== computerChoice){
        if (playerChoice === "paper" && computerChoice === "rock") {
            computerWin = false;
            return userWin = true;
        } else if (playerChoice === "paper" && computerChoice === "scissor") {
            userWin = false;
            return computerWin = true;
        };
        if (playerChoice === "scissor" && computerChoice === "paper") {
            computerWin = false;
            return userWin = true;
        } else if (playerChoice === "scissor" && computerChoice === "rock") {
            userWin = false;
            return computerWin = true;
        };
        if (playerChoice === "rock" && computerChoice === "scissor") {
            computerWin = false;
            return userWin = true;
        } else if (playerChoice === "rock" && computerChoice === "paper") {
            userWin = false;
            return computerWin = true;
        };
    };
};

function tally() {
    if (!gameOver) {
        if (userWin) {
            userTally++;
            console.log(userTally);
            return playerScore.textContent = `${userTally}`;
        } else if (computerWin) {
            computerTally++;
            console.log(computerTally);
            return computerScore.textContent = `${computerTally}`;
        } else {
            draw++;
            console.log(draw)
            return tieScore.textContent = `${draw}`;
        };
    };
};

function updateStandings(playerSelection, computerSelection) {
    console.log(`Player chose ${playerSelection}, Computer chose ${computerSelection}`);
    message.textContent = `Player chose ${playerSelection}, Computer chose ${computerSelection}`;
    playerChoiceText.textContent = playerSelection;
    computerChoiceText.textContent = computerSelection;
    if (userWin) {
        standingsText.textContent = `you win! ${playerSelection} beats ${computerSelection}`;
        standingsText.style.color = "lightgreen";
    } else if (computerWin) {
        standingsText.textContent = `computer wins! ${computerSelection} beats ${playerSelection}`;
        standingsText.style.color = "red";
    } else {
        standingsText.textContent =`tie!`;
        standingsText.style.color = "orange";
    };
};

function verifyWinner() {
    if (userTally  === winningScore) {
        standingsText.textContent = `Game Over!`;
        gameOver = true;
    } else if (computerTally === winningScore) {
        standingsText.textContent = `Game Over!`;
        gameOver = true;
    };
};

input.addEventListener("change", function(){
    winningScore = Number(input.value);
});

reset.addEventListener("click", () => {
    playerChoice = undefined;
    computerChoice = undefined;
    randomNum = undefined;
    computerTurn = false;
    userWin = false;
    computerWin = false;
    userTally = 0;
    computerTally = 0;
    draw = 0;
    winningScore = 5;
    gameOver = false;
    input.value = winningScore;
    playerScore.textContent = `${userTally}`;
    computerScore.textContent = `${computerTally}`;
    tieScore.textContent = `${draw}`;
    standingsText.textContent = `Make Your Move!`;
});
