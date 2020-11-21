const start = document.querySelector('.start-game')
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const infoBox = document.querySelector('.info')
const computerInfo = document.querySelector('.computer-choice')
const scoreboard = document.querySelector('.scoreboard')



computerPlay = () => {

   let p = Math.floor(Math.random()*3);
    if (p === 0) {
        p = 'ROCK'
    } else if (p === 1) {
        p ='PAPER';
} else {
    p ='SCISSORS'
}      
    return p;   
}



getAnswers = () => {
    let gamesPlayed = 0
   playerSelection = event.target.className
   computerSelection = computerPlay()
   computerInfo.innerHTML = `The Computer Chose ${computerSelection}!`
   if (playerSelection === 'scissors' && computerSelection === 'ROCK' 
    || playerSelection=== 'paper' && computerSelection === 'SCISSORS'
    || playerSelection === 'rock' && computerSelection === 'PAPER') {
        computerWins += 1;
        infoBox.innerHTML = `You Lose! ${playerSelection.toUpperCase()} looses to ${computerSelection}!`
     
    } else if (playerSelection === 'rock' && computerSelection === 'SCISSORS'
    || playerSelection=== 'paper' && computerSelection === 'ROCK'
    || playerSelection === 'scissors' && computerSelection === 'PAPER') {
        playerWins += 1;
        infoBox.innerHTML = `You WIN! ${playerSelection.toUpperCase()} beats ${computerSelection}!`

        } else if (playerSelection.toUpperCase() === computerSelection) {
            draws += 1;
            infoBox.innerHTML = `DRAW! You both played ${playerSelection}!`;
        }
        scoreUpdate()
        return computerSelection
}



    let playerWins = 0;
    let computerWins = 0;
    let draws = 0;

game = () => { 
    infoBox.innerHTML = 'Please Select your choice!' 
    gameReset();
    return 'gg'
}


scoreUpdate = () => {
    if (playerWins + computerWins + draws == 5 && playerWins > computerWins) {
        gameOver()
        scoreboard.innerHTML = 'WINNER!!!!'
        alert('You Win!')
        gameReset()
    } else if (playerWins + computerWins + draws === 5 && computerWins > playerWins) {
        gameOver()
        scoreboard.innerHTML = 'LA-OOOSSE-ER!'
        alert('You Lose!')
        gameReset()
    }else if (playerWins + computerWins + draws === 5 && computerWins === playerWins) {
        gameOver()
        scoreboard.innerHTML = 'YOU SOMEHOW TIED WITH A COMPUTER??? DOES NOT COMPUTE!!'
        alert('ITS A DRAW!')
        gameReset()
    } else { score = scoreboard.innerHTML = `Player Score: ${playerWins} vs Computer Score: ${computerWins} <br>
    Draws: ${draws}!`
}
}

gameOver = () => {
infoBox.innerHTML = 'GAME OVER!'
}



    displayScore = () => {
        if (playerWins > computerWins) {
            console.log(`You have won the game ${playerWins} rounds to ${computerWins}!`)
        } else if (computerWins > playerWins) {
            console.log(`You may have won some battles but you lost the war ${playerWins} rounds to ${computerWins}!`)
        } else if (playerWins = computerWins) { 
           console.log(`Five rounds and a draw ehh? ${playerWins} to ${computerWins} with ${draws}!`)
    }
    gameReset();
}


gameReset = () => {
    playerWins = 0;
    computerWins = 0;
    draws = 0;
}


start.addEventListener('click', game)
rock.addEventListener('click', getAnswers)
scissors.addEventListener('click', getAnswers)
paper.addEventListener('click', getAnswers)
