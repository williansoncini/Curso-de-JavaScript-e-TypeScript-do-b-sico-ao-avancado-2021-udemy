fetch('pessoas.json')
    .then(response => response.json())
    .then(json => carregaDadosNaPagina(json))

function carregaDadosNaPagina(json){
    for (let pessoa of json){
        
    }
}