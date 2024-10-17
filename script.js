console.log("Hello world");

function getComputerChoice()
{
  num = Math.trunc((Math.random() * 3));
  switch(num){
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice(){
  let answer;
  for(;;){
     answer = prompt("Enter your choice for rock paper scissors!");

    if(answer.toLowerCase() === "rock" || answer.toLowerCase() === "paper" || answer.toLowerCase() === "scissors"){
      break;
    }
  }
  return answer;
}


function playGame(getHumanChoice, getComputerChoice)
{
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
  if(humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper"  && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper"){
    humanScore++;
    console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
  }
  else if(humanChoice === computerChoice){
    console.log("Its a tie!");
  }
  else{
    computerScore++;
    console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
  }

}

for(let i = 0;i < 5; i++){
  let hum = getHumanChoice();
  let rob = getComputerChoice();
  playRound(hum, rob);
}



  if(humanScore > computerScore){
    console.log(`Humans win! Score was ${humanScore} to ${computerScore}`);
  }
  else if (humanScore == computerScore){
    console.log("It's a tie!");
  }
  else{
    console.log(`Robots win! Score was ${computerScore} to ${humanScore}`);
  }

}

playGame(getHumanChoice, getComputerChoice);