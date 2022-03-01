import validator from 'validator'

export default class Login {
    constructor(formClass){
        this.form = document.querySelector(formClass)
    }

    init(){
        this.events()
    }

    events(){
        if (!this.form) return
        this.form.addEventListener('submit', e => {
            e.preventDefault()
            this.validate(e)
        })
    }

    validate(e){
        const el = e.target
        const emailInput = this.form.querySelector('input[name="email"]')
        console.log(emailInput)
        const passwordInput = this.form.querySelector('input[name="password"]')
        console.log(passwordInput)
        let error = false

        if (!validator.isEmail(emailInput.value)) {
            alert('Validação no front - Email inválido!')
            error = true
            return
        } 
        if (passwordInput.value.length < 3 || passwordInput.value.length > 50){
            alert('Validação no front - Password inválido!')
            error = true
            return
        } 

        if (!error) el.submit()
    }
}