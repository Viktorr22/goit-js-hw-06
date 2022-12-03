const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const potatoesItem = document.createElement('li');
potatoesItem.textContent = 'Potatoes';
potatoesItem.classList.add('item');

const mushroomsItem = document.createElement('li');
mushroomsItem.textContent = 'Mushrooms';
mushroomsItem.classList.add('item');

const garlicItem = document.createElement('li');
garlicItem.textContent = 'Garlic';
garlicItem.classList.add('item');

const tomatosItem = document.createElement('li');
tomatosItem.textContent = 'Tomatos';
tomatosItem.classList.add('item');

const herbsItem = document.createElement('li');
herbsItem.textContent = 'Herbs';
herbsItem.classList.add('item');

const condimentsItem = document.createElement('li');
condimentsItem.textContent = 'Condiments';
condimentsItem.classList.add('item');

list.append(potatoesItem, mushroomsItem, garlicItem, tomatosItem, herbsItem, condimentsItem);
console.log(list);