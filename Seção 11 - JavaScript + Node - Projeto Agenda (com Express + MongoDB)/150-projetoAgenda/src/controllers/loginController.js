const Login = require('../models/LoginModel')

exports.index = (req, res) => {
    if (req.session.user) return res.render('login-logado')
    return res.render('login')
}

exports.register = async (req, res) => {
    try {
        const login = new Login(req.body)
        await login.register()
        if (login.errors.length > 0){
            console.log('Passei aqui    ')
            req.flash('errors', login.errors)
            req.session.save(() => {
                return res.redirect('back')
            })
            return
        }

        req.flash('success', 'Cadastro realizadissimo!')
        req.session.save(() => {
            return res.redirect('back')
        })
        return 
    } catch(e) {
        console.log(e)
        return res.render('includes/404')
    }
}

exports.login = async (req, res) => {
    try {
        const login = new Login(req.body)
        await login.login()

        if (login.errors.length > 0){
            req.flash('errors', login.errors)
            req.session.save(() => {
                return res.redirect('back')
            })
            return
        }

        req.flash('success', 'Logado com sucesso!')
        req.session.user = login.user
        req.session.save(() => {
            return res.redirect('/login')
        })
        return 
    } catch(e) {
        console.log(e)
        return res.render('includes/404')
    }
}

exports.logout = (req, res) => {
    req.session.destroy()
    return res.redirect('/login')
}
