

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
    let choice = prompt("rock, paper, or scissors?");
    return choice;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame()
{
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice)
    {
        humanChoice.toLowerCase();

        if (humanChoice === "rock" && computerChoice === "scissors")
        {
            console.log("You win! Rock beats scissors.");
            humanScore++;
        }
        else if (humanChoice === "paper" && computerChoice === "rock")
        {
            console.log("You win! Paper beats rock.");
            humanScore++;
        }
        else if (humanChoice === "scissors" && computerChoice === "paper")
        {
            console.log("You win! Scissors beats paper.");
            humanScore++;
        }
        else if (humanChoice === "scissors" && computerChoice === "rock")
        {
            console.log("You lose! Rock beats scissors.");
            computerScore++;
        }
        else if (humanChoice === "rock" && computerChoice === "paper")
        {
            console.log("You lose! Paper beats rock.");
            computerScore++;
        }
        else if (humanChoice === "paper" && computerChoice === "scissors")
        {
            console.log("You lose! Scissors beats paper.");
            computerScore++;
        }
        else 
        {
            console.log("It's a tie!");
        }
    } 

    for (let i = 0; i < 5; i++)
    {
        if (i > 0)
        {
            humanSelection = getHumanChoice();
            computerSelection = getComputerChoice();
        }
        playRound(humanSelection, computerSelection);
    }
}