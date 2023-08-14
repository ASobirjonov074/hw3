const Btns = document.querySelectorAll('.H1 button')
const numScreen = document.querySelector('.numScreen')
const current = 0
Btns.forEach(btn => {
    btn.onclick = () => {
        let btnType = btn.getAttribute('data-type')
        if (btnType === "plus") {
            current = current + 1
            numScreen.innerHTML = current
        } else if (btnType === "minus") {
            current = current - 1
            numScreen.innerHTML = current
        } else if (btnType === "random") {
            current = Math.round(Math.random() * (100 - -100) + -100)
            numScreen.innerHTML = current
        } else if (btnType === "reset") {
            current = 0
            numScreen.innerHTML = current
        }
    }
})



const timer = document.querySelector('.timer')
const timerBtns = timer.querySelectorAll('button')
const timerScreen = timer.querySelector('h1')
let interval
let minutes = 0
let seconds = 0
let miliseconds = 0
let continueNone = document.querySelector(".continue")

timerBtns.forEach(btn => {
    btn.onclick = () => {
        let btnType = btn.getAttribute('data-type')

        switch (btnType) {
            case "start":
                startTimer()
                break;
            case "stop":
                clearInterval(interval)
                continueNone.style = "display:flex;"
                break;
            case "continue":
                startTimer()
            case "reset":
                clearInterval(interval)
                minutes = 0
                seconds = 0
                miliseconds = 0
                timerScreen.innerHTML = "00:00:00"
                break;
        }
    }
})

function startTimer() {
    clearInterval(interval)
    interval = setInterval(() => {
        miliseconds++
        if (miliseconds === 100) {
            miliseconds = 0
            seconds++
        } else if (seconds === 60) {
            seconds = 0
            minutes++
        }

        timerScreen.innerHTML = `${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds} : ${miliseconds < 10 ? `0${miliseconds}` : miliseconds}`
    }, 1);
}


