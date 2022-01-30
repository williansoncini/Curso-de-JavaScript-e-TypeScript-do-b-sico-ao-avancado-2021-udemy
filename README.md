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
- Seu valor não pode ser diretamente alterado
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
const number = Math.random(* (10 - 5) + 5) // numeros entre 5 e 10
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
users = ['Nikola']
users[0] // Nikola
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
users.pop()
users // ['Albert', 'Nikola']

//Remover do começo
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
```

#### Checkar instancia de array

```javascript
const users = ['Albert', 'Nikola']
users instanceof Array //true
```

### Funções

#### Criar function

> Funções podem ter retornos ou não

```js
//Escopo básico de função
function name (parameters) {
    //logic
}

// Função com retorno
function teste(){
    return alert('teste')
}

// Função com valores padrões
function soma(x=10, y=20){
    return x + y
}
```

#### Arrow function

> Simplifica o código

```javascript
//Escopo básico
() => {logic}

//example
//Aqui como é uma linha não precisa de return
(num) => num ** 0.5
//or
num => num ** 0.5
//or
const raiz = num => num ** 0.5
```

### Objetos

#### Criar objeto

```js
// Criação literal - Dicionario
const pessoa = {
    nome: 'Albert',
    sobrenome: 'Einstein'
}
```

#### Fabrica objeto

```js
// forma padrão
function criaPessoa (nome, sobrenome){
    return {
        nome: nome,
        sobrenome: sobrenome
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

#### Objetos e metodos

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

### Document

#### Seletores

##### Selecionar elemento

```javascript
document.getElementById('id')
document.querySelector('#id') //mais moderno
document.querySelector('.class') //mais moderno
```

#### Criar elemento

```javascript
document.createElement('element')
//example
const p = document.createElement('p')
p.classList.add('class-name')
p.innerHTML += 'text'
```

#### Inserir dados a elemento

```javascript
const example = document.querySelector('#id')
example.innerHTML = 'html'
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




