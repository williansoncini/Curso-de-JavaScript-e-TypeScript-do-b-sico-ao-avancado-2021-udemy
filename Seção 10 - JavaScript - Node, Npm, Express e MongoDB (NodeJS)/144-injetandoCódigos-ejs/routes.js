const express = require('express')
const router = express.Router()
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

const meuMiddleware = (req, res, next) => {
    // req.session = {name: 'Willian', password: '123'}
    next()
}

router.get('/', meuMiddleware, homeController.paginaInicial)
router.post('/', meuMiddleware, homeController.trataPost)
router.get('/contato', contatoController.paginaContato)

module.exports = router