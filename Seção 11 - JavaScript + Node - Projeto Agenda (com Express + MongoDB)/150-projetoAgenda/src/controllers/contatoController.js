const Contato = require('../models/ContatoModel')

exports.index = (req, res) => {
    res.render('contato', {contato: {}})
}

exports.register = async (req , res) => {
    try {
        const contato = new Contato(req.body)
        await contato.register()
        if(contato.errors.length > 0){
            req.flash('errors', contato.errors)
            req.session.save(() => res.redirect('back'))
            return
        }
    
        req.flash('success', 'Contato registrado com sucesso!')
        // req.session.save(() => res.redirect(`/contato/edit/${contato.contato._id}`))
        req.session.save(() => res.redirect(`/`))
        return 
    } catch (e) {
        console.log(e)
        return res.render('includes/404')
    }
}

exports.edit = async (req, res) => {
    if(!req.params.id) return res.render('404')
    const contato = await Contato.findById(req.params.id)
    if (!contato) return res.render('404')

    res.render('contato', {contato})
}

exports.editPost = async (req, res) => {
    try {
        const contato = new Contato(req.body)
        await contato.edit(req.params.id)

        if(contato.errors.length > 0){
            req.flash('errors', contato.errors)
            req.session.save(() => res.redirect('back'))
            return
        }
        req.flash('success', 'Contato editado com sucesso!')
        // req.session.save(() => res.redirect(`/contato/edit/${contato.contato._id}`))
        req.session.save(() => res.redirect(`/`))
        return 
    } catch (e) {
        console.log(e)
        res.render('includes/404')
    }
}

exports.delete = async (req, res) => {
    const id = req.params.id
    await Contato.delete(id)

    req.flash('success', 'Contato apagado com sucesso!')
    req.session.save(() => res.redirect(`/`))
    return 
}
