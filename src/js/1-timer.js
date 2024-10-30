import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const inputId = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');

btnStart.disabled = true;
let userSelectedDate;
let timeInerval;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (!selectedDates || !selectedDates[0]) return;
    const selectedDate = selectedDates[0];
    console.log(selectedDate);

    if (selectedDate < new Date()) {
      iziToast.error({
        timeout: 10000,
        position: 'topRight',
        message: 'Please choose a date in the future',
      });
      btnStart.disabled = true;
    } else {
      userSelectedDate = selectedDates[0];
      btnStart.disabled = false;
    }
  },
};
const fp = flatpickr(inputId, options);

btnStart.addEventListener('click', startTimer);

function startTimer() {
  btnStart.disabled = true;
  inputId.disabled = true;

  timeInterval = setInterval(() => {
    const currentTime = new Date();
    const msDifference = userSelectedDate - currentTime;

    if (msDifference <= 0) {
      clearInterval(timeInerval);
      inputId.disabled = false;
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(msDifference);

    daysValue.textContent = String(days).padStart(2, '0');
    hoursValue.textContent = String(hours).padStart(2, '0');
    minutesValue.textContent = String(minutes).padStart(2, '0');
    secondsValue.textContent = String(seconds).padStart(2, '0');
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000));
console.log(convertMs(140000));
console.log(convertMs(24140000));
console.log(inputId);
