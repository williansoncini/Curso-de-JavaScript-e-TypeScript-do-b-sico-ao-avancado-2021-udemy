const mongoose = require("mongoose")
const validator = require('validator')
const bcryptjs = require('bcryptjs')

const LoginSchema = new mongoose.Schema({
    email : { type: String, required: true},
    password : {type: String, required : true}
})

const LoginModel = mongoose.model('Login', LoginSchema)

class Login {
    constructor(body) {
        this.body = body;
        this.errors = []
        this.user = null
    }

    async register(){
        await this.valida()
        if(this.errors.length > 0) return 

        const salt = bcryptjs.genSaltSync(10)
        this.body.password = bcryptjs.hashSync(this.body.password, salt)

        this.user = await LoginModel.create(this.body)
    }

    async valida(){
        this.cleanUp()

        await this.userExists()

        !validator.isEmail(this.body.email) && this.errors.push('Que e-mail é esse? Capricha mais ai! Senão nada de cadastro para você.')
        if (this.body.password.length < 3 || this.body.password.length > 50 ) this.errors.push('Ajeita essa senha ai! A coisa ta feia.')
    }

    cleanUp(){
        for(const key in this.body){
            if (typeof this.body[key] !== 'string'){
                this.body[key] = ''
            }
        }
        
        this.body = {
            email : this.body.email,
            password : this.body.password
        }
        
    }

    async userExists() {
        this.user = await LoginModel.findOne({ email: this.body.email})
        if (this.user) this.errors.push('Esse email já está em uso.')
    }

    async login() {
        this.cleanUp()
        if(this.errors.length > 0) return 
        this.user = await LoginModel.findOne({ email: this.body.email})

        if (!this.user) {
            this.errors.push('E-mail ou senha inválidos')
            return
        }

        if (!bcryptjs.compareSync(this.body.password, this.user.password)){
            this.errors.push('E-mail ou senha inválidos')
            this.user = null
            return
        }  
    }
}

module.exports = Login