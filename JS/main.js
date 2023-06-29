const daysEL = document.getElementById("days");
const hoursEL = document.getElementById("hours");
const minutesEL = document.getElementById("minutes");
const secondsEL = document.getElementById("seconds");

const newYears = " 1 Jan 2024";

function countdown() {
  //(x2)date obj's
  //target date
  const newYearsDate = new Date(newYears);
  //current date
  const currentDate = new Date();

  //
  const totalSeconds = (newYearsDate - currentDate) / 1000;

  //totalSeconds/seconds in a day/hours in a day
  //using Math.floor to round the result to get the full number of days
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);

  //assign the calculated values to the inner-HTML of the selected elements
  daysEL.innerHTML = days;
  hoursEL.innerHTML = hours;
  minutesEL.innerHTML = minutes;
  secondsEL.innerHTML = seconds;
}

//initial call
countdown();

//1604059181 needs to be converted into (days, hours, minutes, seconds)
// calling the countdown function every(1000ms)
setInterval(countdown, 1000);
