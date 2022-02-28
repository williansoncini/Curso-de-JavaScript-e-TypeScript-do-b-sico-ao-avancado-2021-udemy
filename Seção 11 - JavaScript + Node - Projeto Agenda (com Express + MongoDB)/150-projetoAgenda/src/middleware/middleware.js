exports.middlewareGlobal = (req, res, next) => {
    res.locals.variavelLocal = 'Variavel local'
    next()
}

exports.checkCsrfError = (err, req, res, next) => {
    if (err){
        console.log(err)
        return res.render('includes/404')
    }
    next()
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}