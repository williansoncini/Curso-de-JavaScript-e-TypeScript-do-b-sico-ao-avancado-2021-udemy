require('dotenv').config()
const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')
const middleware = require('./src/middleware/middleware')
const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECT_MONGO_STRING)
    .then(() => app.emit('pronto'))
    .catch(e => console.log(e))

app.use(express.urlencoded({extends: true}))
app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(middleware)
app.use(routes)

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('http://localhost:3000')
        console.log('Servidor executando na porta 3000')
    })
})

