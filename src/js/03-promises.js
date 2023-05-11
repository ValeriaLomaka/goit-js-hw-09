import { Notify } from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onBtnClick);

function onBtnClick(e) {
  e.preventDefault();

  let delay = Number(e.currentTarget.elements.delay.value);
  let step = Number(e.currentTarget.elements.step.value);
  const amount = Number(e.currentTarget.elements.amount.value);
  
  for (let i = 0; i < amount; i++) {
    delay += step;
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}
  function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    });
  }
