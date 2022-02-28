const express = require('express')
const router = express.Router()
const homeController = require('./src/controllers/homeController')
const loginController = require('./src/controllers/loginController')

const meuMiddleware = (req, res, next) => {
    // req.session = {name: 'Willian', password: '123'}
    next()
}

router.get('/', meuMiddleware, homeController.index)

router.get('/login', loginController.index)
router.post('/login/register', loginController.register)
router.post('/login/login', loginController.login)
router.get('/login/logout', loginController.logout)


module.exports = router