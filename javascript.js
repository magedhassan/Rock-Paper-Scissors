// get computer choice
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  i = Math.floor(Math.random()*choices.length);
  return choices[i].toLocaleLowerCase();
}

//  a function that plays a single round of Rock Paper Scissors. 
function playOnce(playerSelection, computerSelection) {
  if (playerSelection != "end") {
    console.log(`Computer choice is: ${computerSelection}`);
    console.log(`Your choice is: ${playerSelection}`);      
  } else {return 0;}
  if (playerSelection == computerSelection) {
    console.log("Game is Draw!");  
    return "draw";    
  } else if (((playerSelection == "rock") && (computerSelection == "scissors")) 
              || ((playerSelection == "scissors") && (computerSelection == "paper"))
              || ((playerSelection == "paper") && (computerSelection == "rock"))) {
    console.log("You win!");
    return "win";    
  } else {
    console.log("You Lose!");
    return "lose";    
  }
}

// function to play 5 times 
function PlayGame(params) {
  let playerSelection = prompt("Enter your choice(rock, paper, scissors or enter end to exit):").toLocaleLowerCase();
  let count = 0;
  let yourCount = 0;
  let computerCount = 0;
  while (count < 5) {
    // get your choice
    playerSelection = prompt("Enter your choice(rock, paper, scissors or enter end to exit):").toLocaleLowerCase();
    while ((playerSelection != "rock") 
            && (playerSelection != "paper") 
            && (playerSelection != "scissors") 
            && (playerSelection != "end")) {
      alert("enter rock, paper, scissors or enter end to exit");
      playerSelection = prompt("Enter your choice:").toLocaleLowerCase();
      if (playerSelection == "end") {
        break;
      }
    }

    // now call the function to play once
    result = playOnce(playerSelection, getComputerChoice());
    if ( result == "win") {
      yourCount++;
    } else if (result == "lose") {
      computerCount++;
    }
    
    count++;
  }
  if (yourCount > computerCount) {
    console.log("Total winner: You");
  } else if (yourCount < computerCount){
    console.log("Total winner: Computer");  
  } else {
    console.log("Total Result is Draw!");  
  } 
} 

// now call the function to play 5 times
PlayGame();