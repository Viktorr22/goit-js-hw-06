
const body = document.querySelector('body');
const btn = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

btn.addEventListener('click', changeColor);

function changeColor() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

console.log(getRandomHexColor());
