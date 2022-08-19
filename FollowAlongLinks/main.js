const $links = document.querySelectorAll("a")
const highlight = document.createElement("span")
highlight.classList.add("highlight")
document.body.appendChild(highlight)



$links.forEach( link => {
    link.addEventListener("mouseover", hoverEffect)
})

function hoverEffect () {
    const linkCoordenates = this.getBoundingClientRect()
    const coordenates = {
        width: linkCoordenates.width,
        height: linkCoordenates.height,
        x: linkCoordenates.x + window.scrollX,
        y: linkCoordenates.y + window.scrollY,
    }
    highlight.style.width = `${coordenates.width}px`
    highlight.style.height = `${coordenates.height}px`
    highlight.style.transform = `translate(${coordenates.x}px, ${coordenates.y}px)`
}