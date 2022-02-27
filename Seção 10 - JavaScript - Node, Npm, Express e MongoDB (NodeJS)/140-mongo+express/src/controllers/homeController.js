const HomeModel = require('../models/HomeModel')

HomeModel.create({
    titulo: 'Titulo de teste',
    descricao : 'Descricao de teste'
})
    .then(data => console.log(data))
    .catch(e => console.log(e))

exports.paginaInicial = (req, res) => {
    res.render('index')
    return
}

exports.trataPost = (req, res) => {
    res.send('É aqui que você jogou o seu post?')
    return
}