const $bar = document.querySelector(".speed")
const $speedBar = document.querySelector(".speed-bar")
const video = document.querySelector(".flex")

function moveBar (e) {
    const y = e.pageY - this.offsetTop
    const percent = y/ this.offsetHeight
    barHeight = Math.round(percent * 100)
    const max = 4
    const min = 0.4
    const playbackRate = percent * (max-min) + min
    $speedBar.style.height = `${barHeight}%`
    $speedBar.textContent = playbackRate.toFixed(1) + "x"
    video.playbackRate = playbackRate
}

$bar.addEventListener("mousemove", moveBar)