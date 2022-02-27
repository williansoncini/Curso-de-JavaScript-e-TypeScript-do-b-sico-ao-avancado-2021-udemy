exports.paginaInicial = (req, res) => {
    res.send(`Hello world!
    <form action='/' method='POST' >
        <input type='text' name='name'/> 
        <button>Enviar</button>
    </form>
`)
}

exports.trataPost = (req, res) => {
    res.send('É aqui que você jogou o seu post?')
}