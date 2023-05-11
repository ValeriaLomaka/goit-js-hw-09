import { Notify } from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onBtnClick);

const data = {};

function onBtnClick(evt) {
  evt.preventDefault();
  makeParams(evt);
  createPromisesChain();
}

function makeParams(evt) {
  const formData = new FormData(evt.currentTarget);
  formData.forEach((value, key) => {
    data[key] = +value;
  });
}

function createPromisesChain() {
  for (let i = 1; i <= data.amount; i+=1) {
    createPromise(i, data.delay)
      .then(({ position, delay }) => {
         Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
         Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    data.delay += data.step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}