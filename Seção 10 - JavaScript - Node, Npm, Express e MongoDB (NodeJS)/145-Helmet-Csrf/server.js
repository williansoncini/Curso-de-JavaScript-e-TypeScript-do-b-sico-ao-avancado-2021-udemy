require('dotenv').config()
const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')
const {middlewareGlobal, checkCsrfError, csrfMiddleware} = require('./src/middleware/middleware')
const mongoose = require('mongoose')
const helmet = require('helmet')
const csurf = require('csurf')

app.use(helmet())


mongoose.connect(process.env.CONNECT_MONGO_STRING)
    .then(() => app.emit('pronto'))
    .catch(e => console.log(e))

const session = require("express-session")
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')

const sessionOptions = session({
    secret: "pode ser qualquer coisa !#$%!2341234!2345123$!@#414556$%TGSDFgsdfq1@#$dfq",
    store:  MongoStore.create({ mongoUrl: process.env.CONNECT_MONGO_STRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})

app.use(sessionOptions)
app.use(flash())

app.use(express.urlencoded({extends: true}))
app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(csurf())
app.use(checkCsrfError)
app.use(csrfMiddleware)
app.use(middlewareGlobal)
app.use(routes)

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('http://localhost:3000')
        console.log('Servidor executando na porta 3000')
    })
})

