// fetch('pessoas.json')
//     .then(response => response.json())
//     .then(json => carregaDadosNaPagina(json))

axios('pessoas.json')
    .then(response => carregaDadosNaPagina(response.data))

function carregaDadosNaPagina(json){
    const table = document.createElement('table')
    for (let pessoa of json){
        const tr = document.createElement('tr')
        
        let td_nome = document.createElement('td')
        td_nome.innerHTML = pessoa.nome
        tr.appendChild(td_nome)

        let td_email = document.createElement('td')
        td_email.innerHTML = pessoa.email
        tr.appendChild(td_email)

        let td_salario = document.createElement('td')
        td_salario.innerHTML = pessoa.salario
        tr.appendChild(td_salario)

        table.appendChild(tr)
    }

    const resultado = document.querySelector('.resultado')
    resultado.appendChild(table)
}
