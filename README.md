# Notas de aula

## Este é meu primeiro curso de JavaScript, então vou lascar algumas notas de aulas logo abaixo


Caso você se interesse pelo curso, ele foi feito via Udemy, pelo link 

https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/

## Tópicos

- [Seção 2 - JavaScript básico](#init)

- 

<a id='init'></a>

## Seção 2 - JavaScript básico

#### Console log

```js
console.log('Willian David Soncini');
console.log("willian 'teste'");
console.log('Willian "teste"');
console.log(123123123, 15.8612, 'Willian');
console.log(` 'Willian' "teste" ${123}`);
```

### Comentários

```js
// Comentário na linha
/*
    Comentário
    Longo
*/
```

### Variavéis

Em váriaveis geralmente se utiliza camelCase

### let

- Pode ser iniciliadas vazias

- Seus valores podem ser alterados no decorrer do código

- Só existe dentro do escopo informado

```js
let nome;
nome = 'willian';
let sobreNome = 'Soncini';
```

### const

- Não pode ser inicializada vazia
- Seu valor não pode ser diretamente alterado (Seu endereço de memória não pode ser alterado)
- Só existe dentro do escopo informado

```js
const nome = 'willian';
const dez =  10;
```

#### var

- Não utilize var
- Utilize let ou const
- var é global

```js
var teste = 'teste'
```

### Tipos de dados primitivos


```js
const nome = 'string' //string
const numero = 10 //number
const numero = 2.5 //number
let teste //undefined
const nulo = null //null
const aprovado = true //boolean
//symbol
```

#### Ver o tipo da variavél (typeof)

```js
const nome = 'willian'
typeof nome // string
const numero = 10
typeof numero //number
typeof nome, numer //string number
```

### Valores por referencia

Aqui os valores trabalham como ponteiros, onde uma variavel aponta para outra. Dessa forma quando uma variavel que faz referencia (ponteiro) for alterada, tanto a variavél ponteiro quanto a varaivel de referencia será alterada.

Exemplo:

```js
const a = [1,2,3]
const b = a
console.log(a,b) // [1,2,3] [1,2,3]
b.push(4)
console.log(a,b) // [1,2,3,4] [1,2,3,4]
```

### Operadores aritimeticos

#### [Precedencia documentação]([Precedência de Operadores - JavaScript | MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operator_Precedence))

- ()

- *

- */%

- +-

#### Contatenação utilizando strings

```js
console.log('willian' + 'soncini')
// willian soncini
console.log('willian' + 1)
// willian1
```

#### Adição e subtração

```js
console.log(10 + 10)
//20
console.log('10' + 10)
// 20 Ele faz algumas conversões sozinho
console.log(20 - 10)
// 10
console.log('10' - 10)
// 0 Conversão novamente
```

#### Potenciação

```js
console.log(2**2)
// 4
```

#### Resto da divisão

```js
console.log(10 % 3)
// 1
```

#### Incremento decremento

```js
let num = 10
num++ // 11
num-- // 9
++num // 11
--num // 9
num = num + 10 // 20
num += 10 // 20
num = num - 10 // 0
num -= 10 // 0


num *= 10 // 100
num **= 2 // 10000
```

> NaN = not a number

### Conversão de tipo de dados

```js
parseInt('5') //number
// 5
parseInt('5.2') //number
// 5 - Remove a casa decimal
parseFloat('5.2') //number
// 5.2

// Melhor maneira
Number('5') //number
5
Number('5.2') //number
5.2
```

### Alert

Dentro do objeto window, assim como o método console.log.

- retorna undefined

```js
window.alert('teste')
alert('value')
alert(1)
```

### Confirm

- retorna um boolean

```js
window.confirm('mensagem')
confirm('mensagem')
```

### prompt

- retorna uma string

```js
window.prompt('mensagem')
confirm('mensagem')
```

### String

#### Para escapar um caracter utilize \

```js
'utilize o \"'
```

#### Posições

```js
 012345
'123456'
```

#### Concat

```js
'string' + 'string'
`${umaString} mais outra string` //mais utilizada
umaString.concat('string')
```

#### Endwith

```javascript
'string'.endsWith('a')
```

#### index

##### indexOf

```js
const valor = 'teste'
valor.indexOf('e') //1
valor.indexOf('w') //-1 - Retorna -1 quando valor não é encontrado
```

##### lastIndexOf

```js
const valor = 'teste'
valor.lastIndexOf('e') //1 - Faz a mesma coisa que o indexOf, porém ele começa a percorrer o array para parte de trás
```

### Expressões regulares

```js
'teste'.match(/[a-z]/g) // ['t', 'e', 's', 't', 'e']
'teste'.search(/s/) // 2
'teste'.replace('s', 'x') // texte
'teste'.replace(/s/, 'x') // texte
'tessssssste'.replace(/s/g, 'x') // texxxxxxxte
'teste'.length //5
'teste'.slice(2,4) // 's'
'teste'.slice(1,-1) // este
'teste'.substring(1,2) // e
'teste'.split('s') // ['te','te']
'teste'.split('s',1) // ['te']
'teste'.toUpperCase() // 'TESTE'
'teste'.toLowerCase() // 'teste'
```

### Numbers

> JavaScript faz as contas com base no padrão IEEE 754-2008. Existe sempre uma imprecisão na hora de calcular numéros flutuantes

```javascript
let num1 = 10 // number
let num2 = 10.0123012 // number
```

#### Numero para string

```javascript
let num = 10 
num.toString()
```

#### Arrendondar casas decimais

```javascript
let num = 10.123124324
num.toFixed(2) // 10.12

//number.toFixed(numero_casas_decimais)
```

#### Saber se o numéro é inteiro

```javascript
let num1 = 10
Number.isInteger(num1) // true

let num2 = 10.312
Number.isInterger(num2) //false -  É um Number
```

#### Saber ser é um NaN (Not a number)

```javascript
const ola = 'ola'
Number.isNaN(ola) //true

const num = 10
Number.isNaN(num) //false
```

#### IEEE 754-2008

```javascript
let num1 = 0.1
let num2 = 0.3

console.log(num1 + num2) //0.399999999999 - Aqui está a imprecisão
// Solução
console.log(parseFloat((num1 + num2).toFixed(2)) //Pouco elegante mas funciona
console.log(Number((num1 + num2).toFixed(2)) //Pouco elegante mas funciona
(num1 * 100) + (num2 * 100) / 100 // 0.4 - Muito pouco elegante, mas funciona
```

### Math

#### Arrendondar numeros

```javascript
let num1 = 9.4561
//para baixo
let num2 = Math.floor(num1) //9
//para cima
let num3 = Math.ceil(num1) //10 
//Arredondar para o mais próximo
let num4 = Math.round(num1) //9
```

#### Achar maior e menor numero

```javascript
let numbers = [1,2,3,4,5,6]
Math.min(numbers) //1
Math.max(numbers) // 6
```

#### Gerar numeros aleatórios

```javascript
Math.rendom() //0.56487434
//gerar aleatório em um intervalo
const number = Math.random()* (10 - 5) + 5 // numeros entre 5 e 10
```

#### Elevar numero

```javascript
Math.pow(2,2) // 4
// Mas assim também
2**2 // 4
```

#### Divisão por zero

> É necessário tomar cuidado, pois o JavaScript permite a divisão por zero classificando a variavel como infinity

```js
10 / 0 // Infinity - true
```

### Arrays

> Deve tomar cuidado com atribuições diretas, isso ocasiona em ponteiros. Então tudo oque você fizer em uma variavel ira refletir na outra. Para isso existem maneiras corretas descritas abaixo para fazer a atribuição de valores.

```javascript
const users = ['Albert', 'Nikola', 'Leonardo', 1, 2, 3] //Da para colocar oque quiser aqui no meio
users[0] //Albert
users[0] = 'Einstein'

```

#### Obter valores do array

```javascript
const users = ['Albert']
users[0] //albert
```

#### Mudando os valores do array

```javascript
const users  = ['Albert']
users[0] = ['Nikola']
users[0] // Nikola
```

#### Passando valores entre arrays

```js
const array_1 = [1,2,3]
const array_2 = [...array_1] // maneira correta de se fazer
array_2 // [1,2,3]
```

#### Comprimento do array

```javascript
const users = ['Albert', 'Nikola', 'Leonardo']
users.length //3
```

#### Inserir valores

```javascript
//Inserir no final
const users = ['Albert', 'Nikola']
users.push('Leonardo')
users // ['Albert', 'Nikola', 'Leonardo']

//Inserir no começo
users.unshift('Thomas')
users // ['Thomas', 'Albert', 'Nikola', 'Leonardo']
```

#### Romover valores do array

```javascript
//Remover do final
const users = ['Albert', 'Nikola', 'Leonardo']
// pop retorna o valore removido
users.pop()
users // ['Albert', 'Nikola']

//Remover do começo
//shift retorna o valore removido
users.shift()
users // ['Nikola']

//Remover item deixando espaço vazio
delete users[0]
users // [<emptyitem>]
```

#### Fatiar um array

```js
const users = ['Albert', 'Nikola', 'Leonardo'] 
users.slice(0,2) // ['Albert' , 'Nikola']
users.slice(0,-1) // ['Albert', 'Nikola', 'Leonardo'] 
```

#### Checkar instancia de array

```javascript
const users = ['Albert', 'Nikola']
users instanceof Array //true
```

#### Metodos do array

##### Splice

```javascript
// array.splice(indice, delete, addElement, addElement, addElement)
const array = [1,2,3,4,5]
const removed = array.splice(3,2)
array // [1,2,3]
removed // [4,5]

//example with MAX_VALUE
const array = [1,2,3,4,5]
const removed = array.splice(2, Number.MAX_VALUE)
removed // [3,4,5]

//add value
const array = [1,2,3,4,5]
array.splice(3,0,'value')
array // [ 1, 2, 3, 'value', 4, 5 ]

//alter value and add value
const array = [1,2,3,4,5]
array.splice(3,2,'Albert', 'Nikola')
array // [1,2,3,'Albert', 'Nikola']
```

##### Concatenar array

```javascript
const array1 = [1,2,3,4]
const array2 = [5,6,7,8]

array1.concat(array2) // [1,2,3,4,5,6,7,8 ]
```

##### Filtrar o array

> Sempre retorna um array

```javascript
//classic form
const array = [1,2,3,4,5]

function callBackFilter(value, index, array){
    return value > 2; 
}

const newArray = array.filter(callBackFilter)
newArray // [3,4,5]

//elegant form
const array = [1,2,3,4,5]

const newArray = array.filter(value => value > 2)
newArray // [3,4,5]

//Da para fazer assim também
const array = [1,2,3,4,5]

const newArray = array.filter((value, index, array) => {
    // use value index array logic
    //return 
})
```

##### Mapear o array

> Sempre retorna um array

```javascript
const array = [1,2,3]

array.map((value,index,array) => {
    return value
})

// example - Double value
const array = [1,2,3]
const newArray = array.map(value => value * 2)
newArray // [2,4,6]

// example - Return just name of object
const peoples = [
    {name: 'Albert', surname: 'Einstein'},
    {name: 'Nikola', surname: 'Tesla'}
]

const arrayWithNames = peoples.map(value => value.name)
arrayWithNames // ['Albert', 'Nikola']
```

##### Reduce

> Reduzir array a um elemento

```javascript
const array = [1,2,3]
const total = array.reduce(function(acumulador, valor, indice, array){
    acumulador += valor
    return acumulador
})
total // 6

// example - 
const array = [1,2,3]
const anotherArray = array.reduce(function(acumulator, value ){
    acumulador.push(value)
    return acumulador
}, [] )//initial value of acumulator)
anotherArray // [1,2,3]

//example - return most old
const pessoas = [
    {name: 'Albert', age: 76},
    {name: 'Nikola', age: 86},
    {name: 'Isaac', age: 84}
]

const maisVelha = pessoas.reduce(function(acumulador, valor){
    // O acumulador sempre inicia pegando o valor da primeira posição
    // O 'Valor' sempre inicia pegando o valor da segunda posição
    if (acumulador.age > valor.age) return acumulador
    return valor
})

maisVelha // {name: Nikola, age: 86}
```

##### Foreach

> Apenas passa sobre o array, assim como um for clássico

```javascript
const array = [1,2,3]
array.forEach((value, index, array) => {
    //logic
})
```

### Funções

#### Criar function

> Funções podem ter retornos ou não

```js
//Quando se declar uma função da maneira abaix, a função poderá ser chamada em qualquer lugar do código - Efeito Hosting
//Escopo básico de função
function name (parameters) {
    //logic
}

// Função com retorno
function teste(){
    return alert('teste')
}
```

#### Arrow function

> Simplifica o código

```javascript
//Escopo básico
(parameters) => {logic}

//example
//Aqui como é uma linha não precisa de return
(num) => num ** 0.5
//or
num => num ** 0.5
//or
const raiz = num => num ** 0.5
```

#### Parametros

```javascript
//Pegar parametro via desestruturação de objeto
const obj = { name: 'Albert', surname: 'Einstein'}

function getName({name}) {
    console.log(name)
}
getName(obj)

//Pegar valores via desestruturação de um array
const array = [1,2,3,4]

const getThreeFirstNumbers = ([num1,num2,num3]) => {
    console.log(num1,num2,num3)
}
getThreeFirstNumbers(array)

// Função com valores padrões. Funciona também para desestruturação
function soma(x=10, y=20){
    return x + y
}

//Rest operator
const a = 1
const b = 2
const c = 3
const d = 4
const e = 5

// O parametro de resto deve ser o ultimo parametro da funcão
function example(a,b,...rest){
    console.log(a,b,rest)// 1 2 [3,4,5]
}

example(a,b,c,d,e)
```

#### Funções podem ser guardadas dentro de uma variavel - Function expression

```javascript
const sayHello = function () {
    console.log('Hello')
}
// or
const sayHello = () => console.log('Hello')
```

#### Passando função como parametro

```javascript
const sayHello = () console.log('Hello')
const talking = (sayHello) => sayHello()
```

### Arguments

#### Arguments em functions 

```javascript
//Funciona apenas em function e não em arrow function. Para fazer funcionar de forma semelhante em  arrow function, utilize o rest operator
function soma (){
    let total
    //dentro de arguments, se encontra todos os valores
    for (argument of arguments){
        total += argument
    }
    return total
}
//Vai somar todos esses valores 
soma(1,2,3,4,5,123,123,4,56,7,23,8,)

```

### Closures - Function dentro de function

> Habilidade da função acessar seu escopo léxico (Onde foi definida)

```javascript
function mutiplica(multiplicador){
    return function(n){
        return n * multiplicador
    }
}

const duplica = multiplica(2) // Recebe a função dentro da função, por conta do return
duplica(4) // 8
```

### Função de callback

> Passar funções para ser executadas após outras funções. É bem semelhante ao exemplo mais acima

```javascript
const first = (callback) => {
    console.log('first')
    if (callback)
        callback()
}
const second = (callback) => {
    console.log('second')
    if (callback)
        callback()
}
const third = (callback) => {
    console.log('third')
    if (callback)
        callback()
}

first(() => second(() => third()))
// first second third
```

### IIFE - Immediately invoked function expression

> A função é executada assim que é invocada

```javascript
(function (parameters){
    console.log('teste')
})(parameters);
//teste
```

### Funções geradoras

> Entrega um valor por chamada. Quando se utilizar [return] a função geradora será parada

```javascript
function* geradora1() {
    // ... Lógica
    yield 'valor1'
    // ... Lógica
    yield 'valor2'
    // ... Lógica
    yield 'valor3'
}

const valorGerado = geradora1()
valorGerado.next() // valor 1
valorGerado.next() // valor 2
valorGerado.next() // valor 3

//Exemplo de delegação
function geradora2(){
    //Delega a primeira chamada a geradora 1
    yield* geradora1()
    yield 4
    yield 5
    yield 6
}

//Consultar os valores da função geradora
const valores = geradora2()
for (value of valores){
    console.log(valores)
}

//Utilizando chamadas de funções em sequencia com funções geradoras
const function_1 = () => console.log('function 1')
const function_2 = () => console.log('function 2')

function functionsSequence(){
    yield function_1()
    yield function_2()
}

const callInSequence = functionsSequence()
callInSequence.next() //function_1
callInSequence.next() //function_2
```

### Funções recursivas

> Função que chama ela mesma

```javascript
//Fará o laço de repetição 5 vezes
const recursive = (max) => {
    if (max >= 5)
        return
    max++;
    recursive(max)
}
recursive(0)
```

### Objetos

> Lembrete - Quando for criar um metodo que se repete em cada objeto, é bem mais performatico utilizar o prototipe

#### Criar objeto

```js
// Criação literal - Dicionario
const pessoa = {
    nome: 'Albert',
    sobrenome: 'Einstein'
}

// or

const pessoa = new Object()
pessoa.nome = "Albert"
pessoa.sobrenome = "Einstein"
```

#### Acessar valores do objeto

```javascript
const people = {
    name: 'Albert',
    surname: 'Einstein'
}

people.name // Albert
people['name'] // Albert
```

#### Fabrica objeto

```js
// forma padrão
function criaPessoa (name, surname){
    return {
        name,
        surname,
        getAllName: () => `${this.name} ${this.surname}`
    }
}

//Se os parametros tiverem os mesmos nomes dos atributos, ficara dessa forma.

//Equivalente a função de cima
function criaPessoa (nome, sobrenome){
    return {
        nome,
        sobrenome
    }
}
```

##### Factory Functions

> Funções fabricas

```javascript
const createPeople = (name, surname) => {
    return {
        name,
        surname,
        sayHello: () => {
            //This sempre se refere ao objeto chamadodd
            return `Hello! I'm ${this.name}.`
        }
    }
}

const people = createPeople()
people.sayHello()

//Utilizadno getter
createPeople = (name, surname, age) => {
    name,
    surname,
    age,
    get completeName(){
        return `${this.name} ${this.surname}`;
    }
}

const people = createPeople('Albert', 'Einstein', 76 )
people.compleName // Albert Einstein

//Utilizando setter
createPeople = (name) => {
    return {
        name,
        surname: '',
        set setSurname(surname){
            this.surname = surname
        }
    }
}

const people = createPeople('Albert')
people.setSurname = 'Einstein'
people.surname // Einstein

```

##### Contructor functions

> É interessante iniciar com letra maiuscula por convenção.

```javascript
function Pessoa(nome, sobrenome) {
    //Atributos privados
    const id = 1;
    //metodos privados
    const metodo_privado = () => {}
    //Atributos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function (){

    };
}

const pessoa1 = new Pessoa('Albert', 'Einstein')
const pessoa2 = new Pessoa('Nikola', 'Tesla')
```

#### Congelar objeto

> Não permitir alteração no objeto

```javascript
//Freeze in creation
function People(name, surname) {
    this.name = name
    this.surname = surname

    Object.freeze(this)
}

//Freeze after creation
function People(name, surname) {
    this.name = name
    this.surname = surname
}

const people = new People('Albert', 'Einstein')
Object.freeze(people)
```

#### Funções no objeto

```javascript
const pessoa = {
    nome,
    sobrenome,

    falar(){
       console.log('Hello World!') 
       console.log(`i'm ${this.nome}!`)
    },

    pular(){
        console.log(`${this.nome} pulou!`)
    }
}
```

#### Propriedades do objeto 

```js
function People (name, surname){
    this.name = name
    this.surname = surname

    //example 1 - just one atribute
    Object.defineProperty(this, 'surname', {
        enumerable: true, // show key
        value: surname, // show value
        writable: false, // update
        configurable: true, // reset configurations
    })
    //example 2 - all altributes
    Object.defineProperties(this, {
        name : {
            enumerable: true, // show key
            value: surname, // show value
            writable: false, // update
            configurable: true, // reset configurations
        }
        surname: {
            enumerable: true, // show key
            value: surname, // show value
            writable: false, // update
            configurable: true, // reset configurations
        }
    })
}

const people = new People('Albert', 'Einstein')
Object.keys(people) // name, surname
```

#### Propiedades do objeto com getters e setters

```javascript
function People (name, surname){
    this.name = name
    // let surname = surname
    Object.defineProperty(this, 'surname', {
        enumrable: true,
        configurable: true,
        get: function() {
            return surname
        },
        set: function(value) {
            if(typeof value !== 'string')
                throw new TypeError('message')

            surname = value
        }
    })
}

const people = new People('Albert', 'Einstein')
people.surname // 'Einstein'
people.surname = 1 // Error :)
```

#### Metodos uteis para objetos

##### Copiar objeto

```javascript
const people = {name: 'Albert', surname: 'Einstein'}
//example 1
const copyPeople = {...people, age: 76}
//example 2
const copyPeople = Object.assign({}, people, {age : 76})

people // {name: 'Albert', surname: 'Einstein'}
copyPeople // {name: 'Albert', surname: 'Einstein', age: 76}
```

##### Checar como estão as propiedades do objeto

```javascript
const people = {name: 'Albert', surname: 'Einstein'}
Object.getOwnPropertyDescriptor(people, 'name') /*
    {value: 'name',
    writable: true,
    enumerable: true,
    configurable: true}
*/
```

#### Pegar o valor do objeto

```javascript
const people = {name: 'Albert', surname: 'Einstein'}

Object.values(people) // ['Albert', 'Einstein']
```

##### Pegar valor do objeto com entries

> Retorna um array com os valores do objeto

```javascript
const people = {name: 'Albert', surname: 'Einstein'}
console.log(Object.entries(people)) // ['name', 'Albert'], ['surname', 'Einstein']
```

### Prototypes 

> Cara é muito bom! Cria uma função apenas para todos os objetos. Mantendo assim uma melhor performance.

```javascript
function People(name, surname){
    this.name = name
    this.surname = surname
}

People.prototype.completeName = function(){
    return `${this.name} ${this.surname}`
}
```

#### Manipulação de prototype

```js
const object_A = { keyExample_A: 'ExampleA'}
const object_B = { keyExample_B: 'ExampleB'}

// Object_A will be prototype of object_B
Object.setPrototypeOf(object_B, object_A)
object_B.keyExample_A // 'ExampleA'
```

#### Criando objeto pelo prototype

```javascript
function People(name) {
    this.name = name
    People.prototype.getName = function (){
        return `Here return name`
    }
}

const example = Object.create(People.prototype, {
    newKey: {
        writable : true,
        configurable: true,
        enumerable : true,
        value: 'example'
    }
})

example // People {newKey: 'Example'}
example.getName() // Here return name
```

#### Herança

```javascript
//example
function Produto(nome, preco){
    this.nome = nome
    this.preco = preco
}
Produto.prototype.aumento = function(quantia){
    return this.preco += quantia
}

function Camiseta(nome, preco, cor){
    //Onde a herança acontece
    Produto.call(this, nome, preco)
    this.cor = cor
}
//Setar o mesmo prototype do produto
Camiseta.prototype = Object.create(Produto.prototype)
// Para setar o objeto como uma Camiseta, senão vai ficar como produto
Camiseta.prototype.constructor = Camiseta
// Camiseta se torna uma especialização de produto

const camiseta = new Camiseta('Camiseta', 100, 'Azul')
camiseta.aumento(10)
camiseta.preco // 110
//Para reescrever um metodo do pai
Camiseta.prototype.aumento = function(parameters){
    //logic
    //Quando aumento for chamado, ele fará oque essa função pedir, em vez de fazer oque o pai está passando
}
```

#### Polimorfismo

> Fazer uma classe filha se comportar de forma diferente do pai (Sobreescrita de métodos)

#### Factory Functions + Prototype

```javascript
function createGenius(name, surname) {
    const pessoaPrototype = {
        sayHello (){
            console.log('Hello')
        }
    }

    return Object.create(pessoaPrototype, {
        name: {value: name},
        surname: {value :surname}
    })
    const people = createGenius('Albert', 'Einstein')
}
```

##### Composing / Mixing 

```javascript
const sayHello = {
    sayHello () {
        console.log(`Hello i'm ${this.name}!`)
    }
}

const peoplePrototype = {... sayHello}
// const peoplePrototype =  Object.assign({}, sayHello)

function createGenius(name, surname) {
    return Object.create(peoplePrototype, {
        name: {value: name},
        surname: {value: surname}
    })
}

const people = createGenius('Albert', 'Einstein')
```

#### Object map

```javascript
const genius = [
    {name: 'Albert', surname:'Einstein'},
    {name: 'Nikola', surname: 'Tesla'},
    {name: 'Charles', surname: 'Darwin'}
]

const newGenius = new Map()
for (const people of genius) {
    const {name} = people
    newGenius.set(name, {...people})
}
console.log(newGenius)
console.log(newGenius.get('Albert'))
```

### Class

> Cara que maravilha linkar os prototypes aqui

```javascript
class People {
    constructor(name, surname){
        this.name = name,
        this.surname = surname
    }

    sayHello(){
        console.log(`Hello i'm ${this.name}!`)
    }
}
const people = new People()
```

#### Getter & Setter

```javascript
const _velocity = Symbol('Velocity')
class Car {
    constructor(name){
        this.name = name
        this[_velocity] = 0
    }

    get velocity(){
        return this[_velocity]
    }
    
    set velocity(value){
        if (typeof value !== 'number') return
        if (value >= 100 || value <= 0) return

        this[_velocity] = value
    }
}

const car = new Car('Fusca')
car.velocity = 50
car.velocity // 50 
```

#### Herança com classes

```javascript
class Genius{
    constructor(name){
        this.name = name
    }

    sayHello(){
        console.log('Hello')
    }
}

class People extends Genius{
    constructor(name, age){
        super(name) //Construtor pai
        this.age = 76
    }

    //Sobre escrever o metodo da classe pai
    sayHello(){
        console.log("I'm another hello")
    }
}
```

#### Metodos estaticos

> Acessa a classe sem instanciar a classe

```javascript
class Genius{
    constructor(name){
        this.name = name
    }

    //metodo de instancia
    sayHello(){
        console.log('Hello')
    }
    //metodo estatico
    static sayHelloToEverybody(){
        console.log('Hello world!')
    }
}

Genius.sayHelloToEverybody() // Hello world
```


### Valores primitivos e por referencia

#### Valores primitivos (imutaveis)

> Esses valores criam uma nova cópia quando são copiados

- string
- number
- boolean
- undefined
- null
- bigint
- symbol

```javascript
// Não da para mudar fazendo isso
let a = 10
a[0] = 20 //Isso não muda o valor
a // 10
```

> Para que os valores por referencia não apontem para o mesmo lugar da memoria, você pode fazer da forma abaixo

```javascript
//vou usar array, mas funciona da mesma forma se utilizar objeto
const original = ['Albert', 'Nikolas'] 
const duplicate = [...users]

//Dessa forma se você alterar duplicate, original não sera alterado

duplicate.push('Leonardo')
original // ['Albert', 'Nikolas']
duplicate // ['Albert', 'Nikolas', 'Leonardo']
```

#### Valores do referencia (mutavel)

> Esses valores apontam para o mesmo lugar da memória quando são copiados

- Array
- Object
- Function

```javascript
//Da para mudar seus valores
const teste = [1,2,3]
teste[0] = 50
teste // [50,2,3]
```

## window.document

```js
document.body.innerHTML = 'teste'
document.body.innerHTML += 'teste <br/>'
```

## Seção 3 - JavaScript Lógica de programação

### Operações de comparação

-  \> Maior que
-  < Menor que
-  \> Maior ou igual que
-  <= Menor ou igual que
-  == Igualdade
-  === Igualdade estrita - Checa valor e tipo (Recomendado)
-  != Diferença
-  !== Diferença estrita - Checa valor e tipo (Recomendado)

### Operadores lógicos

- && (and - e)
- || (or - ou)
- !  (not - negação)

> And - Para a comparação lógica ser verdadeira, todas as outras comprações devem ser verdadeiras
> 
> Or - Para a comparação lógica ser verdadeira, pelo menos uma das comparações devem ser verdadeiras
> 
> ! - Nega a operação lógica

Exemplo

```javascript
//&& - And - Todas devem ser verdadeiras
0 === 0 && 1 === 1 //true
0 === 0 && 1 === 2 //false

//|| - Or - Pelo menos uma dever ser verdadeira
0 === 0 && 1 === 1 //true
0 === 0 && 1 === 2 //true
0 === 1 && 1 === 2 //false

//! - Negação
true //true
!true //false

false //false
!false //true

!!false //false
!!!false //true
```

### Avaliação de curto circuito (Short-circuit)

> Retorno de valores e operações lógicas

#### Valores que avalião em false

- false
- 0
- '' 
- null
- undefined
- NaN

#### Operador && and

> false - Retorna o valor falso quando for encontrado
> 
> true - Sempre retornará o ultimo valor avaliado

```javascript
//false
'Luiz Otavio' && 0 && 'Maria' // 0 pois 0 avalia em falso
//true
'Luiz' && 'Willian' && 'Maria' // Maria - Retorna o ultimo valor avaliado
```

#### Operador || or

> Retorna o primeiro valore verdadeiro encontrado
> 
> Caso não haja valor verdadeiro, retorna o ultimo valor falso encontrado

```javascript
false || false || 'Willian' || true // 'Willian' - Pois Willian é o primeiro resultado verdadeiro encontrado
```

Exemplos de validação
```javascript
const cor = ''
const corPadrao = cor || '#fcfcfc'
corPadrão // '#fcfcfc' - Pois '' é avaliado como false
```

### Estruturas condicionais

#### if else if e else

- If pode ser utilizado sozinho
- Para se usar else, é necessário ter um if antes
- Pode haver vários if else
- Só pode haver um else na checagem
- Não é necessário ter else/else if

```javascript
//estrutura simples
if (true)
    return 'verdadeiro'
else
    return 'falso'

//estrutua composta
if (true)
    return 'verdadeiro'
else if (false)
    return 'falso'

//exemplo
const num = 10

if (num > 9){
    console.log(num)
    console.log('Numero maior que 9')
} else if (num === 10) {
    console.log(num)
    console.log('Numero igual a 10')
} else if (num < 5) {
    console.log(num)
    console.log('Numero menor que 5')
} else {
    console.log(num)
    console.log('Numero entre 9 e 5')
}
```

#### Operação ternario

> Pode substituir parte do código com condicionais mais simples

```javascript
condition ? true : false
//example
5 > 10 ? 'Maior' : 'Menor'
```

### Objeto date

```javascript
const data = new Date() // Data atual por padrão
new Date(0) // 01/01/1970 - Timestamp unix ou época unix
new Date(2019, 3, 20, 15, 14, 27, 500) // 2019/4/20 - 15:14:27:500
new Date('2019-04-20 20:20:59')
Date.now() //Data atual em milesimos de segundos
new Date(Date.now()) // Data atual
//data.toString()
```

#### Obter ano, mes, dia, horas, minutos, segundos, milesimos

```js
const data = new Date()
data.getFullYear() //ano
data.getMonth() //mes - Começa do zero
data.getDate() //dia
data.getHours() //horas
data.getMinutes() //minutos
data.seconds() //segundos
data.getMilliseconds() //milesimos
data.getDay() //dia da semana - 0 Domingo - Sábado
```

#### Formatar data

```javascript
const data = new Date()
data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
}) // 00/00/00 00:00:00
```

### Switchs

```js
switch (variable){
    case condition:
        //logic
        break
    case condition:
        //logic
        break
    default:
        //logic
        break //Não tem necessidade
}
```

### Atribuição via desestruturação (Arrays)

```javascript
//exemplo simples
let a
let b
let c
[a,b,c] = [1,2,3]
a //1
b //2
c //3

//desestruturação
const numbers = [1,2,3,4]
const [first, second, ...rest] = numbers
first // 1
second // 2
rest // [3, 4]

//pulando valores
const [number1 , , number3] = numbers
number1 // 1
number3 // 3
```

### Atribuição via desestruturação (Objetos)

```javascript
const awesomePeople = {
    name: 'Albert',
    surname: 'Einstein',
}

const {name, surname} = awesomePeople
// com valores padrões, para caso os valores não existam no objeto
const {name='Albert', surname='Einstein'} = awesomePeople
//mudar o nome das variaveis para não seguir os nomes dos atributos dos objetos
const {name: sayYourName, surname: sayYourName} = awesomePeople
sayYourName // 'Albert'
sayYourSurname // 'Einstein'

//another example

const people = {
    name: 'name',
    address: {
        street: 'california',
        number: 124
    },
    age: 10
}

const {name, address:{street}, ...rest} = people
name // 'name'
street // 'california'
rest // age: 10
```

### Estrutura de repetição

- For clássico - Geralmente com iteráveis (Array ou string)
- For in - Retorna o indice ou chave (string, array, objetos)
- For of - Retorna o valor (iteráveis, arrays ou string)

#### For

```javascript
for (let i = 0; i > length; i++){
    //logic
}
```

#### For in

```javascript
const names = ['Albert', 'Nikola', 'Thomas']
for (let index in names){
    // first enter
    index //1
    // Second enter
    index // 2
}

const people {
    name: 'Albert',
    surname: 'Einstein'
}

for (let key in people){
    //first enter
    console.log(people[key]) // Albert
    //second enter
    console.log(people[key]) //Einstein
}
```

#### For of

```javascript
for (let value of list){
    //logic
}

//example
const peoples = [
    {name: 'Albert'},
    {name: 'Nikola'},
    {name: 'Thomas'},
]

for (let people of peoples){
    //first
    people // {name: Albert}
    //Second
    people // {name: Nikoa}
    //third
    people // {name: Thomas}
}

```

### DOM - Document object model

> Estrutura básica do DOM
> 
> Window > Document > Html > Head | Body

> O Dom possui uma api que nos permite interagir com ele. Podemos criar e modificar os dados que estão dentro dele

#### Seletores

##### Selecionar elemento

```javascript
document.getElementById('id')
document.querySelector('#id') //mais moderno
document.querySelector('.class') //mais moderno
```

##### Selecionar mais de um elemento
```javascript
documet.querySelectorAll('element')
// Example
const elements = document.querySelectorAll('p')
elements // NodeArray p's

//another example
const container = document.querySelector('.container')
container.querySelectorAll('p') // Get all p's inside in container

//Select with contains
container.classList.container('class')
```

##### Buscar pai de um elemento

```javascript
const element = document.qurySelector('p')
element.parentElement // elemento pai
```

#### Remover elmento

```javascript
const element = document.querySelector('element')
element.remove()
```

##### remover pai do elemento

```javascript
const element = document.querySelector('element')
element.parentElement.remove()
```

#### Pegar o texto de um elemento

```javascript
const element = document.querySelector('element')
element.innerText //Return text
```

#### Eventos e listeners

##### Adicionar listener a um elemento

```js
const input = document.querySelector('.input')
input.addEventListener('event', function(event){
  //logic  
})

//Example
const input = document.querySelector('.input')
input.addEventListener('click', () => console.log('teste'))
```

##### Selecionar element via evento

```javascript
document.addEventLister('click', (event) => {
    const element = event.target
})
```

```js
const container = document.querySelector('.container')

```

#### Criar elemento

```javascript
document.createElement('element')
//example
const p = document.createElement('p')
p.classList.add('class-name')
p.innerHTML += 'text'

//Exemplo de criação de nó de texto
const textNode = document.createTextNode('text')
p.appedChild(textNode) // inserir o texto na tag p
```

#### Inserir dados a elemento

```javascript
const example = document.querySelector('#id')
example.innerHTML = 'html'
axample.innerText = 'text'
```

##### Inserir filhos em um elemento

- appendChild(element)

```javascript
const example = document.querySelector('#id')
//criar p
const p = document.createElement('p')
//Adicionar class a p
p.classList.add('class-name')
//Adicionar p dentro de example
example.appendChild(p)
```

##### Pegar estilos de elementos

```javascript
const styleBody = getComputedStyle(document.body) // get all styles of body

//get background of body

styleBody.backgroundColor // background of body 
```

##### Mudar estilos de um elemento

```javascript
//Exemplo de mudança de cor
const element = document.querySelector('.class')
element.style.backgroundColor = 'red' // mudar a cor
```

### While do while

#### While

> Checa a condição e depois entra no laço de repetição

```javascript
while (i <= 10){
    //logic
    i++;
}
```

#### Do while

> Entra pelo menos uma vez no laço e depois checa a condição

```javascript
do {
    //logic
} while (condition)
```

### Break e continue

> Controle do laço. Funciona em todos os laços

- Break - Parar o laço
- Continue - Passar o laço para a próxima entrada

#### Continue

```javascript
const nums = [1,2,3]

for (let num of nums){
    //pulando o console.log do número dois
    if (num === 2)
        continue
    console.log(num)
}
```

#### Break

```javascript
const nums = [1,2,3]

for (let num of nums){
    //Parando o laço quando encontrar o número dois
    if (num === 2)
        break
}
```

### Try Catch finally

```javascript
try{
    // Execuçãoq uando não há erros
} catch (err){
    // Execução caso haja erro
} finally{
    // Sempre executado
}
```

#### Errors 

```javascript
throw new Error('message')
// Example
const number = 'text'
if (typeof number !== 'number')
    throw new Error('Precisa ser número')
```

### Interval e Time outs

#### setInterval

> Executa função em tempos definidos

```javascript
setInterval(function, milliseconds)
//example
setInterval(() => console.log('teste'), 1000)
```

#### setTimeout

> Define um tempo de expiração para um intervalo

```javascript
//Criando uma função para executar em um intervalo
const interval = setInterval(() => console.log('teste'), 1000)

//Definindo o intervalo de 5 segundos para a função
setTimeout(() => {
    clearInterval(interval)
}, 5000)
```

### JSON

#### Passar para json

```javascript
const tasks = [1,2,3,4]
const tasksJson = JSON.stringify(tasks)
tasksJson = [] // '[1,2,3,4]'
```

#### Passar Json para um objeto JavaScript

```javascript
const tasks = [1,2,3,4]
const tasksJson = JSON.stringify(tasks)
tasksJson = [] // '[1,2,3,4]'

const realTasks = JSON.parse(tasksJson)
realTasks // [1,2,3,4]
```

### LocalStorage

> Base de dados do navegdor

#### Salvar no localStorage

```javascript
localstorage.setItem('name', string)
//example
const array = [1,2,3]
const arrayJson = JSON.stringify(array)
localStorage.setItem('array', arrayJson)
```

#### Buscar dados

```javascript
localStorage.getItem('name-item')
```

#### Deletar do localStorage

```javascript
 
```

