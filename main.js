/* rock-paper-scissors */
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        roundWinner = 'Tie'
    }
    if ( 
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK') 
  ) { playerScore++
      roundWinner = 'player'
    }
    if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK') 
    ) {computerScore++
        roundWinner = 'computer'
    }

  const computerSelection = getRandomChoice() {
      let randomNumber = Math.floor(Math.random() * 3)
  }

  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
}