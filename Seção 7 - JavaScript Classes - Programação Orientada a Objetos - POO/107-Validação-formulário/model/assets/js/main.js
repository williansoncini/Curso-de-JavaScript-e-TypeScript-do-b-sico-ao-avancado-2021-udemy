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
        const senhasValidas = this.validaSenhas()

        if (camposValidos && senhasValidas){
            alert('Formulário enviado')
            this.formulario.submit()
        }
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
                if(!this.validaCPF(campo)) valid = false
            }

            if (campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false
            }
        }

        return valid
    }

    validaUsuario(campo){
        const usuario = campo.value
        let valid = true
        if(usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'O nome do usuário precisa ter entre 3 e 12 caracteres')
            valid = false
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.criaErro(campo, 'O nome do usuario precisa conter apenas letras e números')
            valid = false
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

    validaSenhas(){
        let valid = true
        const senha = this.formulario.querySelector('.senha')
        const confirmaSenha = this.formulario.querySelector('.confirma-senha')

        if (senha.value !== confirmaSenha.value){
            valid = false
            this.criaErro(senha, 'As senhas precisam ser iguais')
            this.criaErro(confirmaSenha, 'As senhas precisam ser iguais')
        }

        if (senha.value.length < 6 || senha.length > 12){
            valid = false
            this.criaErro(senha, 'A senha precisa ter um tamanho de 6 a 12 caracteres')
        }

        if (confirmaSenha.value.length < 6 || confirmaSenha.length > 12){
            valid = false
            this.criaErro(confirmaSenha, 'A senha precisa ter um tamanho de 6 a 12 caracteres')
        }

        return valid
    }

    criaErro(campo, msg){
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend', div)
    }
}

const valida = new ValidaFormulario()