const comp = document.getElementById("computerChoice");
const player = document.getElementById("playerChoice");
const result = document.getElementById("result");
const compScore = document.getElementById("computerScore");
const playScore = document.getElementById("playerScore");
const restart = document.getElementById("restartBtn");
const buttons = document.querySelectorAll("button");

const choice = ["Rock", "Paper", "Scissors"];

let computerScore = 0;
let playerScore = 0;

restart.disabled = true;

function getComputerChoice() {
    const computerChosen = choice[Math.floor(Math.random() * choice.length)];
    return comp.textContent = "" + computerChosen;
}

function getPlayerChoice(playerChosen) {
    playRound(getComputerChoice(), playerChosen);
    return player.textContent = "" + playerChosen;
}

function playRound(computerSelection, playerSelection) {
    switch (playerSelection) {
        case "Rock":
            if (computerSelection === "Rock") {
                result.textContent = "It's a tie!";
            } else if (computerSelection === "Paper") {
                result.textContent = "Too bad, Paper beats Rock";
                computerScore++;
            } else {
                result.textContent = "Correct! Rock beats Scissors";
                playerScore++;
            }
            break;
        case "Paper":
            if (computerSelection === "Paper") {
                result.textContent = "It's a tie!";
            } else if (computerSelection === "Scissors") {
                result.textContent = "Too bad, Scissors beats Paper";
                computerScore++;
            } else {
                result.textContent = "Correct! Paper beats Rock";
                playerScore++;
            }
            break;
        case "Scissors":
            if (computerSelection === "Scissors") {
                result.textContent = "It's a tie!";
            } else if (computerSelection === "Rock") {
                result.textContent = "Too bad, Rock beats Scissors";
                computerScore++;
            } else {
                result.textContent = "Correct! Scissors beats Paper";
                playerScore++;
            }
            break;
        default:
            console.log("Default");
    }
    updateScore();

}

function updateScore() {
    playScore.textContent = playerScore;
    compScore.textContent = computerScore;

    if (computerScore === 5) {
        result.textContent = "Weee, you loose :c";
        gameOver();
    } else if (playerScore === 5) {
        result.textContent = "Congratulations, you won!";
        gameOver();
    }
}

function gameOver() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
    restart.disabled = false;

}

function restartGame() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
    }
    restart.disabled = true;
    playerScore = 0;
    computerScore = 0;
    playScore.textContent = playerScore;
    compScore.textContent = computerScore;
    result.textContent = "Choose an option above!";
}