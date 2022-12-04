let span = document.querySelector('#value');

let counterValue = 0;


const btnLess = document.querySelector('[data-action="decrement"]');
const lessOne = () => {
    counterValue -= 1;
    span.textContent = counterValue;
};
btnLess.addEventListener("click", lessOne);



const btnPlus = document.querySelector('[data-action="increment"]');
const plusOne = () => {
    counterValue += 1;
    span.textContent = counterValue;
};
btnPlus.addEventListener("click", plusOne);
