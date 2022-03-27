const texto = 'ABCDEF';
console.log(texto.match(/[ABC]+/g));
console.log(texto.match(/[^ABC]+/g)); //negação

const textoRange = 'abcdef 123456789 10 11 12 13'
console.log(textoRange.match(/[a-z0-9]+/g)) // [ 'abcdef', '123456789', '10', '11', '12', '13' ]