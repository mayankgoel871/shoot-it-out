'use strict';

//new game button
let newGameBtn = document.querySelector('.btn--new');

//no of matches won
let p1Score = document.getElementById(`p1Score`);
let p2Score = document.getElementById(`p2Score`);

//health display elements
let p1Health = document.getElementById(`p1Health`);
let p2Health = document.getElementById(`p2Health`);

//shots button
let p1ShootBtn = document.getElementById(`p1Shoot`);
let p2ShootBtn = document.getElementById(`p2Shoot`);

//shot elements
let p1Shot = document.getElementById('current-shot-1');
let p2Shot = document.getElementById('current-shot-2');

//initial scores
let player2Score = 0;
let player1Score = 0;
// let activePlayer = 0;

function reset() {
  p2Health.textContent = 10;
  p1Health.textContent = 10;
  p2Shot.textContent = 0;
  p1Shot.textContent = 0;
}

function newGame() {
  document.getElementById('name--2').innerHTML = '<h2>Player 2</h2>';
  document.getElementById('name--1').innerHTML = '<h2>Player 1</h2>';
  p2Health.textContent = 100;
  p1Health.textContent = 100;
  p2Shot.textContent = 0;
  p1Shot.textContent = 0;
  p2Score.textContent = 0;
  p1Score.textContent = 0;
  p2ShootBtn.classList.remove('hidden');
  p1ShootBtn.classList.remove('hidden');
  document.getElementsByClassName('player')[0].classList.add('player--active');
  document
    .getElementsByClassName('player')[1]
    .classList.remove('player--active');
}

function shoot() {
  let shot = Math.floor(Math.random() * 6);
  return shot;
}
///player1 shoot button listener
p1ShootBtn.addEventListener('click', function () {
  //setting active players
  document.getElementsByClassName('player')[0].classList.add('player--active');
  document
    .getElementsByClassName('player')[1]
    .classList.remove('player--active');
  //getting the shots
  let shot = shoot();
  let otherPlayerHealth = parseInt(p2Health.textContent, 10);
  p1Shot.textContent = shot;
  //checks if the player health is greater than 0
  if (otherPlayerHealth > 0) {
    otherPlayerHealth -= shot;
    p2Health.textContent = otherPlayerHealth;
  } else {
    player1Score += 1;
    p1Score.textContent = player1Score;
    reset();
  }
  if (p1Score.textContent == 3) {
    document.getElementById('name--1').innerHTML = '<h3>Player 1 Wins!!!!</h3>';
    document.getElementById('name--2').innerHTML =
      '<h3>Player 2 Loses!!!!</h3>';
    p1ShootBtn.classList.add('hidden');
    p2ShootBtn.classList.add('hidden');
  }
});

p2ShootBtn.addEventListener('click', function () {
  document.getElementsByClassName('player')[1].classList.add('player--active');
  document
    .getElementsByClassName('player')[0]
    .classList.remove('player--active');

  let shot = shoot();
  let otherPlayerHealth = parseInt(p1Health.textContent, 10);

  p2Shot.textContent = shot;

  //checks if player health is greater than 0
  if (otherPlayerHealth > 0) {
    //shoots at other player decreasing their health
    otherPlayerHealth -= shot;
    p1Health.textContent = otherPlayerHealth;
  } else {
    //increase player score
    player2Score += 1;
    p2Score.textContent = player2Score;
    //and start again
    reset();
  }
  ///checks if the player has won three games already
  if (p2Score.textContent == 3) {
    document.getElementById('name--2').innerHTML = '<h3>Player 2 Wins!!!!</h3>';
    document.getElementById('name--1').innerHTML =
      '<h3>Player 1 Loses!!!!</h3>';
    p1ShootBtn.classList.add('hidden');
    p2ShootBtn.classList.add('hidden');
  }
});
//newGame
newGameBtn.addEventListener('click', newGame);
