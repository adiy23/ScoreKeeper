const P1Button = document.querySelector("#p1button");
const P2Button = document.querySelector("#p2button");
const P1Display = document.querySelector("#p1display");
const P2Display = document.querySelector("#p2display");
const Reset = document.querySelector("#reset");
const playUntil = document.querySelector("#playTo");
var audio = new Audio("applause4.mp3");
let p1score = 0;
let p2score = 0;
let winningScore = playUntil;
let isGameOver = false;
P1Button.addEventListener("click", function () {
  if (!isGameOver) {
    p1score += 1;
    if (p1score === winningScore) {
      isGameOver = true;
      audio.play();
      P1Display.classList.add("winner");
      P2Display.classList.add("loser");
    }
    P1Display.textContent = p1score;
  }
});
P2Button.addEventListener("click", function () {
  if (!isGameOver) {
    p2score += 1;
    if (p2score === winningScore) {
      isGameOver = true;
      audio.play();
      P1Display.classList.add("loser");
      P2Display.classList.add("winner");
    }
    P2Display.textContent = p2score;
  }
});

Reset.addEventListener("click", resetScore);

function resetScore() {
  audio.pause();
  isGameOver = false;
  p1score = 0;
  p2score = 0;
  P1Display.textContent = p1score;
  P2Display.textContent = p2score;
  P1Display.classList.remove("winner", "loser");
  P2Display.classList.remove("winner", "loser");
}

playUntil.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  resetScore();
});
