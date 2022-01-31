const min = 0;
const max = 100;

const random = (min,max) => Math.ceil(Math.random()* (max - min) + min)
const isNumber = number => Number(number)
const isFizz = number => (number % 3) === 0 ? 'Fizz': ''
const isBuzz = number => (number % 5) === 0 ? 'Buzz' : ''

const validation = () => {
    const number = random(min,max)
    
    if (!isNumber(number))
        return console.log('Não é um numero')

    let result = isFizz(number) 
    result = isBuzz(number)

    result ? console.log(result) : console.log(number)
}

validation()

