const $slider = document.querySelector(".items")
let isDown = false
let startX
let scrollLeft

$slider.addEventListener("mousedown", mouseDown)
$slider.addEventListener("mouseleave", mouseLeave) 
$slider.addEventListener("mouseup", mouseUp) 
$slider.addEventListener("mousemove", mouseMove) 


function mouseDown (e) {
    isDown = true
    $slider.classList.add("active")
    startX = e.pageX - $slider.offsetLeft
    scrollLeft = $slider.scrollLeft
}

function mouseLeave () {
    isDown = false
    $slider.classList.remove("active")
}

function mouseUp () {
    isDown = false
    $slider.classList.remove("active")
}

function mouseMove (e) {
    if(!isDown) {
        return
    }
    e.preventDefault()
    const x = e.pageX - $slider.offsetLeft
    const walk = x - startX
    $slider.scrollLeft = scrollLeft - walk
}