import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
  getSnakeHead,
  snakeIntersection,
} from "./snake";
import { update as updateFood, draw as drawFood } from "./food";
import { outsideGrid } from "./grid";
import { draw as drawResult, getResult } from "./result";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");
const resultElement = document.getElementById("result");

function main(currentTime) {
  if (gameOver) {
    let isTryAgain = confirm(
      `you lose :( \n Your result is ${getResult()}. \nDo you want to try again?`
    );
    if (isTryAgain) {
      window.location = "/";
    }
    return;
  }

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
  chackDeath();
}

function drawGame() {
  gameBoard.innerHTML = "";
  resultElement.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
  drawResult(resultElement);
}

function chackDeath() {
  // gameOver = outsideGrid(getSnakeHead());
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
