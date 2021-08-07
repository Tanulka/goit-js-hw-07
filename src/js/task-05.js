const inputEl = document.getElementById('name-input');
console.dir(inputEl);
const outputEl = document.getElementById('name-output');

inputEl.addEventListener('input', inputHandler);

function inputHandler() {
  const value = inputEl.value;
  outputEl.textContent = value || 'незнакомец';
}
