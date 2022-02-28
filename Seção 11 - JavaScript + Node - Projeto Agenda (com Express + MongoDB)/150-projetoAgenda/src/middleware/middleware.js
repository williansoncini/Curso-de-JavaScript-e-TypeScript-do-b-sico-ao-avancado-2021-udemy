exports.middlewareGlobal = (req, res, next) => {
    res.locals.success = req.flash('success')
    res.locals.errors = req.flash('errors')
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