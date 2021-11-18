/***************************************************************************************************************
*  
*   Objetivo: Determinar cuantas vocales mayúsculas hay en una cadena introducida por el usuario y muestre 
*             el resultado por consola.
*
*   Entrada : cadena
*
*
*   Salida  : número de vocales mayúsculas
*
*
***************************************************************************************************************/
//Maiusculas para comparar
let maiusculas="AEIOU"

//Función para pedir número
function leerEntero(msg){
    let cadena
    do{
        cadena=prompt(msg)
    }while(!isNaN(cadena)||Number.isInteger(cadena))
    return cadena
}

//Almacenamos a cadena nunha variable
let frase = leerEntero("Introduce a cadena")

//Separamos a cadena elemento a elemento
//Mapeamos cada elemento e asignamos 1 aos que coincidan e 0 aos que non
//Reducimos a un único valor o array sumando as coincidencias
let resultado = frase.split('').map(el=>maiusculas.includes(el)?1:0).reduce(
        (anterior,siguiente)=>anterior+siguiente)


//Sacamos por consola a cadena e a salida formateada
console.log(frase)
console.log(`O número de vogais máiusculas é: ${resultado}`)