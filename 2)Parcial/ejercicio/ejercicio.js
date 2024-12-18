const estudiantes = [
    { nombre: "Reishel", calificaciones: [20, 20, 20] },
    { nombre: "Jairo", calificaciones: [12, 18, 14] },
    { nombre: "Danna", calificaciones: [18, 16, 17] },
    { nombre: "Daniela", calificaciones: [20, 19, 18] },
    { nombre: "Evelyn", calificaciones: [12, 13, 14] },
    { nombre: "Sebastian", calificaciones: [7, 5, 16] },
    { nombre: "Mateo", calificaciones: [16, 17, 15] },
    { nombre: "Sofia", calificaciones: [9, 10, 11] },
    { nombre: "Diego", calificaciones: [4, 15, 13] },
    { nombre: "Laura", calificaciones: [9, 9, 8] }
];

function agregarCalificaciones(estudiante, nuevasCalificaciones) {
    const calificacionesActualizadas = [];
    for (let i = 0; i < estudiante.calificaciones.length; i++) {
        calificacionesActualizadas[calificacionesActualizadas.length] = estudiante.calificaciones[i];
    }
    for (let i = 0; i < nuevasCalificaciones.length; i++) {
        calificacionesActualizadas[calificacionesActualizadas.length] = nuevasCalificaciones[i];
    }
    estudiante.calificaciones = calificacionesActualizadas;
}


function calcularPromedio(calificaciones) {
    let suma = 0;
    for (let i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i];
    }
    return suma / calificaciones.length;
}

function clasificarEstudiante(promedio) {
    switch (true) {
        case promedio >= 16:
            return "Excelente";
        case promedio >= 12:
            return "Bueno";
        case promedio >= 8:
            return "Aprobado";
        default:
            return "Reprobado";
    }
}

function calcularMinMax(calificaciones) {
    let maximo = calificaciones[0];
    let minimo = calificaciones[0];
    for (let i = 1; i < calificaciones.length; i++) {
        if (calificaciones[i] > maximo) maximo = calificaciones[i];
        if (calificaciones[i] < minimo) minimo = calificaciones[i];
    }
    let result_maximo_minmo  = {maximo, minimo}
    return result_maximo_minmo;
}

function procesarEstudiantes(estudiantes) {
    let mejorEstudiante = null;
    let peorEstudiante = null;

    for (let i = 0; i < estudiantes.length; i++) {
        const estudiante = estudiantes[i];
        const promedio = calcularPromedio(estudiante.calificaciones);
        const clasificacion = clasificarEstudiante(promedio);
        const obj = calcularMinMax(estudiante.calificaciones);

        estudiante.promedio = promedio;
        estudiante.clasificacion = clasificacion;
        estudiante.calificacionMaxima = obj.maximo;
        estudiante.calificacionMinima = obj.minimo;

        if (!mejorEstudiante || promedio > mejorEstudiante.promedio) {
            mejorEstudiante = estudiante;
        }

        if (!peorEstudiante || promedio < peorEstudiante.promedio) {
            peorEstudiante = estudiante;
        }
    }
    let resumen_estudiante ={ mejorEstudiante, peorEstudiante }

    return resumen_estudiante;
}

agregarCalificaciones(estudiantes[0], [20, 16]);
agregarCalificaciones(estudiantes[1], [18, 13]);

const resultado = procesarEstudiantes(estudiantes);
const mejorEstudiante = resultado.mejorEstudiante;
const peorEstudiante = resultado.peorEstudiante;

for (let i = 0; i < estudiantes.length; i++) {
    const estudiante = estudiantes[i];
    console.log(estudiante.nombre);
    console.log("Clasificación: " + estudiante.clasificacion);
    console.log("Promedio: " + estudiante.promedio);
    console.log("Calificación más alta: " + estudiante.calificacionMaxima);
    console.log("Calificación más baja: " + estudiante.calificacionMinima);
    console.log("----------------------");
}
console.log("El estudiante con el peor promedio es: " + peorEstudiante.nombre + " con un promedio " + peorEstudiante.promedio);
console.log("El estudiante con el mejor promedio es: " + mejorEstudiante.nombre + " con promedio " + mejorEstudiante.promedio);

