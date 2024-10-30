import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.querySelector('.form').addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const delayInput = event.target.elements.delay.value;
  const selectedState = event.target.elements.state.value;

  const delay = parseInt(delayInput, 10);

  createPromise(delay, selectedState)
    .then(delay => {
      iziToast.success({
        timeout: 5000,
        position: 'topRight',
        message: `👍 Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      iziToast.error({
        timeout: 5000,
        position: 'topRight',
        message: `👎 Rejected promise in ${delay}ms`,
      });
    });
}

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
