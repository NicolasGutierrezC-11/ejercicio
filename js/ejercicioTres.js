var a = parseInt(window.prompt("escribir el numero que se quiere hacer la tabla de x: "))
var b = parseInt(window.prompt("escribir el dato final: "))

function tablaMulti(a, b){
    for(let i = 0; i <= b; i++){
        if(i !== 5){

            let multi = i * a
            console.log(i + " * " + a + " = " + multi)

        }
            
        
        
        
    }
}

tablaMulti(a, b)