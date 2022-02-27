exports.paginaInicial = (req, res) => {
    res.render('index')
    return
}

exports.trataPost = (req, res) => {
    res.send('É aqui que você jogou o seu post?')
    return
}