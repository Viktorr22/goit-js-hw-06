const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const ingredientsArr = ingredients.map((element) => {
const ingredientsItem = document.createElement('li');
ingredientsItem.textContent = element;
ingredientsItem.classList.add('item');
  return ingredientsItem; 
 
}) 

list.append(...ingredientsArr);
console.log(list);