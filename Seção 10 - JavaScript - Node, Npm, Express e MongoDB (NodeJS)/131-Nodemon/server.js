const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(`Hello world!
        <form action='/' method='POST' >
            <input type='text' name='name'/> 
            <button>Enviar</button>
        </form>
    `)
})

app.post('/', (req, res) => {
    res.send('Recebi o Post')
})

app.get('/ccontato', (req,res) => { 
    res.send('Obrigado por entrar em contato conosco')
})

app.listen(3000, () => {
    console.log('http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})
