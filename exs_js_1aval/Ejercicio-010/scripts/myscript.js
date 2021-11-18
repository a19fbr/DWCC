/***************************************************************************************************************
*  
*   Objetivo: Solicita dos números enteros. Muestra el cuadrado de todos los números entre ellos
*
*   Entrada : inicio, fin
*
*
*   Salida  : inicio², (inicio+1)², ..... (fin)²
*
*
***************************************************************************************************************/

function lerDato(i) {
    let n;
    do {
        n = parseInt(prompt(`Dame número${i}: `))
        console.log(parseFloat(n))
        } while(isNaN(n)||!Number.isInteger(parseFloat(n)))
            return n
}

let n
let n2

do{
    let n1 = lerDato(1);
    let n2 = lerDato(2);
} while(n1>=n2)


/*let n1=>(){
    do{
        n = parseInt(prompt("Dame un número"))
        }while(isNaN(n)||!Number.isInteger(n))
            return n
}*/

salida=""
for(let i=n1;i<=n2;i++){
    salida+=i*i + " "
    //Math.pow(i,i)
}

console.log(salida)