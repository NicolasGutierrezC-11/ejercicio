var a = parseInt(window.prompt("escribir el dato de inicio: "))
var b = parseInt(window.prompt("escribir el dato final: "))

function buscarPares(a, b){
    let miarray = []
    for(let i=a; i <= b; i++){
        if(i % 2 === 0){
            miarray.push(i)
           
        }
    }
    console.log(miarray)
}

buscarPares(a,b)