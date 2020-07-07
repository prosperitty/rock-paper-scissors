let playerSelection = ['rock','paper','scissor'];
const computerSelection = "scissor";
const message = document.querySelector('#message');
const selection = document.querySelectorAll('.select');
const choiceMessage = document.querySelector('#choice');
const choice = [];
    



function playerPlay() {
    for (const i in selection) {
        selection[i].addEventListener("click", function() {
            if (selection[i] === selection[0]) {
                choice.splice(0, 1, playerSelection[0])
                return choice.textContent = playerSelection[0];
            }
            else if (selection[i] === selection[1]){
                choice.splice(0, 1, playerSelection[1])
                return choice.textContent = playerSelection[1];
            }
            else if (selection[i] === selection[2]){
                return choice.textContent = playerSelection[2];
            };
        });
    };
};

// function computerPlay() {
//     return computerSelection;
// }

function playRound (playerSelection, computerSelection) {
    console.log(`Player chose ${playerSelection}, Computer chose ${computerSelection}`);
    message.innerHTML = `Player chose ${playerSelection}, Computer chose ${computerSelection}`
}

function winner() {

}

playerPlay();


// runGame();
