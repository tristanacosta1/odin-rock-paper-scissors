let randomNumber = Math.floor(Math.random() * 3) + 1;

function getComputerChoice(number) 
{
    if (number === 1) 
    {
        return "rock";
    }
    else if (number === 2) 
    {
        return "paper";
    }
    else 
    {
        return "scissors";
    }
}

function getHumanChoice() 
{
    prompt("Rock, paper, or scissors?");
}

console.log(getComputerChoice(randomNumber));
