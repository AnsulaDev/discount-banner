const startcountDown = (duration, display) => {
    let countDown = duration;
    let hours, minutes, seconds;

    setInterval(() => {
        hours = parseInt(countDown / 3600, 10);
        minutes = parseInt((countDown % 3600) / 60, 10);
        seconds = parseInt(countDown % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if (--countDown < 0) {
            countDown = duration; // this reset the countDown
        }
    }, 1000);
};

window.onload = () => {
    const countTime = document.getElementById('countTime');
    const atOneHourInSeconds = 3600; // this set the countdown duration in here 
    startcountDown(atOneHourInSeconds, countTime);
};
