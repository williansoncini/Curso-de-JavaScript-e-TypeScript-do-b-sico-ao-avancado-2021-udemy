const actualDate = new Date()

const dayWeek = actualDate.getDay()
const date = actualDate.getDate()
const month = actualDate.getMonth()
const year = actualDate.getFullYear()
const hours = actualDate.getHours()
const minutes = actualDate.getMinutes()
const seconds = actualDate.getSeconds()
const milliseconds = actualDate.getMilliseconds()

const nameDayWeek = getNameDayWeek(dayWeek)
const nameMonth = getNameMonth(month)
const dateToString = formatDateToString(nameDayWeek, date, nameMonth, year, hours, minutes)
setDateToString(dateToString)

function getNameDayWeek(day){
    switch (day){
        case 0:
            return 'Domingo'
        case 1:
            return 'Segunda'
        case 2:
            return 'Terça'
        case 3:
            return 'Quarta'
        case 4:
            return 'Quinta'
        case 5:
            return 'Sexta'
        case 6:
            return 'Sabado'
    }
}

function getNameMonth(month){
    switch(month){
        case 0:
            return 'Janeiro'
        case 1:
            return 'Fevereiro'
        case 2:
            return 'Março'
        case 3:
            return 'Abril'
        case 4:
            return 'Maio'
        case 5:
            return 'Junho'
        case 6:
            return 'Julho'
        case 7:
            return 'Agosto'
        case 8:
            return 'Setembro'
        case 9:
            return 'Outrubro'
        case 10:
            return 'Novembro'
        case 11:
            return 'Dezembro'
    }
}

function formatDateToString (nameDayWeek, date, nameMonth, year, hours, minutes){
    return `${nameDayWeek}, ${date} de ${nameMonth} de ${year} ${hours}:${minutes}` 
}

function setDateToString(dateToString){
    const date = document.querySelector('#date')
    date.innerHTML = dateToString
}