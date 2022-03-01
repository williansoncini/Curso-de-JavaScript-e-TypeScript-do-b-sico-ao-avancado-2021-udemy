const mongoose = require('mongoose')
const validator = require('validator')

const ContatoSchema = new mongoose.Schema({
    name: {type: String, required: true},
    surname: {type: String, required: false, default: ''},
    email: {type: String, required: false, default: ''},
    tel: {type: String, required: false, default: ''},
    created: {type: Date, default: Date.now}
})

function Contato(body) {
    this.body = body,
    this.errors = []
    this.contato = null
}

Contato.prototype.register = async function() {
    await this.valida()
    await this.contactExists()
    if(this.errors.length > 0) return
    this.contato = await ContatoModel.create(this.body)
}

Contato.prototype.valida = async function() {
    this.cleanUp()
    if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push('Email invalido colega')
    if(!this.body.name) this.errors.push('É necessário informar o nome')
    if (!this.body.email && !this.body.tel) this.errors.push("É necessário informar pelo menos um email ou um telefone")
}

Contato.prototype.cleanUp = function() {
    for (const key in this.body){
        if (typeof this.body[key] !== 'string')
            this.body[key] = ''
    }
    return
}

Contato.prototype.contactExists = async function() {
    this.contato = await ContatoModel.findOne({name: this.body.name})
    if (this.contato) return this.errors.push('Contato já existem, cadastra outro ai por favor')
}

Contato.prototype.edit = async function(id){
    if (typeof id !== 'string') return
    this.valida()
    if(this.errors.length > 0) return
    this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true })
}

Contato.findById = async function(id) {
    return await ContatoModel.findById(id)
}

Contato.getAll = async function(){
    const contatos = await ContatoModel.find().sort({ criadoEm: -1})
    return contatos
}

Contato.delete = async function(id){
    if (typeof id !== 'string') return
    const contato = await ContatoModel.findByIdAndDelete({ id: id})
    return contato
}

const ContatoModel = mongoose.model('Contato', ContatoSchema)
module.exports = Contato