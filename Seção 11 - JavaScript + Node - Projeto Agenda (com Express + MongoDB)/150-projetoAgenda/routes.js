const express = require('express')
const router = express.Router()
const homeController = require('./src/controllers/homeController')
const loginController = require('./src/controllers/loginController')
const contatoController = require('./src/controllers/contatoController')
const { loginRequired } = require('./src/middleware/middleware')

const meuMiddleware = (req, res, next) => {
    // req.session = {name: 'Willian', password: '123'}
    next()
}

router.get('/', loginRequired, homeController.index)

router.get('/login', loginController.index)
router.post('/login/register', loginController.register)
router.post('/login/login', loginController.login)
router.get('/login/logout', loginController.logout)

router.get('/contato', loginRequired, contatoController.index)
router.post('/contato/register', loginRequired, contatoController.register)
router.get('/contato/edit/:id', loginRequired, contatoController.edit)
router.post('/contato/edit/:id', loginRequired, contatoController.editPost)
router.get('/contato/delete/:id', loginRequired, contatoController.delete)

module.exports = router