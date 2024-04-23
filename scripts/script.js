console.clear();
const choice = ["Rock","Paper","Scissors"];
const comp = document.getElementById("computerChoice");
const player = document.getElementById("playerChoice");

let playerChoice = "";

function getComputerChoice() {
    let computerChosen = choice[Math.floor(Math.random() * choice.length)];
    return comp.textContent = "" + computerChosen;
}
getComputerChoice();

function getPlayerChoice(playerChosen) {
    console.log(playerChosen);
    return player.textContent = "" + playerChosen;
}