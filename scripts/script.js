console.clear();
const choice = ["Rock","Paper","Scissors"];
const comp = document.getElementById("computerChoice");

function getComputerChoice() {
    let chosen = choice[Math.floor(Math.random() * choice.length)];
    return comp.textContent = "" + chosen;
}
getComputerChoice()