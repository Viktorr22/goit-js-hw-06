
const body = document.querySelector('body');
const btn = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

btn.addEventListener('click', changeColor);

function changeColor() {  
  body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

console.log(getRandomHexColor());
