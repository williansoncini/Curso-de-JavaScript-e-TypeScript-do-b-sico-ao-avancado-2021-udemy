class ValidaCPF {
    constructor(cpfEnviado){
        this.cpfEnviado = cpfEnviado
        Object.defineProperty(this, 'cpfLimpo', {
            writable: true,
            enumerable: true,
            configurable: true, 
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }

    sequencial(){
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo
    }

    geranovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2)
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos)
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1)
        return cpfSemDigitos + digito1 + digito2
    }

    static geraDigito(cpfSemDigito){
        let acumulador = 0
        let regressivo = cpfSemDigito.length + 1
        for(const digito of cpfSemDigito){
            acumulador += Number(digito) * regressivo
            regressivo--
        }

        const total = 11 - ( acumulador % 11)
        return total > 9 ? '0' : String(total)
    }

    valida(){
        if(!this.cpfLimpo) return false
        if(typeof this.cpfLimpo !== 'string') return false
        if(this.cpfLimpo.length !== 11) return false
        if(this.sequencial()) return false

        const novoCpf = this.geranovoCpf()
        return this.cpfLimpo === novoCpf 
    }

}

const validaCPF = new ValidaCPF('705.484.450-52')
console.log(validaCPF.valida())

