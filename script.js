// Get random number from 1 to 3


function getComputerChoice() 
{
    let number = Math.floor(Math.random() * 3) + 1;

    if (number === 1) return "rock";
    else if (number === 2) return "paper";
    else return "scissors";
}

const body = document.querySelector("body");

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

const scoreboard = document.createElement("div");
const humanScoreDisplay = document.createElement("h1");
const computerScoreDisplay = document.createElement("h1");
const roundWinner = document.createElement("h5");
const gameWinner = document.createElement("h3");

body.appendChild(rock);
body.appendChild(paper);
body.appendChild(scissors);
body.appendChild(scoreboard);
scoreboard.appendChild(humanScoreDisplay);
scoreboard.appendChild(computerScoreDisplay);
scoreboard.appendChild(roundWinner);
scoreboard.appendChild(gameWinner);

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";

rock.addEventListener('click', () => playRound("rock", getComputerChoice()));
paper.addEventListener('click', () => playRound("paper", getComputerChoice()));
scissors.addEventListener('click', () => playRound("scissors", getComputerChoice()));

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice)
{
    if (humanChoice === "rock" && computerChoice === "scissors")
    {
        roundWinner.textContent = "You win! Rock beats scissors.";
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock")
    {
        roundWinner.textContent = "You win! Paper beats rock.";
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper")
    {
        roundWinner.textContent = "You win! Scissors beats paper.";
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock")
    {
        roundWinner.textContent = "You lose! Rock beats scissors.";
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "paper")
    {
        roundWinner.textContent = "You lose! Paper beats rock.";
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors")
    {
        roundWinner.textContent = "You lose! Scissors beats paper.";
        computerScore++;
    }
    else 
    {
        roundWinner.textContent = "It's a tie!";
    }

    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

    if (humanScore === 5) {
        gameWinner.textContent = "You win!";
    } else if (computerScore === 5) {
        gameWinner.textContent = "You lose!";
    }
}