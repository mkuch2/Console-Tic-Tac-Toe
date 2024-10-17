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

    if(answer == "rock" || answer == "paper" || answer == "scissors"){
      break;
    }
  }
  return answer;
}
