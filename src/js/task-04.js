const counterValue = document.querySelector('#value');
const btnIncrement = document.querySelector('[data-action="increment"]');
const btnDecrement = document.querySelector('[data-action="decrement"]');

btnIncrement.addEventListener('click', handleInrementClick);
btnDecrement.addEventListener('click', handleDecrementClick);

function handleInrementClick() {
  counterValue.textContent = Number(counterValue.textContent) + 1;
}

function handleDecrementClick() {
  counterValue.textContent -= 1;
}
