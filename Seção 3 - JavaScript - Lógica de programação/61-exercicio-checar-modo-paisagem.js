const heigth = 100
const width = 100

const ePaisagem = (heigth, width) => heigth < width ? 'Paisagem' : 'Normal'

const result = ePaisagem(heigth, width)

console.log(result)