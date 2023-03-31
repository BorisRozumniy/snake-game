import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 5;
const snakeBody = [
  { x: 11, y: 11 },
  { x: 11, y: 12 },
  { x: 11, y: 13 },
  { x: 10, y: 13 },
];
let newSegments = 0;

export function update() {
  // console.log('newSegments', newSegments);
  addSegments();

  const inputDirection = getInputDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
    // console.log(snakeBody);
  }

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  });
}

export function expandSnake(amount) {
  newSegments += amount;
  console.log("expandSnake", newSegments, amount);
}

export function onSnake(position) {
  const isSegmentIn = snakeBody.some((segment) =>
    equelPositions(segment, position)
  );
  // console.log("onSnake", position, isSegmentIn);
  return isSegmentIn;
  // return snakeBody.some((segment) => {
  //   return equelPositions(segment, position);
  // });
}

function equelPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegments() {
  console.log('addSegments, newSegments:', newSegments);
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
    console.log("snakeBody in add Segments", snakeBody);
  }

  newSegments = 0;
}
