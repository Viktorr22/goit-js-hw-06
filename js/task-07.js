/* <input id="font-size-control" type="range" min="16" max="96" />
    <br />
    <span id="text">Abracadabra!</span> */

const input = document.querySelector('#font-size-control');
console.log(input.min)
const text = document.querySelector('#text');
console.log(text.textContent);

function inputChange() {
    if (input.value === input.min) {
        text.classList.add('minfont');
        text.classList.remove('standartfont');
        
    }
    else if (input.value === input.max) {
        text.classList.add('maxfont');
        text.classList.remove('standartfont');
    }
    else {
        text.classList.add('standartfont');
        text.classList.remove('minfont');
    text.classList.remove('maxfont');}
} 

input.addEventListener('input', inputChange);
    


