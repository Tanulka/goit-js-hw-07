const inputEl = document.getElementById('font-size-control');
const spanEl = document.getElementById('text');

inputEl.addEventListener('input', handleInput);

function handleInput() {
  const value = inputEl.value;
  spanEl.style.fontSize = `${value}px`;
}
