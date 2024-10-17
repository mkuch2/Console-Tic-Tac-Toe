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


