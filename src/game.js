import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from "./snake";
import { update as updateFood, draw as drawFood } from "./food";

let lastRenderTime = 0;
const gameBoard = document.getElementById("game-board");

function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  lastRenderTime = currentTime;

  updateGame();
  drawGame();
}

window.requestAnimationFrame(main);

function updateGame() {
  updateSnake();
  updateFood();
}

function drawGame() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

  // drawFood(gameBoard);
  // drawSnake(gameBoard);
