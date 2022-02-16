function criaCalculadora(){
    return {
        display: document.querySelector('.display'),

        clearDisplay(){
            this.display.value = ''
        },

        inicia(){
            this.cliqueBotoes()
            this.clearDisplay()
            this.pressEnter()
        },

        cliqueBotoes(){
            document.addEventListener('click', function(e){
                const element = e.target;
                
                if (element.classList.contains('btn-num'))
                    return this.btnParaDisplay(element.innerText)

                if (element.classList.contains('btn-clear'))
                    return this.clearDisplay()

                if (element.classList.contains('btn-delete'))
                    return this.deleteOne()

                if (element.classList.contains('btn-equal'))
                    return this.makeCount()
                
                
            }.bind(this))
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        },
    
        deleteOne(){
            this.display.value = this.display.value.slice(0,-1)
        },

        makeCount(){
            let count = this.display.value

            if (!count)
                return
            
            try {
                this.display.value = String(eval(count))
            } catch (error) {
                return alert('Conta inválida')
            }
        },

        pressEnter(){
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13){
                    this.makeCount()
                }
            })
        }

    }
}

const calculadora = criaCalculadora()
calculadora.inicia()