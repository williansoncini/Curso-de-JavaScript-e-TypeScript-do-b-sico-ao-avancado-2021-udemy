function main(){
    const elementsCreated = createElements()
    insertElementsInDOM(elementsCreated)
}

function insertElementsInDOM(elements){
    const container = document.querySelector('.container')

    for (let i=0; i< elements.length; i++){
        container.appendChild(elements[i])
    }
}

function createElements(){
    const elementList = getElementList()

    let elements = [];
    for (let i = 0; i < elementList.length; i++){
        const {tag, texto} = elementList[i]

        const element = createElement(tag)
        insertTextInElement(element, texto)
        elements.push(element)
    }
    return elements
}

function getElementList(){
    const elementList = [
        {tag: 'p', texto:'Frase 1'},
        {tag: 'div', texto:'Frase 2'},
        {tag: 'footer', texto:'Frase 3'},
        {tag: 'section', texto:'Frase 4'},
    ]

    return elementList
}

function createElement(element){
    return document.createElement(element)
}

function insertTextInElement(element, text){
    return element.innerText = text
}

main()