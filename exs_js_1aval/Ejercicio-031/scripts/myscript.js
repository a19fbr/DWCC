/***************************************************************************************************************
*  
*   Objetivo: Calcula la suma de los pares y de los impares de elementos de n elementos de un array generados
*             aleatoriamente entre 1 y 10.
*
*
*   Entrada : n
*
*
*   Salida  : Los elementos pares del array son: x1, x2, x3, ...
*             Los elementos impares del array son: x1, x2, x3, ...
*             La suma de los elementos pares del array es: XXXX
*             La suma de los elementos impares del array es: YYYY
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

//Enchemos un array valéndonos da constante anterior
let numeros=Array.from({length:leerEntero("Números entre 1-10")},()=>aleatorio(1,10))

//Filtramos os números polos que son pares e redúcelos a suma dos mesmos
let par= numeros.filter(el=>el%2===0).reduce((anterior, siguiente)=>anterior+siguiente)
//Filtramos os números polos que son impares e redúcelos a suma dos mesmos
let impar= numeros.filter(el=>el%2===1).reduce((anterior, siguiente)=>anterior+siguiente)

//Sacamos por consola a cadena e a salida formateada
console.log(numeros)
console.log(`A suma dos pares é: ${par} e a dos impares é:${impar}`)