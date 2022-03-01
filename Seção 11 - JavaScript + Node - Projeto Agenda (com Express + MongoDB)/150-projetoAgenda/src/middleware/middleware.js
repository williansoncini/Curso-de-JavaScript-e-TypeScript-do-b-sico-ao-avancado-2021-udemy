exports.middlewareGlobal = (req, res, next) => {
    res.locals.success = req.flash('success')
    res.locals.errors = req.flash('errors')
    res.locals.user = req.session.user;
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

exports.loginRequired = (req, res, next) => {
    if(!req.session.user){
        req.flash('erros', 'Login necessário')
        req.session.save(() => {
            return res.redirect('/login')
        })
        return
    }
    next()
}