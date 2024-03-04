const DateTime = luxon.DateTime
console.log(luxon);

const dt = DateTime.fromObject(
    { day: 24, month: 2 },
    { zone: 'America/Buenos_Aires', numberingSystem: 'beng' }
)

console.log(dt.toString())

const suma = dt.plus({ days: 29 })
console.log(suma.toString())

const Feriado = DateTime.fromObject(
    { day: 24, month: 3 },
    { zone: 'America/Buenos_Aires', numberingSystem: 'beng' }
)
console.log(Feriado.toString());
let suma1
if (suma.toString() == Feriado.toString()) {
    suma1 = dt.plus({ days: 31 })
}

console.log(suma1.toString());

fetch("https://nolaborables.com.ar/api/v2/feriados/2021")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log("error", err))

class Feriados {
    constructor(days, month, year, name) {
        this.days = days;
        this.month = month;
        this.year = year;


    }
}

console.log(data);