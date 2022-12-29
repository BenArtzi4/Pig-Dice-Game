'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// Get elements to variables
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
resetScore();

const diceEl = document.querySelector('.dice');
diceEl.classList.add('hidden');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
let currentScore = 0;

// Holds the number of the current active player
let activePlayer = 0;

// Hold the earned score of both players
const scores = [0, 0];

// rolling the dice function
btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  /*if the dice number is 1 we pass the turn and reset score
  else - add to current sum
  */
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchActivePlayer();
  }
});

btnHold.addEventListener('click', function () {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  switchActivePlayer();
});

// Function that reset both players score
function resetScore() {
  score0El.textContent = 0;
  score1El.textContent = 0;
}

// Switch the active--player class between the users
function switchActivePlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  currentScore = 0;
}
