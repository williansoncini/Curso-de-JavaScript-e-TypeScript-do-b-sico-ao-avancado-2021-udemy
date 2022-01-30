function systemFunctions(){
    const button = document.querySelector('#button')
    button.addEventListener('click', handleButton)

    function handleButton(event){
        event.preventDefault()
        function calculaImc(peso, altura){
            const imc = peso / altura**2
            return imc
        }
        
        
        function pegarMensagemImc(imc){
            if (imc < 18.5)
            return 'Abaixo do peso'
            else if (imc >= 18.5 && imc <= 24.9)
            return 'Peso normal'
            else if (imc >= 25 && imc <= 29.9)
            return 'Peso normal'
            else if (imc >= 30 && imc <= 34.9)
            return 'Obesidade grau 1'
            else if (imc >= 35 && imc <= 39.9)
            return 'Obesidade grau 2'
            else
            return 'Obesidade grau 3'
        }
        
        const peso = Number(document.querySelector('#peso').value)
        const altura = Number(document.querySelector('#altura').value)
        const resultado = document.querySelector('#resultado')
        
        const p = criaP()
        resultado.innerHTML = ''

        if (!peso || !altura){
            addClassToElement(p, 'error')
            p.innerHTML = 'Insira uma opção válida!'
            return resultado.appendChild(p)
        }

        const imc = calculaImc(peso, altura)
        
        const mensagem = pegarMensagemImc(imc)
        
        addClassToElement(p, 'success')
        p.innerHTML += `IMC: ${imc.toFixed(2)} - ${mensagem}`

        console.log(p)
        
        resultado.appendChild(p)
    }

    function criaP(){
        return document.createElement('p')
    }

    function addClassToElement(element, className){
        element.classList.add(className)
    }
    
}

systemFunctions()

