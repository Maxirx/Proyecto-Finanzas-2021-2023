const DateTime = luxon.DateTime
const DataCrudaFeriados2021 = []


async function obtenerFeriados2021() {


    await fetch("./Feriados.json")
        .then(res => res.json())
        /*         .then(data => {
        
                    console.log(data);
                }) */
        .then(data => DataCrudaFeriados2021.push(...data))
        .catch(error => {
            console.log(error);
        });

    /* class Feriados {
        constructor(days, month, year, name) {
            this.days = days;
            this.month = month;
            this.year = year;
    
    
        }
    }
     */


    const Feriados2021 = DataCrudaFeriados2021.map(x => ({ day: x.dia, month: x.mes, year: 2021, name: x.motivo }));


    return Feriados2021
}

function obtenerSabados(year) {
    const finesDeSemana = [];
    // Iterar sobre todos los días del año
    for (let mes = 0; mes < 12; mes++) {
        for (let dia = 1; dia <= 31; dia++) {
            // Crear una fecha para el día actual
            const fecha = new Date(year, mes, dia);
            // Verificar si es sábado (0 es domingo, 6 es sábado)
            if (fecha.getDay() === 6) {
                finesDeSemana.push({ day: dia, month: mes + 1 }); // mes es base 0, lo convertimos a base 1
            }

            // Si el mes ha terminado, salir del bucle
            if (fecha.getMonth() !== mes) {
                break;
            }
        }
    }
    return finesDeSemana;
}


function obtenerDomingos(year) {
    const finesDeSemana = [];
    // Iterar sobre todos los días del año
    for (let mes = 0; mes < 12; mes++) {
        for (let dia = 1; dia <= 31; dia++) {
            // Crear una fecha para el día actual
            const fecha = new Date(year, mes, dia);

            // Verificar si es domingo
            if (fecha.getDay() === 0) {
                finesDeSemana.push({ day: dia, month: mes + 1 }); // mes es base 0, lo convertimos a base 1
            }
            // Si el mes ha terminado, salir del bucle
            if (fecha.getMonth() !== mes) {
                break;
            }
        }
    }
    return finesDeSemana;
}



async function dias() {

    console.log(luxon);

    const dt = DateTime.fromObject(
        { day: 22, month: 2, year: 2021 },
        { zone: 'America/Buenos_Aires', numberingSystem: 'beng' }
    )


    console.log(dt.toString())

    const suma = dt.plus({ days: 30 })
    console.log(suma.toString())

    /*   const Feriado = DateTime.fromObject(
        { day: 24, month: 3, 2021 },
        { zone: 'America/Buenos_Aires', numberingSystem: 'beng' }
        ) */
    /*     console.log(Feriado.toString() >= suma.toString()); */
    let suma1
    const Feriados2021 = await obtenerFeriados2021()




    console.log(Feriados2021);
    const year = 2021;
    const sabados2021 = obtenerSabados(year);
    const domingos2021 = obtenerDomingos(year)
    console.log(domingos2021);

    (((Feriados2021.some(x => ((x.day == suma.c.day) && (x.month == suma.c.month)) && (suma1 = suma.plus({ days: 1 })))) || (sabados2021.some(x => ((x.day == suma.c.day) && (x.month == suma.c.month)) && (suma1 = suma.plus({ days: 2 }))))) || (domingos2021.some(x => ((x.day == suma.c.day) && (x.month == suma.c.month)) && (suma1 = suma.plus({ days: 1 })))))
    console.log(suma1?.toString() || suma?.toString());

}
dias()

/* var myInit = {
    method: "GET",
    headers: { "Content-Type": "apllication/json" },
    mode: "no-cors",
    cache: "default",
};

var myRequest = new Request("http://nolaborables.com.ar/api/v2/feriados/2021", myInit); */





// Obtener los fines de semana para el año 2023


