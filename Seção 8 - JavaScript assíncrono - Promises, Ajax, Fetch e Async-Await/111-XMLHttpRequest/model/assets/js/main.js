const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(obj.method, obj.url, true)
        xhr.send()
    
        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText)
            } else {
                reject(xhr.statusText)
            }
        })
    })
}

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
    const objConfig = {
        method: 'GET',
        url: href
    }

    try {
        const result = await request(objConfig)
        carregaResultado(result)
    } catch (error) {
        console.log('Error', error)
    }
}

function carregaResultado(response){
    const resultado = document.querySelector('.result')
    resultado.innerHTML = response
}

/*
const request = obj => {
    const xhr = new XMLHttpRequest()
    //method, url, async
    xhr.open(obj.method, obj.url, true)
    //Quando for POST
    xhr.send()

    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300){
            obj.success(xhr.responseText)
        } else {
            obj.error(xhr.statusText)
        }
    })
}

document.addEventListener('click', e => {
    const element = e.target;
    const tag = element.tagName.toLowerCase()

    if (tag === 'a'){
        e.preventDefault()
        carregaPagina(element)
    }
})

function carregaPagina(element){
    const href = element.getAttribute('href')
    request({
        method: 'GET',
        url: href,
        success(response){
            carregaResultado(response)
        },
        error(errorText){
            console.log('Error', errorText)
        }
    })
}

function carregaResultado(response){
    const resultado = document.querySelector('.result')
    resultado.innerHTML = response
}
*/