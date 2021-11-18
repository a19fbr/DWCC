/***************************************************************************************************************
*  
*   Objetivo: Solicitamos tres números al usuario e indicamos cual es el mayor
*
*
*   Entrada : numero1, numero2, numero3
*
*
*   Salida  : El mayor de numero1, numero2 y numero3 es : XXXXX
*
*
***************************************************************************************************************/
let n1
let n2
let n3

do{
    n1 = prompt("Dame o primeiro número")
    n2 = prompt("Dame o segundo número")
    n3 = prompt("Dame o terceiro número")
} while(isNaN(n1)||!Number.isInteger(parseFloat(n1))
        ||isNaN(n2)||!Number.isInteger(parseFloat(n2))
        ||isNaN(n3)||!Number.isInteger(parseFloat(n3)))

//let maior
maximo=Math.max(n1,n2,n3)

/*maior=n1
maior=(maior>n2)?n2:maior
maior=(maior>n3)?n3:maior*/

document.write(`El mayor de n1, n2 y n3 es: ${maximo}`)

