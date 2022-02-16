import geraSenhas from './geradores'

const senhaGerada = document.querySelector('.senha-gerada')
const qtdCaracteres = document.querySelector('.qtd-chars')
const checkBoxMaiusculas = document.querySelector('.chk-maiusculas')
const checkBoxMinusculas = document.querySelector('.chk-minusculas')
const checkBoxNumeros = document.querySelector('.chk-numeros')
const checkBoxSimbolos = document.querySelector('.chk-simbolos')
const gerarSenha = document.querySelector('.gerar-senha')

export default () => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera()
    })
}

function gera() {
    const senha = geraSenhas(
        qtdCaracteres.value,
        checkBoxMaiusculas.checked,
        checkBoxMinusculas.checked,
        checkBoxNumeros.checked,
        checkBoxSimbolos.checked
    )

    return senha || 'Nada selecionado.'
}
