const num = Number(prompt('Digite seu número'))

const numeroTitulo = document.getElementById('numero')
const raizQuadrada = document.getElementById('raiz-quadrada')
const numeroSecundario = document.getElementById('numero-dois')
const numeroArredondadoCima = document.getElementById('arredonda-cima')
const numeroArredondadoBaixo = document.getElementById('arredonda-baixo')
const numeroComDuasCasasDecimais = document.getElementById('numero-duas-casas')

numeroTitulo.innerHTML = num
raizQuadrada.innerHTML = num**0.5
numeroSecundario.innerHTML = num
numeroArredondadoCima.innerHTML = Math.ceil(num)
numeroArredondadoBaixo.innerHTML = Math.floor(num)
numeroComDuasCasasDecimais.innerHTML = num.toFixed(2)
