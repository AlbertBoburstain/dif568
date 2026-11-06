



const button = document.getElementById('clickerBtn');

let count = 0;

button.addEventListener('click', () => {
  count++;
  
  button.textContent = `Кликов: ${count}`;
  
  if (count === 10) {
    button.style.color = 'red';
  }
}); 