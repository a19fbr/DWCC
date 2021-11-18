/***************************************************************************************************************
*  
*   Objetivo: Crear un array con n números aleatorios entre 1 y 100. Emplea para ello la función
*             random() del objeto Math. Mostrar por consola cual es el mayor, el menor y la media.
*
*   Entrada : n
*
*
*   Salida  : el mayor, el menor y la media de los números del array
*
*
***************************************************************************************************************/
//Función para pedir número
function leerEntero(msg){
    let numero
    do{
        numero=prompt(msg)
    }while(isNaN(numero)||!Number.isInteger(parseFloat(numero))||parseInt(numero)<0)
    return parseInt(numero)
}

//Constante para xerar números aleatorios entre 1 e 100
const aleatorio = (min, max) => Math.floor(min+(max-min)*Math.random())

//Enchemos un array valendonos da constante anterior
let numeros=Array.from({length:leerEntero("Números entre 1-100")},()=>aleatorio(1,100))

//Sacamos o número máximo e mínimo coa librería Math
//Sacamos a media reducindo o array a un valor e dividindo pola súa lonxitude
let max = Math.max(...numeros)
let avg = numeros.reduce((anterior,actual)=>anterior+actual)/numeros.length
let min = Math.min(...numeros)

//Sacamos por consola o array e a salida formateada
console.log(numeros)
console.log(`O número máximo é ${max}, a media é ${avg} e o mínimo é ${min}`)