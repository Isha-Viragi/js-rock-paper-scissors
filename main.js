const scoreTracker = JSON.parse(localStorage.getItem("scoreTracker")) || {
  wins: 0,
  loses: 0,
  ties: 0,
};

let userMove = "";
let result = "";
let computerMove = "";
const winMessage = "You win  :)";
const loseMessage = "You lose  :(";
const tieMessage = "It's a tie  :/";
const isToggled = 'is-toggled';
const isKeydown = 'is-keydown'
const userMoveAutoPlay = '';
let intervalId;

displayScore();

const rockButton = document.querySelector('.js-rock-button');
const paperButton = document.querySelector('.js-paper-button');
const scissorsButton = document.querySelector('.js-scissors-button');
const resetButton = document.querySelector('.js-reset-button');
const autoPlayButton = document.querySelector('.js-auto-play-button');



function highlightMove(move) {
  const displayElement = document.querySelector(`.js-${move}-display`);
  displayElement.classList.add(isKeydown)
  setTimeout(() => displayElement.classList.remove(isKeydown), 180)
}

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    userMove = 'Rock';
    initializeGame();
    highlightMove('r')
  }
  else if (event.key === 'p') {
    userMove = 'Paper';
    initializeGame();
    highlightMove('p')
  }
  else if (event.key === 's') {
    userMove = 'Scissors';
    initializeGame();
    highlightMove('s')
  }
})

rockButton.addEventListener('click', () => {
  userMove = 'Rock';
  initializeGame();
});

paperButton.addEventListener('click', () => {
  userMove = 'Paper'
  initializeGame();
});

scissorsButton.addEventListener('click', () => {
  userMove = 'Scissors'
  initializeGame();
});

resetButton.addEventListener('click', () => {
  resetScore();
  displayMoves();
  displayResult();
  displayScore();
});

autoPlayButton.addEventListener('click', () => {
  autoPlayToggle();
})

function calculateComputerMove() {
  let computerMove = "";
  randomNumber = Math.random();
  if (randomNumber > 1 / 3 && randomNumber < 2 / 3)
    computerMove = "Paper";
  else if (randomNumber < 1 / 3) computerMove = "Rock";
  else computerMove = "Scissors";
  return computerMove;
}

function compareForRock() {
  if (computerMove === "Rock") result = tieMessage;
  if (computerMove === "Paper") result = loseMessage;
  if (computerMove === "Scissors") result = winMessage;
  return result;
}

function compareForPaper() {
  if (computerMove === "Rock") result = winMessage;
  if (computerMove === "Paper") result = tieMessage;
  if (computerMove === "Scissors") result = loseMessage;
  return result;
}

function compareForScissors() {
  if (computerMove === "Rock") result = loseMessage;
  if (computerMove === "Paper") result = winMessage;
  if (computerMove === "Scissors") result = tieMessage;
  return result;
}

function compareMoves() {
  if (userMove === "Rock") return compareForRock();
  if (userMove === "Paper") return compareForPaper();
  if (userMove === "Scissors") return compareForScissors();
}

function playGame() {
  computerMove = calculateComputerMove();
  result = compareMoves();
  trackScore(result);
  displayMoves();
  displayResult();
  displayScore();
}

function trackScore(result) {
  if (result === winMessage) scoreTracker.wins++;
  if (result === loseMessage) scoreTracker.loses++;
  if (result === tieMessage) scoreTracker.ties++;
  localStorage.setItem("scoreTracker", JSON.stringify(scoreTracker));
}

function resetScore() {
  scoreTracker.wins = 0;
  scoreTracker.loses = 0;
  scoreTracker.ties = 0;
  localStorage.removeItem("scoreTracker");
}

function displayMoves() {
  if (localStorage.getItem("scoreTracker")) {
    document.querySelector(
      ".js-moves"
    ).innerHTML = `You <img src="images/${userMove.toLowerCase()}-emoji.png" class="move-icon"> 
          <img src="images/${computerMove.toLowerCase()}-emoji.png" class="move-icon"> Computer`;
  } else document.querySelector(".js-moves").innerHTML = "";
}

function displayResult() {
  if (localStorage.getItem("scoreTracker")) {
    document.querySelector(".js-result").innerHTML = result;
  } else document.querySelector(".js-result").innerHTML = "";
}

function displayScore() {
  document.querySelector(
    ".js-score-tracker"
  ).innerHTML = `Wins: ${scoreTracker.wins}, Loses: ${scoreTracker.loses}, Ties: ${scoreTracker.ties}`;
}

function initializeGame() {
  if (isAutoPlay()) {
    playGame();
    autoPlay()
  }
  else playGame();
}

function isAutoPlay() {
  const autoPlayClassList = autoPlayButton.classList;
  if (autoPlayClassList.contains(isToggled))
    return true;
  else if (!autoPlayClassList.contains(isToggled)) return false;
}

function autoPlayToggle() {
  const autoPlayClassList = autoPlayButton.classList;
  const displayElement = document.querySelector('.js-message-display');

  if (!autoPlayClassList.contains(isToggled)) {
    autoPlayClassList.add(isToggled)
    displayElement.innerHTML = 'Select a move...'
  }
  else if (autoPlayClassList.contains(isToggled)) {
    autoPlayClassList.remove(isToggled);
    autoPlayButton.innerHTML = "Auto Play"
    intervalId && clearInterval(intervalId);
    displayElement.innerHTML = ''
  }
}

function autoPlay() {
  const displayElement = document.querySelector('.js-message-display');

  displayElement.innerHTML = '';
  autoPlayButton.innerHTML = 'Pause'

  intervalId = setInterval(function () {
    playGame()
  }, 1000)
}

