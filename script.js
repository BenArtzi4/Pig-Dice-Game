'use strict';

// Get elements to variables
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

resetScore();

function resetScore() {
  score0El.textContent = 0;
  score1El.textContent = 0;
}
