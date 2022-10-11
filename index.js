let computerScore = 0;
let playerScore = 0;
let ties = 0;
let rounds = 5;
let gameOver = false;
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const output = document.getElementById('result');


// Generate rock, paper or scissor computer choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);     //random number between 0 and 2

    switch(randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        default:
            return 'scissor';
    }
}

// Function that plays a round
function playRound(playerSelection, computerSelection) {
    // rock vs. paper
    if(playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        output.innerHTML = "You lose. Paper beats rock";
        output.style.color = "red";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        output.innerHTML = "You win. Paper beats rock";
        output.style.color = "green";
    }
    // paper vs. scissor
    if(playerSelection === 'paper' && computerSelection === 'scissor'){
        computerScore++;
        output.innerHTML = "You lose. scissor beats paper";
        output.style.color = "red";
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        playerScore++;
        output.innerHTML = "You win. Scissor beats paper";
        output.style.color = "green";
    }
    // scissor vs. rock
    if(playerSelection === 'scissor' && computerSelection === 'rock') {
        computerScore++;
        output.innerHTML = "You lose. Rock beats scissor";
        output.style.color = "red";
    } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        playerScore++;
        output.innerHTML = "You win. Rock beats scissor";
        output.style.color = "green";
    }
    if (playerSelection === computerSelection){
        ties++;
        output.innerHTML = "Tie";
        output.style.color = "orange";
    }
}

function game(string) {
    let playerSelection = string;
    const computerSelection = getComputerChoice();
    (playRound(playerSelection, computerSelection));

    // printing the score
    if(ties + playerScore + computerScore == rounds) {
        if(playerScore < computerScore) {
            output.innerHTML = `You lose. - Player: ${playerScore} wins - Computer: ${computerScore} wins - ${ties} ties.`;
            output.style.color = "red";
            playerScore = 0;
            computerScore = 0;
            ties = 0;
        } else if (playerScore > computerScore) {
            output.innerHTML = `You win. - Player: ${playerScore} wins - Computer: ${computerScore} wins - ${ties} ties.`;
            output.style.color = "green";
            playerScore = 0;
            computerScore = 0;
            ties = 0;
        } else {
            output.innerHTML = `It is a tie. - Player: ${playerScore} wins - Computer: ${computerScore} wins - ${ties} ties.`;
            output.style.color = "orange";
            playerScore = 0;
            computerScore = 0;
            ties = 0;
        }
    }
}

rock.addEventListener('click', () => {
    game('rock');
});
paper.addEventListener('click', () => {
    game('paper');
});
scissor.addEventListener('click', () => {
    game('scissor');
});
