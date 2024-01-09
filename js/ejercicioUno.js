var a = parseInt(window.prompt("escribir un dato: "))
var b = parseInt(window.prompt("escribir otro dato: "))
var operaciones  = window.prompt("escribir que operacion realizar en minuscula: ")

function operacion(a, b, operaciones){
    switch (operaciones) {
        case "suma":
            let suma = a + b;
            console.log("el resultado de " + a + " + " + b + " es: " + suma)
            break;

        case "resta":
            let resta = a - b;
            console.log("el resultado de " + a + " - " + b + " es: " +resta)
            break;

        case "multi":
            let multi = a * b;
            console.log("el resultado de " + a + " * " + b + " es: " +multi)
            break;

        case "division":
            let division = a / b;
            console.log("el resultado de " + a + " / " + b + " es: " +division)
            break;
    
        default:
            console.error("no existe ninguna operacion")
            break;
    }
}

operacion(a, b, operaciones)