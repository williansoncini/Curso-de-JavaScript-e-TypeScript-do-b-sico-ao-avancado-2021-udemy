const escrever = require('./modules/escrever')
const ler = require('./modules/ler')

const path = require('path')

const peoples = [
    {name: 'Albert'},
    {name: 'Einstein'},
]

const pasta = path.resolve(__dirname, 'teste.json')
escrever(pasta, JSON.stringify(peoples, '', 2))
lerArquivo(pasta)

async function lerArquivo (pasta) {
    const dados = await ler(pasta)
    return console.log(JSON.parse(dados))
}