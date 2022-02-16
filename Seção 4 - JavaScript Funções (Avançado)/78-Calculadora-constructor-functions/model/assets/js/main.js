function Calculadora() {
    this.display = document.querySelector('.display')

    this.inicia = () => {
        cliqueBotoes()
        clearDisplay()
        pressEnter()
    }

    const cliqueBotoes = () => {
        document.addEventListener('click', function (e) {
            const element = e.target;

            if (element.classList.contains('btn-num'))
                return btnParaDisplay(element.innerText)

            if (element.classList.contains('btn-clear'))
                return clearDisplay()

            if (element.classList.contains('btn-delete'))
                return deleteOne()

            if (element.classList.contains('btn-equal'))
                return makeCount()


        }.bind(this))
    }

    const clearDisplay = () => this.display.value = ''

    const btnParaDisplay = (valor) => this.display.value += valor;
    
    const deleteOne = () => this.display.value = this.display.value.slice(0, -1)

    const makeCount = () => {
        let count = this.display.value

        if (!count)
            return

        try {
            this.display.value = String(eval(count))
        } catch (error) {
            return alert('Conta inválida')
        }
    }

    const pressEnter = () => {
        this.display.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                makeCount()
            }
        })
    }

}


const calculadora = new Calculadora()
calculadora.inicia()