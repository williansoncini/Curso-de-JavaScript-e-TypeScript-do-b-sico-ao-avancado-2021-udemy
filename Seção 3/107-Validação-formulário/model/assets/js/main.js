class ValidaFormulario {
    constructor(){
        this.formulario = document.querySelector('.formulario')
        this.eventos()
    }

    eventos(){
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposSaoValidos()
    }

    camposSaoValidos(){
        let valid = true

        const errorTexts = this.formulario.querySelectorAll('.error-text')
        for(let error of errorTexts){
            error.remove()
        }

        const campos = this.formulario.querySelectorAll('.validar')

        for (let campo of campos){
            const label = campo.previousElementSibling.innerText
            if (!campo.value) {
                this.criaErro(campo, `Campo '${label}' não pode estar vazio` )
                valid = false
            }

            if (campo.classList.contains('cpf')){
                if(!validaCPF(campo)) valida = false
            }

        }

        return valid
    }

    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value)
        if(!cpf.valida()){
            this.criaErro(campo, 'Cpf inválido')
            return false
        }
        return true
    }

    criaErro(campo, msg){
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend', div)
    }
}

const valida = new ValidaFormulario()