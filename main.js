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

  function getRandomChoice() {
      let randomNumber = Math.floor(Math.random() * 3)
   switch(randomNumber){
      case 0: 
      return 'ROCK'
      case 1: 
      return 'PAPER'
      case 2: 
      return 'SCISSORS'
  }
}

function gameOver() {
    return playerScore === 5 || computerScore === 5
}

// UI
const computerScorePara = document.getElementById('computerScore')
const playerScorePara = document.getElementById('playerInfo')
const scoreInfo = document.getElementsById('scoreInfo')
const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorBtn = document.getElementById('scissorBtn')

rockBtn.addEventListener('click', () => handleClick('ROCK'))
paperBtn.addEventListener('click', () => handleClick('PAPER'))
scissorBtn.addEventListener('click', () => handleClick('SCISSORS'))

function updateScore() {
    if (roundWinner === 'tie') {
        scoreInfo.textContent = "Tie game!"
    } else if (roundWinner === 'player') {
        scoreInfo.textContent = 'You Won!'
    } else if (roundWinner === 'computer') {
        scoreInfo.textContent = 'You lost...'
    }
}
playerScorePara.textContent = `Player: ${playerScore}`
computerScorePara.textContent = `Player: ${playerScore}`


const computerSelection = getRandomChoice()
playRound(playerSelection, computerSelection)
updateScore()

  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
}