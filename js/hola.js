var habilidades = [[60, 70, 50], [100, 20, 1], [20, 30, 20]]
var pokemon = ["pikachu", "bulbasur", "nicolas"]

function entrenamiento(habilidades) {
    let promedios = [];

    for(var i = 0; i < habilidades.length; i++){
    
            let fila = habilidades[i]
            let suma = fila.reduce((a,b)=> a + b,0)
            promedios[i] = suma / fila.length
         
    }
    return promedios
}

function aptitudes(pokemon, promedios) {
    for (var i = 0; i < promedios.length; i++) {
        if (promedios[i] >= 70) {
            console.log("El Pokémon: " + pokemon[i] + " es apto. Promedio: " + promedios[i]);
        } else {
            console.log("El Pokémon: " + pokemon[i] + " no es apto. Promedio: " + promedios[i]);
        }
    }
}

let promedios = entrenamiento(habilidades);
aptitudes(pokemon, promedios);











/*
function sumar (num1, num2) {
    var num1 = parseInt(window.prompt("escribir un valor: "))
    var num2 = parseInt(window.prompt("escribir otro valor: "))
    let resultado = num1 + num2;
    return resultado;

}

let suma = sumar()
console.log("el resultado es: " + suma)





var maztris = [["nicolas", "sebas", "david"], ["maria", "alejandra", "ana"],["oscar", "hola", "bu"]]

for (let i = 0; i < maztris.length; i++) {
    //console.log(maztris[i])
    for(let j = 0; j<maztris.length; j++){
        console.log(maztris[i][j])
    }
}x


var fecha = window.prompt("escribir una fecha mes/dia/año")
var nueva = new Date(fecha)
var diaSemana = nueva.getDay()
console.log(diaSemana)




var numeroUno = window.prompt("digitar un numero: 00")
var numeroDos = window.prompt("Digirar otro numero: ")

if (numeroUno >= numeroDos) {
    console.log("numero uno es mayor")
} else {
    console.log("numero dos es mayor")
}





 for(var i = 10; i >= 0; i--){
    console.log("cuenta regresiva: " + i)
    if(i == 0){
        console.log("feliz año nuevo")
     }
    
}



for (let i = 0; i <= 35; i++){
    console.log("numero va en: " + i)
     
 }

var numeroUno = prompt("ingresar un valor: ")
var numeroDos = prompt("ingresar otro valor: ")


var resta = numeroUno - numeroDos;

if (resta < 0) {
    alert(" es menor a cero " + resta)
} else {
    alert("el numero es mayor a cero: " + resta)
    if(  resta % 2 === 0) {
        alert("el numero es par: " )
    }else{
        alert("el numero es impar: " )
    }
}




var comida = 2800 + 1300;
var bebida = 900 + 650;

console.log("tu total de comida es: " + comida)
console.log("tu total de bebida es: " + bebida)

var total = comida + bebida;

console.log("tu total es: " + total)*/

