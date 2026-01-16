let randomNumber = Math.floor(Math.random() * 3) + 1;

function getComputerChoice(number) 
{
    if (number === 1) return "rock";
    else if (number === 2) return "paper";
    else return "scissors";
}

function getHumanChoice() 
{
    let choice = prompt("rock, paper, or scissors?");
    return choice;
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice(randomNumber);

function playGame()
{
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice)
    {
        console.log(humanChoice);


    } 

        // if (humanChoice === "rock" && computerChoice === "scissors")
        // {
        //     console.log("You win! Rock beats scissors.");
        //     humanScore++;
        // }
        // else if (humanChoice === "paper" && computerChoice === "rock")
        // {
        //     console.log("You win! Paper beats rock.");
        //     humanScore++;
        // }
        // else if (humanChoice === "scissors" && computerChoice === "paper")
        // {
        //     console.log("You win! Scissors beats paper.");
        //     humanScore++;
        // }
        // else if (humanChoice === "scissors" && computerChoice === "rock")
        // {
        //     console.log("You lose! Rock beats scissors.");
        //     computerScore++;
        // }
        // else if (humanChoice === "rock" && computerChoice === "paper")
        // {
        //     console.log("You lose! Paper beats rock.");
        //     computerScore++;
        // }
        // else if (humanChoice === "paper" && computerChoice === "scissors")
        // {
        //     console.log("You lose! Scissors beats paper.");
        //     computerScore++;
        // }
        // else 
        // {
        //     console.log("It's a tie!");
        // }

    // for (let i = 0; i < 5; i++)
    // {
    //     if (i > 0)
    //     {
    //         randomNumber = Math.floor(Math.random() * 3) + 1;

    //         humanSelection = getHumanChoice();
    //         computerSelection = getComputerChoice(randomNumber);
    //     }

    //     playRound(humanSelection, computerSelection);
    // }
}

const body = document.querySelector("body");

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

const div = document.createElement("div");

body.appendChild(rock);
body.appendChild(paper);
body.appendChild(scissors);
body.appendChild(div);

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";

rock.addEventListener('click', () => playRound("rock"));
paper.addEventListener('click', () => playRound("paper"));
scissors.addEventListener('click', () => playRound("scissors"));

playGame();