import GeraCpf from './modules/GeraCpf'

import './assets/css/style.css'

(function() {
    const cpfGerado = document.querySelector('.cpf-gerado')

    const gera = new GeraCpf()
    const novoCpf = gera.geraNovoCpf()

    cpfGerado.innerText = novoCpf
})() 
console.log('teste')