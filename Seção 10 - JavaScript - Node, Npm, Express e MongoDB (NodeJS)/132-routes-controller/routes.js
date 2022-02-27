const express = require('express')
const router = express.Router()
const homeController = require('./controllers/homeController')
const contatoController = require('./controllers/contatoController')

router.get('/', homeController.paginaInicial)
router.post('/', homeController.trataPost)
router.get('/contato', contatoController.paginaContato)

module.exports = router