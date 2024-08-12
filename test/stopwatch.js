const appendTens = document.getElementById("tens");
const appendSeconds = document.getElementById("seconds");
const btnStart = document.getElementById("btn-Start");
const btnStop = document.getElementById("btn-Stop");
const btnReset = document.getElementById("btn-Reset");

let seconds = 0;
let tens = 0;
let Interval;

btnStart.onclick = function () {
  // 기존에 있던 setInterval 없애고
  clearInterval(Interval);

  Interval = setInterval(startTimer, 10);
};

btnStop.onclick = function () {
  clearInterval(Interval);
};

btnReset.onclick = function () {
  clearInterval(Interval);

  seconds = 0;
  tens = 0;

  appendSeconds.innerHTML = seconds;
  appendTens.innerHTML = tens;
};

function startTimer() {
  tens++;

  if (tens <= 9) {
    appendTens.innerHTML = tens;
  }

  if (tens > 9) {
    appendTens.innerHTML = tens;
  }

  // tens가 99보다 클 때
  if (tens > 99) {
    //  seconds 1 올리고
    seconds++;
    // appendSeconds에도 반영하기
    appendSeconds.innerHTML = seconds;
    // tens appendTens 0으로
    tens = 0;
    appendTens.innerHTML = 0;
  }
}