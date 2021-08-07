const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const UlIngredientsEl = document.querySelector('#ingredients');
console.log(UlIngredientsEl);

const itemIngredientsWithText = ingredients.map((ingr) => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingr;
  return itemEl;
});

UlIngredientsEl.append(...itemIngredientsWithText);

console.log(document);
