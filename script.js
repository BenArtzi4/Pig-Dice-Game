'use strict';

// Get player element
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// Get dice box element
const diceEl = document.querySelector('.dice');

// Get buttons box element
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Get score boxes element
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// consts
const diceMax = 6;
const addOne = 1;
const player0 = 0;
const player1 = 1;
const highestScore = 100;

// variables
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// rolling the dice function
btnRoll.addEventListener('click', function () {
  if (playing) {
    // Generate a random number between 1 and 6
    const dice = Math.trunc(Math.random() * diceMax) + addOne;
    diceEl.classList.remove('hidden');
    // Display the relevant dice
    diceEl.src = `dice-${dice}.png`;
    /*if the dice number is 1 we pass the turn and reset score
  else - add to current sum
  */
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
    // If it came out on the die 1
    else {
      switchActivePlayer();
    }
  }
});

// hold button function
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // if one of the player wins
    if (scores[activePlayer] >= highestScore) {
      playing = false;
      // hide the dice
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchActivePlayer();
    }
  }
});

// Switch the active--player class between the users
function switchActivePlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === player0 ? player1 : player0;
  // If it belongs to the class then remove it, if it does not belong then add it
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  currentScore = 0;
}

// reset all the data that update during game
const initialize = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  // Set the active player as player 0
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
// Initialize the game data
initialize();

// New game button function
btnNew.addEventListener('click', initialize);
