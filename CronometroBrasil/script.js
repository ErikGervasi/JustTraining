const daysEl = document.getElementById("days");
const hoursEL = document.getElementById("hours");
const minsEL = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
const Years = " 22 april 1500 00:00";

function countdown(){

    const dateBrasil = new Date(Years);
    const currentDate = new Date();

    const totalSeconds = (currentDate - dateBrasil) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

   daysEl.innerHTML = days.toString().padStart(2, "0") + " : ";
   hoursEL.innerHTML = hours.toString().padStart(2, "0") + " : "
   minsEL.innerHTML = mins.toString().padStart(2, "0");
   
}

countdown();

setInterval(countdown, 1000);
