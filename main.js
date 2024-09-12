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
const userMoveAutoPlay = '';
let intervalId;

displayScore();

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

function isAutoPlay() {
  const autoPlayClassList = document.querySelector('.js-auto-play-button').classList
  if (autoPlayClassList.contains(isToggled))
    return true;
  else if (!autoPlayClassList.contains(isToggled)) return false;
}

function autoPlayToggle() {
  const displayElement = document.querySelector('.js-message-display');
  const autoPlayButton = document.querySelector('.js-auto-play-button')

  if (!autoPlayButton.classList.contains(isToggled)) {
    autoPlayButton.classList.add(isToggled)
    displayElement.innerHTML = 'Select a move...'
  }
  else if (autoPlayButton.classList.contains(isToggled)) {
    autoPlayButton.classList.remove(isToggled);
    autoPlayButton.innerHTML = "Auto Play"
    intervalId && clearInterval(intervalId);
    displayElement.innerHTML = ''
  }
}

function autoPlay() {
  const displayElement = document.querySelector('.js-message-display');
  const autoPlayButton = document.querySelector('.js-auto-play-button');

  displayElement.innerHTML = '';
  autoPlayButton.innerHTML = 'Pause'

  intervalId = setInterval(function () {
    playGame()
  }, 1000)
}