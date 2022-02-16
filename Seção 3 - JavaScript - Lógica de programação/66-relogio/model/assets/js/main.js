const container = document.querySelector('.container')

const start = container.querySelector('.start')
const stop = container.querySelector('.stop')
const reset = container.querySelector('.reset')

let timer = new Date('1970-01-01 00:00:00')
let interval;

const handleStart = () => {
    if (!interval)
        startTimer()
}

const stopTimer = () => {
    clearInterval(interval)
    interval = 0
}

const resetTimer = () => {
    timer.setHours(0)
    timer.setMinutes(0)
    timer.setSeconds(0)
    timer.setMilliseconds(0)
    changeTimerElement()
    stopTimer()
}

const getFormatedTimer = () => {
    return timer.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    })
}

const changeTimerElement = () => {
    const timerElement = container.querySelector('.timer')
    timerElement.innerHTML = getFormatedTimer()
}

const startTimer = () => {
    interval = setInterval(() => plusTimer(),1000)
}

const plusTimer = () => {
    console.log('teste')
    timer.setSeconds(timer.getSeconds() + 1)
    changeTimerElement()
}

start.addEventListener('click', handleStart)
reset.addEventListener('click', resetTimer)
stop.addEventListener('click', stopTimer)