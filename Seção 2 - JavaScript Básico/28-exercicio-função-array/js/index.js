function meuEscopo () {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')


    // form.onsubmit = function (event) {
    //     alert('teste')
    //     event.preventDefault()
    // };

    const pessoas = []

    function fabricaPessoa (nome, sobrenome, peso, altura) {
        return {
            nome,
            sobrenome,
            peso,
            altura
        }
    }

    function receberEventForm (evento) {
        evento.preventDefault()

        const nome = form.querySelector('.nome').value
        const sobrenome = form.querySelector('.sobrenome').value
        const peso = form.querySelector('.peso').value
        const altura = form.querySelector('.altura').value

        const pessoa = fabricaPessoa(nome, sobrenome, peso, altura)
        pessoas.push(pessoa)
        console.log(pessoas)

        resultado.innerHTML += `<p> ${nome}, ${sobrenome}, ${peso}, ${altura} </p>`
    }

    form.addEventListener('submit', receberEventForm);
}

meuEscopo();