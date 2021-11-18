/***************************************************************************************************************
*  
*   Objetivo: Solicitar al usuario que visita la página dos números enteros y mostrar en la página HTML el resultado de 
*             sumarlos, restarlos, multiplicarlos y dividirlos
*
*
*   Entrada : Dos números enteros: numero1, numero2
*
*
*   Salida  : La suma de numero1 y numero2 es: numero1+numero2 
*             La resta de numero1 y numero2 es: numero1-numero2 
*             El producto de numero1 y numero2 es: numero1*numero2 
*             La division de numero1 entre numero2 es: numero1/numero2 
*
*   Notas   : Ten en cuenta que la división entre los números puede dar un número con muchos decimales
*             ¿Cómo podemos limitar el número de decimales que se mostrarán?
*
***************************************************************************************************************/
/*let numero = prompt("Número: ");
console.log(isNaN(numero));*/
let numero1 = parseInt(prompt("Número1: "));
let numero2 = parseInt(prompt("Número2: "));
document.write(
        `<p>A suma de ${numero1} e ${numero2} é ${numero1+numero2}</p>
         <p>A resta de ${numero1} e ${numero2} é ${numero1-numero2}</p>
         <p>O produto de ${numero1} e ${numero2} é ${numero1*numero2}</p>
         <p>A división de ${numero1} e ${numero2} é ${(numero1/numero2).toFixed(2)}</p>`);