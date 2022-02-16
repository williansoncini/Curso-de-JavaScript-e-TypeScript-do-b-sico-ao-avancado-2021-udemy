const container = document.querySelector(".container")

const styleContainer = getComputedStyle(document.body)
const backgroundContainer = styleContainer.backgroundColor
const colorContainer = styleContainer.color

const elementsP = container.querySelectorAll('p')

for (let element of elementsP){
    element.style.backgroundColor = backgroundContainer
    element.style.color = colorContainer
}
