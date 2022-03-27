const texto = 'abcefg'

console.log(texto.match(/.+(?=e)/g)) // abc
console.log(texto.match(/.+(?=h).+/g)) // null
console.log(texto.match(/(?<=a).+/g)) // bcefg