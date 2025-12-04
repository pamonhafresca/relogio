const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");
const digital = document.querySelector(".digital");

function updateClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secDeg = (seconds / 60) * 360;
    const minDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hourDeg = (hours / 12) * 360 + (minutes / 60) * 30;

    secondHand.style.transform = `rotate(${secDeg}deg)`;
    minuteHand.style.transform = `rotate(${minDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;

    digital.innerHTML =
        `${String(hours).padStart(2, "0")}:` +
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}`;
}

setInterval(updateClock, 1000);
updateClock();
