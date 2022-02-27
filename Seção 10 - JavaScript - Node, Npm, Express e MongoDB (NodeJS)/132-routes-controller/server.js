const express = require('express')
const app = express()
const routes = require('./routes')

app.use(express.urlencoded({extends: true}))
app.use(routes)

app.listen(3000, () => {
    console.log('http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})
