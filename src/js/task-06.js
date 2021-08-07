const inputEl = document.getElementById('validation-input');

const targetLength = Number.parseInt(inputEl.dataset.length, 10);
inputEl.addEventListener('blur', handleBlur);

function handleBlur() {
  const value = inputEl.value;
  if (value.length === targetLength) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
}
