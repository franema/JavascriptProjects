const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const startButton = document.querySelector(".start-button")
let lastHole
let timeUp = false
let score = 0

function randTime(min, max) {
    return Math.round(Math.random() * (max-min) + min)
}

function randHole (holes) {
   const index = Math.floor(Math.random() * holes.length)
   const hole = holes[index]
   if(hole === lastHole) {
    return randHole(holes)
   }
   lastHole = hole
   return hole
}

function peepMole () {
    const time = randTime(200, 1000)
    const hole = randHole(holes)
    hole.classList.add("up")
    setTimeout(() => {
        hole.classList.remove("up")
        if(!timeUp) {
            peepMole()
        }
    }, time)
}

function updateScore (e) {
    if (!e.isTrusted) return
    scoreBoard.textContent++ 
    this.classList.remove("up")
}

function startGame () {
    scoreBoard.textContent = 0
    timeUp = false
    peepMole()
    setTimeout(() => {
        timeUp = true
    }, 10000)
}

startButton.addEventListener("click", startGame)
moles.forEach(mole => {
    mole.addEventListener("click", updateScore)
})