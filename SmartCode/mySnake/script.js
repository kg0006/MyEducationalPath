const blockSize = 20;
const rows = 25;
const columns = 25;

let board;
let context;

let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

let speedX = 0;
let speedY = 0;

let snakeBody = [];

let foodX;
let foodY;

let gameOver = false;
let gameInterval;

window.onload = function () {
  board = document.getElementById("can");

  board.height = rows * blockSize;
  board.width = columns * blockSize;

  board.style.height = `${board.height}px`;
  board.style.width = `${board.width}px`;

  context = board.getContext("2d");

  placeFood();
  document.addEventListener("keyup", changeDirection);
  gameInterval = setInterval(update, 150);
};

function placeFood() {
  foodX = Math.floor(Math.random() * columns) * blockSize;
  foodY = Math.floor(Math.random() * rows) * blockSize;
}

function changeDirection(event) {
  if (event.code == "ArrowUp" && speedY != 1) {
    speedX = 0;
    speedY = -1;
  } else if (event.code == "ArrowDown" && speedY != -1) {
    speedX = 0;
    speedY = 1;
  } else if (event.code == "ArrowLeft" && speedX != 1) {
    speedX = -1;
    speedY = 0;
  } else if (event.code == "ArrowRight" && speedX != -1) {
    speedX = 1;
    speedY = 0;
  }
}

function update() {
  if (gameOver) {
    end();
    return;
  }

  context.fillStyle = "green";
  context.fillRect(0, 0, board.width, board.height);

  context.fillStyle = "red";
  context.fillRect(foodX, foodY, blockSize, blockSize);

  if (snakeX == foodX && snakeY == foodY) {
    snakeBody.push([foodX, foodY]);
    placeFood();
  }

  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }
  if (snakeBody.length) {
    snakeBody[0] = [snakeX, snakeY];
  }

  context.fillStyle = "black";
  snakeX += speedX * blockSize;
  snakeY += speedY * blockSize;

  context.fillRect(snakeX, snakeY, blockSize, blockSize);
  for (let i = 0; i < snakeBody.length; i++) {
    context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
  }

  if (
    snakeX < 0 ||
    snakeX > columns * blockSize ||
    snakeY < 0 ||
    snakeY > rows * blockSize
  ) {
    gameOver = true;
  }

  for (let i = 0; i < snakeBody.length; i++) {
    if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
      gameOver = true;
    }
  }
}

function end() {
  gameOver = true;

  const gameOverContainer = document.getElementById("gameOverContainer");
  gameOverContainer.innerHTML = `
     <div style="text-align: center; margin-top: 20px;">
       <h1 style="color: red;">Game Over</h1>
       <button id="restartButton" style="padding: 10px 20px; font-size: 16px;">Restart</button>
     </div>
   `;

  document.removeEventListener("keyup", changeDirection);

  const restartButton = document.getElementById("restartButton");
  restartButton.addEventListener("click", restartGame);
}

function restartGame() {
  snakeX = blockSize * 5;
  snakeY = blockSize * 5;
  speedX = 0;
  speedY = 0;
  snakeBody = [];
  gameOver = false;

  const gameOverContainer = document.getElementById("gameOverContainer");
  gameOverContainer.innerHTML = "";

  document.addEventListener("keyup", changeDirection);

  placeFood();
  clearInterval(gameInterval);
  gameInterval = setInterval(update, 150);
}
