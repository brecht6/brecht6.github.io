const daysEl = document.querySelector(".days");
const hoursEl = document.querySelector(".hours");
const minsEl = document.querySelector(".mins");
const secondsEl = document.querySelector(".seconds");


let countDownDate = new Date("May 12, 2023").getTime();

function countdown() {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (days != daysEl.innerText) {
        daysEl.innerText = days;
        animateCSS(daysEl);
    }

    if (hours != hoursEl.innerText) {
        hoursEl.innerText = hours;
        animateCSS(hoursEl);
    }

    if (minutes != minsEl.innerText) {
        minsEl.innerText = minutes;
        animateCSS(minsEl);
    }

    if (seconds != secondsEl.innerText) {
        secondsEl.innerText = seconds;
        animateCSS(secondsEl);
    }
}


function animateCSS(element) {
    element.classList.add("animation");
    setTimeout(() => element.classList.remove("animation"), 500);
}

countdown();
setInterval(countdown, 1000);

//korok click arrow function
document.querySelector(".korok").onclick = () => new Audio("media/yahaha - noise removed.mp3").play();

// const korok = document.querySelector(".korok");
// korok.onclick = playSoundClick;

// function playSoundClick() {
//     const audio = new Audio(`media/yahaha - noise removed.mp3`);
//     audio.play();
// }


