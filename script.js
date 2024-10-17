console.log("Hello world");

function getComputerChoice()
{
  num = Math.trunc((Math.random() * 3));
  switch(num){
    case 0:
      console.log("rock");
      return "rock";
    case 1:
      console.log("paper");
      return "paper";
    case 2:
      console.log("scissors");
      return "scissors";
  }
}

function getHumanChoice(){
  let answer;
  for(;;){
     answer = prompt("Enter your choice for rock paper scissors!");

    if(answer.toLowerCase() == "rock" || answer.toLowerCase() == "paper" || answer.toLowerCase() == "scissors"){
      break;
    }
  }
  return answer;
}

let humanScore, computerScore = 0;

function playRound(humanChoice, computerChoice){
  if(humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper"  && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper"){
    humanScore++;
    console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
  }
  else{
    computerScore++;
    console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
  }

}
