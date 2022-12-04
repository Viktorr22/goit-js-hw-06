
const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

function inputChange(e) {  
    
    text.style.fontSize = e.target.value + 'px';   
        
  } 

input.addEventListener('input', inputChange);
    


