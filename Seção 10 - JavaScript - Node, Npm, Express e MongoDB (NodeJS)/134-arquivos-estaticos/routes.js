const express = require('express')
const router = express.Router()
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

router.get('/', homeController.paginaInicial)
router.post('/', homeController.trataPost)
router.get('/contato', contatoController.paginaContato)

module.exports = router