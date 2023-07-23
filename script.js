const countdown = document.querySelector('.countdown');
let targetDate = new Date();
//targetDate.setHours(targetDate.getHours() + 1);
//targetDate.setMinutes(targetDate.getMinutes()+30);

let interval;

function startInterval() {
  interval = setInterval(() => {
    // Get today's date and time (ms)
    const now = new Date().getTime();

    // Distance from now and the target date (ms)
    const distance = targetDate - now;

    // Time calculation
    const hours = String(Math.floor(distance / (1000 * 60 * 60))).padStart(2, '0');
    const mins = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');

    // Display result
    countdown.innerText = `${hours} : ${mins} : ${seconds}`;

    // If the target date is reached
    if (distance < 0) {
      // Stop countdown
      clearInterval(interval);
      countdown.innerText = `00 : 00 : 00`;

      // Display message
      console.log("Countdown reset and started again");

      // Reset the target date to start again
      targetDate.setSeconds(targetDate.getSeconds() + 16);

      // Start the countdown again after 2 seconds
      setTimeout(startInterval, 2000);
    }
  }, 1000);
}



function setTargetDate(hours, minutes=0, seconds=0) {
  targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + hours);
  targetDate.setMinutes(targetDate.getMinutes() + minutes);
  targetDate.setSeconds(targetDate.getSeconds() + seconds);
}

setTargetDate(1,30)



startInterval();
