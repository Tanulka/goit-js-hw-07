const inputEl = document.querySelector('input');
const btnRenderEl = document.querySelector('[data-action="render"]');
const btnDestroyEl = document.querySelector('[data-action="destroy"]');
const divBoxesEl = document.getElementById('boxes');

btnRenderEl.addEventListener('click', handleClick);
btnDestroyEl.addEventListener('click', destroyBoxes);

function handleClick() {
  if (divBoxesEl !== 0) {
    divBoxesEl.innerHTML = '';
  }

  createBoxes(Number.parseInt(inputEl.value, 10));
}

function destroyBoxes() {
  divBoxesEl.innerHTML = '';
}

function createBoxes(amount) {
  const array = [];
  let value = 30;

  for (let i = 0; i < amount; i++) {
    value += 10;
    const div = `<div style="width: ${value}px; height: ${value}px; background-color: rgb(${Math.random() * 256}, ${
      Math.random() * 256
    }, ${Math.random() * 256})"></div>`;

    array.push(div);
  }

  divBoxesEl.insertAdjacentHTML('beforeend', array.join(''));
}
