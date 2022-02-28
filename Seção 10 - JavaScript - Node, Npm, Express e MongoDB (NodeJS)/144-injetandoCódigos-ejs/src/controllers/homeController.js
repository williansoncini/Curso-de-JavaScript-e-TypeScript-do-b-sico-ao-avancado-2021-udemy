// const HomeModel = require('../models/HomeModel')

// HomeModel.create({
//     titulo: 'Titulo de teste',
//     descricao : 'Descricao de teste'
// })
//     .then(data => console.log(data))
//     .catch(e => console.log(e))

exports.paginaInicial = (req, res) => {
    req.session.usuario = { nome: 'Willian', logado:'true'}
    // req.flash('info', 'Teste')
    console.log(req.flash('info'))
    // console.log(req.session.usuario)
    res.render('index', {
        title: 'teste'
    })
    return
}

exports.trataPost = (req, res) => {
    res.send('É aqui que você jogou o seu post?')
    return
}