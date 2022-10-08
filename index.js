let computerScore = 0;
let playerScore = 0;
let ties = 0;
let rounds = 6;

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
        return 'You lose. Paper beats rock';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return 'You win. Paper beats rock';
    }
    // paper vs. scissor
    if(playerSelection === 'paper' && computerSelection === 'scissor'){
        computerScore++;
        return 'You lose. scissor beats paper';
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        playerScore++;
        return 'You win. Scissor beats paper';
    }
    // scissor vs. rock
    if(playerSelection === 'scissor' && computerSelection === 'rock') {
        computerScore++;
        return 'You lose. Rock beats scissor';
    } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        playerScore++;
        return 'You win. Rock beats scissor';
    }
    if (playerSelection === computerSelection){
        ties++;
        return 'Tie';
    }
    // adding another round if input is invalid
    if(playerSelection !== 'rock' || playerSelection !== 'paper' || playerSelection !== 'scissor') {
        rounds++;
        return 'Incorrect input'
    }
}

function game() {
    // loop through desired rounds
    for(let i = 1; i < rounds; i++) {
        let playerSelection = prompt().toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

    // printing the score
    if(playerScore < computerScore) {
        console.log(`You lose. - Player: ${playerScore} wins - Computer: ${computerScore} wins - ${ties} ties.`);
    } else if (playerScore > computerScore) {
        console.log(`You win. - Player: ${playerScore} wins - Computer: ${computerScore} wins - ${ties} ties.`);
    } else {
        console.log(`It is a tie. - Player: ${playerScore} wins - Computer: ${computerScore} wins - ${ties} ties.`);
    }
}

game();