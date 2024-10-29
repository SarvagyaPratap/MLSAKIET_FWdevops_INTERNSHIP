document.addEventListener('DOMContentLoaded', () => {
  const display = document.querySelector('.input');
  const buttons = Array.from(document.querySelectorAll('.button'));

  buttons.map(button => {
      button.addEventListener('click', (e) => {
          setDisplay(e.target.innerText, display);
      });
  });

  function setDisplay(input, displayElement) {
      if (input === '=' && displayElement.value !== '') {
          displayElement.value = eval(displayElement.value);
      } else if (input === 'C' && displayElement.value !== '') {
          displayElement.value = '';
      } else if (input === 'AC') {
          displayElement.value = '';
      } else {
          displayElement.value += input;
      }
  }
});
