let coin = document.querySelector(".coin-container");
let playButton = document.querySelector("#play-button");
let resetButton = document.querySelector("#reset-button");

let headsPoints = 0;
let tailsPoints = 0;

function tossCoin() {
  let result = Math.random();
  //coin.style.animation = "none";

  if (result < 0.5) {
    setTimeout(function () {
      coin.style.animation = "spin-heads 3s forwards";
    }, 100);
    headsPoints++;
  } else {
    setTimeout(function () {
      coin.style.animation = "spin-tails 3s forwards";
    }, 100);
    tailsPoints++;
  }
  coin.style.animation = "none";
  setTimeout(updatePoints, 3000);
}

function updatePoints() {
  document.querySelector(
    "#heads-points"
  ).textContent = `Heads : ${headsPoints}`;
  document.querySelector(
    "#tails-points"
  ).textContent = `Tails : ${tailsPoints}`;
}

playButton.addEventListener("click", tossCoin);

function reset() {
  headsPoints = 0;
  tailsPoints = 0;
  document.querySelector(
    "#heads-points"
  ).textContent = `Heads : ${headsPoints}`;
  document.querySelector(
    "#tails-points"
  ).textContent = `Tails : ${tailsPoints}`;
}
resetButton.addEventListener("click", reset);
