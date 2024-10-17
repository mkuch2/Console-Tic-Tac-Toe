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


let span = document.querySelector("span");

span.addEventListener("click", (e) => {
  let choice = e.target.textContent;
  playRound(choice.toLowerCase(), getComputerChoice());
});
