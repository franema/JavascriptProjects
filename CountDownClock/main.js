const $timeLeft = document.querySelector(".display__time-left")
const $endTime = document.querySelector(".display__end-time")
const $buttons = document.querySelectorAll(".timer__button")
let countdown 


function timer(seconds) {
    clearInterval(countdown)
    const now = Date.now()
    const then = now + seconds * 1000
    displayTimeLeft(seconds)
    displayEndTime(then)
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000)
        if (secondsLeft < 0) {
            clearInterval(countdown)
            return
        }
        displayTimeLeft(secondsLeft)
    }, 1000)
}


function displayTimeLeft (seconds) {
    const minutes = Math.floor(seconds / 60)
    const remainderSeconds = seconds % 60
    $timeLeft.textContent = `${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp)
    const hours = end.getHours()
    const minutes = end.getMinutes()
    $endTime.textContent = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`
}

function getTime () {
    const seconds = this.dataset.time
    timer(seconds)
}

$buttons.forEach(button => button.addEventListener("click", getTime))
document.customForm.addEventListener("submit", function(e) {
    e.preventDefault()
    const minutes = this.minutes.value
    const seconds = minutes * 60
    timer(seconds)
    this.reset()
})
