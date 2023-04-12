import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from "./snake";
import { update as updateFood, draw as drawFood } from "./food";
import { draw as drawResult } from "./result";

let lastRenderTime = 0;
const gameBoard = document.getElementById("game-board");
const resultElement = document.getElementById("result");

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
  resultElement.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
  drawResult(resultElement);
}

