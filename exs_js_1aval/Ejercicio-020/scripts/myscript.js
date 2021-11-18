/***************************************************************************************************************
*  
*   Objetivo: Solicitamos el número de caramelos y el número de niños, y calcule
*             cuantos caramelos tocan por niño y cuantos sobran. 
*
*   Entrada : nCaramelos, nPeques
*
*
*   Salida  : Debe mostrar el resultado por consola de depuración con un mensaje como
*                   El número de caramelos por niño es: XXXX
*                   El número de caramelos que sobran es: YYYY
*
***************************************************************************************************************/
let nCaramelos
let nPeques

do{
    nCaramelos = prompt("Dame o número de caramelos")
    nPeques = prompt("Dame o número de nenos")
} while((nCaramelos>=0)||isNaN(nCaramelos)||!Number.isInteger(parseFloat(nCaramelos))
        ||(nPeques>=0)||isNaN(nPeques)||!Number.isInteger(parseFloat(nPeques)))

let reparto = parseInt(nCaramelos/nPeques)
let sobrantes = nCaramelos%nPeques

console.log(`El número de caramelos por niño es: ${reparto}`)
console.log(`El número de caramelos que sobran es: ${sobrantes}`)