const rock = document.getElementById("#rock");
const paper = document.getElementById("#paper");
const scissors = document.getElementById("#scissors");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getHumanChoice() {}
