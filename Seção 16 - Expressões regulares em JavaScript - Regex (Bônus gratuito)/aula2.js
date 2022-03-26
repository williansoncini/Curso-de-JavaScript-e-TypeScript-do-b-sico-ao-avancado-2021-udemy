const texto = 'desafios estão ai, para serem ultrapassados'

const regExp = /(desafios|serem)/g;

console.log(texto.match(regExp))
console.log(texto.replace(regExp, 'com toda certeza, $1'))
// com toda certeza, desafios estão ai, para com toda certeza, serem ultrapassados
console.log(texto.replace(regExp, (input) => {
  return '#### ' + input + ' ####';
}))