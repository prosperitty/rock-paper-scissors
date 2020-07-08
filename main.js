const message = document.querySelector('#message');
const selections = document.querySelectorAll('.selection');
const playerText = document.querySelector('#playerChoice');
const computerText = document.querySelector('#computerChoice')
const rockPaperScissor = ['rock','paper','scissor'];
let playerChoice = undefined
let computerChoice = undefined;
let computerTurn = false
let randomNum = undefined;
    

playRound();

function playRound() {
    for (const i in selections) {
        selections[i].addEventListener("click", function() {
            if (selections[i]) {
                playerChoice = rockPaperScissor[i];
            } else {
                return console.error(failure);
            }
            computerTurn = true;
            computerPlay();
            decisions(playerChoice, computerChoice);
            winner();
            return computerTurn = false;
        });
    };
};

function randomMove() {
    return randomNum = Math.floor(Math.random() * Math.floor(3))
}

function computerPlay() {
    if (computerTurn === true) {
        randomMove();
        return computerChoice = rockPaperScissor[randomNum];
    };
};

function decisions(playerSelection, computerSelection) {
    console.log(`Player chose ${playerSelection}, Computer chose ${computerSelection}`);
    message.textContent = `Player chose ${playerSelection}, Computer chose ${computerSelection}`;
    playerText.textContent = playerSelection;
    computerText.textContent = computerSelection;
}

function winner() {
    if (playerChoice === computerChoice){
        console.log('tie!');
    }; 
    if (playerChoice !== computerChoice){
        if (playerChoice === "paper" && computerChoice === "rock") {
            console.log('paper wins');
        } else if (computerChoice === "scissor") {
            console.log('scissor wins!')
        }
            // if (computerChoice === "rock") {
            //     console.log("paper wins");
            // } else {
            //     if (computerChoice === "scissors") {
            //         console.log("scissors wins");
            //     }
            // }
        
        // if (playerChoice === "scissors") {
        //     if (computerChoice === "rock") {
        //         console.log("rock wins");
        //     } else {
        //         if (computerChoice === "paper") {
        //             console.log("scissors wins") ;
        //         }
        //     }
        // }
    }
}

