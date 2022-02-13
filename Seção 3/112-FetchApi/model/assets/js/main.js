
document.addEventListener('click', e => {
    const element = e.target;
    const tag = element.tagName.toLowerCase()

    if (tag === 'a'){
        e.preventDefault()
        carregaPagina(element)
    }
})

async function carregaPagina(element){
    const href = element.getAttribute('href')
    try {
        const response = await fetch(href)
        if (response.status !== 200) throw new Error('Status diferente de 200')
        const html = await response.text()
        carregaResultado(html)
    } catch (error) {
        console.log('Error', error)
    }
}

function carregaResultado(response){
    const resultado = document.querySelector('.result')
    resultado.innerHTML = response
}