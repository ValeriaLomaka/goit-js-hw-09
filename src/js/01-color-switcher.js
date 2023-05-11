
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const DELAY = 1000;
let timerId = null;

stopBtn.setAttribute('disabled', 'true');

startBtn.addEventListener('click', () => {
    timerId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, DELAY);
    
 stopBtn.removeAttribute('disabled', 'true');
 startBtn.setAttribute('disabled', 'true');
})

stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    startBtn.removeAttribute('disabled', 'true');
    stopBtn.setAttribute('disabled', 'true');
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
