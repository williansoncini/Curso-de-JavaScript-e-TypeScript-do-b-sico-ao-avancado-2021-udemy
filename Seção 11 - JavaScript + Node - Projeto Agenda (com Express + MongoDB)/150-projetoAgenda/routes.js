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

module.exports = router