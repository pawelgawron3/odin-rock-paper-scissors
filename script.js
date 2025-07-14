const rock_btn = document.getElementById("rock");
const paper_btn = document.getElementById("paper");
const scissors_btn = document.getElementById("scissors");

const game_info = document.getElementById("game-info");
const user_score = document.getElementById("user-score");
const cpu_score = document.getElementById("cpu-score");
const tie_counter = document.getElementById("tie-counter");

let userWinCounter = 0,
  cpuWinCounter = 0,
  tieCounter = 0;

rock_btn.addEventListener("click", () => getHumanChoice("rock"));
paper_btn.addEventListener("click", () => getHumanChoice("paper"));
scissors_btn.addEventListener("click", () => getHumanChoice("scissors"));

function resetStats() {
  user_score.textContent = "User score: ";
  cpu_score.textContent = "CPU score: ";
  tie_counter.textContent = "Number of ties: ";
}

function updateStats() {
  user_score.textContent += userWinCounter;
  cpu_score.textContent += cpuWinCounter;
  tie_counter.textContent += tieCounter;
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getHumanChoice(choice) {
  let cpu_choice = getComputerChoice();
  switch (choice) {
    case "rock":
      if (cpu_choice === "rock") {
        game_info.textContent = "It' a tie!";
        ++tieCounter;
        resetStats();
        updateStats();
        break;
      }
      if (cpu_choice === "paper") {
        game_info.textContent = "CPU won!";
        ++cpuWinCounter;
        resetStats();
        updateStats();
        break;
      }
      if (cpu_choice === "scissors") {
        game_info.textContent = "You won!";
        ++userWinCounter;
        resetStats();
        updateStats();
        break;
      }
    case "paper":
      if (cpu_choice === "rock") {
        game_info.textContent = "You won!";
        ++userWinCounter;
        resetStats();
        updateStats();
        break;
      }
      if (cpu_choice === "paper") {
        game_info.textContent = "It' a tie!";
        ++tieCounter;
        resetStats();
        updateStats();
        break;
      }
      if (cpu_choice === "scissors") {
        game_info.textContent = "CPU won!";
        ++cpuWinCounter;
        resetStats();
        updateStats();
        break;
      }
    case "scissors":
      if (cpu_choice === "rock") {
        game_info.textContent = "CPU won!";
        ++cpuWinCounter;
        resetStats();
        updateStats();
        break;
      }
      if (cpu_choice === "paper") {
        game_info.textContent = "You won!";
        ++userWinCounter;
        resetStats();
        updateStats();
        break;
      }
      if (cpu_choice === "scissors") {
        game_info.textContent = "It's a tie!";
        ++tieCounter;
        resetStats();
        updateStats();
        break;
      }
  }
}
