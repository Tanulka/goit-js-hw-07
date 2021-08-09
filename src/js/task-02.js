const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const ulIngredientsEl = document.querySelector('#ingredients');
console.log(ulIngredientsEl);

const itemIngredientsWithText = ingredients.map((ingr) => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingr;
  return itemEl;
});

ulIngredientsEl.append(...itemIngredientsWithText);

console.log(document);
