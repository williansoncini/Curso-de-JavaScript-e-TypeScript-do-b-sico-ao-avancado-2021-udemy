const Contato = require('../models/ContatoModel')

exports.index = async (req, res) => {
    const contatos = await Contato.getAll()

    res.render('index', {contatos}) 
}

