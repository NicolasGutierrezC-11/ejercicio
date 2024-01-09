var a = parseInt(window.prompt("escribir el dato inicial: "))
var b = parseInt(window.prompt("escribir el dato final: "))

function multiploDeTres(a, b){
    let multi = [];
    for(let i = a; i<= b; i++){
        if(( i % 3 ) == 0){
            multi.push(i)
        }
    }
    console.log(multi)
    
    multi.filter((a) => {
        if(a % 3 === 0){
            console.log(a)
        }
    })
}

multiploDeTres(a, b)