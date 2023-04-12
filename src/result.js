let resultState = 0;

export const getResult = () => {
  return resultState;
};

export const setResult = (r = 1) => {
  resultState += r;
};

export function update(resultBlock) {
  console.log(resultBlock, resultState);
}

export function draw(resultBlock) {
  const resultElement = document.createElement("span");
  resultElement.innerText = resultState;
  resultBlock.appendChild(resultElement);
}
