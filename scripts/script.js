console.clear();
const comp = document.getElementById("computerChoice");
const player = document.getElementById("playerChoice");
const result = document.getElementById("result");
const compScore = document.getElementById("computerScore");
const playScore = document.getElementById("playerScore");

const choice = ["Rock", "Paper", "Scissors"];
let computerScore = 0;
let playerScore = 0;

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
                result.textContent = "Congratulations! Rock beats Scissors";
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
                result.textContent = "Congratulations! Paper beats Rock";
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
                result.textContent = "Congratulations! Scissors beats Paper";
                playerScore++;
            }
            break;
        default:
            console.log("Default");
    }
    // updateScore();

}

// function updateScore() {
//     do {
//         compScore.textContent = computerScore;
//         playScore.textContent = playerScore;
//     } while (computerScore < 5 || playerScore < 5)

//     if (computerScore === 5) {

//     }
// }