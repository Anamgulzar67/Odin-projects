const options = ["rock", "paper", "scissors"];
function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  console.log(choice);
  return choice;
}
function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return " tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    return "player";
  } else {
    return "computer";
  }
}
function playRound(computerSelection, playerSelection) {
  const result = checkWinner(computerSelection, playerSelection);
  if (result == "tie") {
    return "its tie";
  } else if (result == "player") {
    return `congrats! you win ${playerSelection} beats ${computerSelection} `;
  } else {
    return `you lose! ${computerSelection} beats ${playerSelection}`;
  }
}
function getPlayerChoice() {
  let validatedInput = false;
  while (validatedInput == false) {
    const choice = prompt("Rock,Paper,Scissors");
    if (choice == "") {
      continue;
    }
    const choiceInLower=choice.toLowerCase();
    if (options.includes(choiceInLower )) {
      validatedInput = true;
      return choiceInLower;
    }
  }
}

function game() {
   let scorePlayer=0;
   let scorecomputer=0;
  console.log("Welcome");
  for (let index = 0; index < 5; index++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    if (checkWinner(playerSelection, computerSelection=='player')) {
      scorePlayer++;
    }
      else if(checkWinner(playerSelection, computerSelection)=="computer"){
         scorecomputer++;
      }
  }
  console.log("game is over");
  if (scorePlayer>scorecomputer) {
   console.log("player was the winner");
  }
  else if (scorePlayer<scorecomputer){
   console.log("computer was the winner");
  }
  else {
   console.log("both have same scores");
  }

}
game();
