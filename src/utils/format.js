const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

const getSubject = (subjectNumber)  => subjects[+subjectNumber - 1]

function hoursToMinutes(time) {
    const [ hour, minute ] = time.split(":").map(string => parseInt(string))
    return hour * 60 + minute
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    hoursToMinutes
}