function startGame() {
    const classImages = document.querySelectorAll('.images');
    classImages.forEach(x => x.addEventListener('click', game));
}

function game(e) {
    const playerSelection = e.target.id;
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
        
    if (result.includes('Round won!')) {
        playerScore += 1;
    } else if (result.includes('Round lost!')) {
        computerScore += 1;
    }

    showRoundPicks(playerSelection, computerSelection);
    updateScores(playerScore, computerScore);
    checkWinner();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'Round won!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'Round won!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'Round won!';
    } else {
        return 'Round lost!';
    }
}

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()*choices.length)];
}

function showRoundPicks(playerSelection, computerSelection) {
    const userPick = document.getElementById('user-pick');
    const computerPick = document.getElementById('computer-pick');

    userPick.src = `images/${playerSelection}.png`;
    computerPick.src = `images/${computerSelection}.png`;
}

function updateScores(pScore, cScore) {
    const playerScore = document.getElementById('player-score');
    const computerScore = document.getElementById('computer-score');
    
    playerScore.textContent = `Your Score: ${pScore}`;
    computerScore.textContent = `Computer Score: ${cScore}`;
}

function checkWinner() {
    if (playerScore !== 5 &&  computerScore !== 5) {
        return;
    } else {
        endGame();
    }
}

function endGame() {
    const classImages = document.querySelectorAll('.images');
    classImages.forEach(x => x.removeEventListener('click', game));

    const gameWinner = document.getElementById('game-winner');
    
    if (playerScore === 5) {
        gameWinner.textContent = 'You Won!'
    } else {
        gameWinner.textContent = 'You lost!';
    }
    reset();
}

function reset() {
    const gameOver = document.querySelector('.game-over');
    const button = document.createElement('button');

    button.id = 'reset';
    button.innerText = 'Play Again';
    
    gameOver.appendChild(button);


    button.addEventListener('click', function(){
        location.reload();
    });
}

let playerScore = 0;
let computerScore = 0;

startGame();