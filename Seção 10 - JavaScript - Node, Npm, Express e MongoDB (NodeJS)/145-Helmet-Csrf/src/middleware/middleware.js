exports.middlewareGlobal = (req, res, next) => {
    next()
}

exports.checkCsrfError = (err, req, res, next) => {
    if (err && 'EBADCSRFTOKEN' === err.code){
        return res.render('includes/404')
    }
}

exports.csrfMiddleware = (req, res, next) => {
    req.locals.csrfToken = req.csrfToken()
    next()
}