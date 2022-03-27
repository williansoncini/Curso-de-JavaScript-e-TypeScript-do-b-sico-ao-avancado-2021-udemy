const texto = 'aacccccccccccccc';
const regExp = /(a)(\1)/g;

console.log(texto.match(regExp));