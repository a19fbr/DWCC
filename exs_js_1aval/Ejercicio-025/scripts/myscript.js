/***************************************************************************************************************
*  
*   Objetivo: Solicitamos un número tras otro al usuario hasta que ingresamos el númoer 0 (que no se tendrá en cuenta)
*             Una vez terminada la lectura de números se informará cuál fue el mayor de los números
*
*   Entrada : numero1, numero2, numero3,.....
*
*
*   Salida  : El mayor de numero1, numero2, numero3,....
*
*
***************************************************************************************************************/
function lerNumEntero(msg) {
    let numero
    do {
        numero=prompt(`Dame un numero entero positivo: `)//editar esto
    } while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||parseInt(numero)!=0)
    return parseInt(numero)
}

function Max(n){
    if(n>max){
    max=n
    }
}

let numeros = []
let pedirNumero = lerNumEntero()(`Dame un número entero: `)
numeros.push()

while(n!=0){
    pedirNumero = lerNumEntero()(`Dame un número entero: `)
    numeros.push()
}

numeros.pop()
document.write(``)
