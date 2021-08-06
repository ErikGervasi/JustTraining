const daysEl = document.getElementById("days");
const hoursEL = document.getElementById("hours");
const minsEL = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
const pontos = document.getElementById("pontos")
const newYears = " 06 august 2021 20:00";

function countdown(){

    const dateJogo = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (dateJogo - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

   daysEl.innerHTML = days.toString().padStart(2, "0") + " : ";
   hoursEL.innerHTML = hours.toString().padStart(2, "0") + " : "
   minsEL.innerHTML = mins.toString().padStart(2, "0") + " : ";
   secondsEl.innerHTML = seconds.toString().padStart(2, "0");

}



countdown();

setInterval(countdown, 1000);
