const itemsEl = document.querySelectorAll('.item');

itemsEl.forEach((itemEl) => {
  console.log(`Категория: ${itemEl.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${itemEl.children[1].children.length}`);
});
