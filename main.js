const daysEl = document.querySelector('.days .text');
const hoursEl = document.querySelector('.hours .text');
const minutesEl = document.querySelector('.minutes .text');
const secondsEl = document.querySelector('.seconds .text');

const time = new Date('January 20 2021 00:00:00');

updateTime();

setInterval(updateTime, 1000);

function updateTime(){
  let currentTime = new Date();

  let diff = time - currentTime;

  const s = Math.floor(diff/1000)%60,
      m = Math.floor(diff/1000/60)%60,
      h = Math.floor(diff/1000/60/60)%24,
      d = Math.floor(diff/1000/60/60/24);

    daysEl.innerHTML = d<10 ? '0'+d : d;
    hoursEl.innerHTML = h<10 ? '0'+h : h;
    minutesEl.innerHTML = m<10 ? '0'+m : m;
    secondsEl.innerHTML = s<10 ? '0'+s : s;
}