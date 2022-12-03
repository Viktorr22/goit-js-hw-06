const list = document.querySelector('#categories');


const items = list.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);


for (let i = 0; i < items.length; i += 1) {
    
    const namesCategories = items[i].querySelector('h2');
    console.log(`Category:${namesCategories.textContent}`);

    const listCategories = items[i].querySelector('ul');
  
    const itemsCategories = listCategories.querySelectorAll('li');
    console.log(`Elements: ${itemsCategories.length}`);
}





































