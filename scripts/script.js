console.clear();
const choice = ["Rock","Paper","Scissors"];
const comp = document.getElementById("computerChoice");
const player = document.getElementById("playerChoice");

let playerChoice = "";

function getComputerChoice() {
    let chosen = choice[Math.floor(Math.random() * choice.length)];
    return comp.textContent = "" + chosen;
}
getComputerChoice();

function chooseRock() {
    playerChoice = "Rock";
    player.textContent = "" + playerChoice;
}

function choosePaper() {
    playerChoice = "Paper";
    player.textContent = "" + playerChoice;
}

function chooseScissors() {
    playerChoice = "Scissors";
    player.textContent = "" + playerChoice;
}

// function getPlayerChoice(choice[option]) {

// }