let span = document.querySelector("span");
let results = document.querySelector("#results");

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
    console.log(humanScore);
    results.innerHTML += (`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.<br>`);
  }
  else if(humanChoice === computerChoice){
    results.innerHTML += ("Its a tie! <br>");
  }
  else{
    computerScore++;
    results.innerHTML += (`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.<br>`);
  }

}

span.addEventListener("click", (e) => {
  let choice = e.target.textContent;
  playRound(choice.toLowerCase(), getComputerChoice());

  console.log(humanScore);
  if(humanScore == 5){
    results.innerHTML += `Humans win! Score was ${humanScore} to ${computerScore}<br>`;
    humanScore = 0;
    computerScore = 0;
  }
  else if(computerScore == 5){
    results.innerHTML += `Robots win! Score was ${computerScore} to ${humanScore}<br>`;
    humanScore = 0
    computerScore = 0;
  }
});
