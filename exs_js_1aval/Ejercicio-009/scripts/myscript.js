/***************************************************************************************************************
*  
*   Objetivo: Solicitaremos un número mientras no esté entre 1 y 9. 
*             Cuando ya esté entre 1 y 9, mostraremos la tabla de multiplicar de ese número
*
*   Entrada : numero     1 < numero < 9
*
*   Salida  : 1 x numero = numero
*             2 x numero = ....
*             3 x numero = ....
*                   ....
*             9 x numero = ....
*
*   Nota: Formatea la salida en el documento HTML empleando *         una tabla con 4 columnas y nueve filas
*
***************************************************************************************************************/

let n;
do {
   n = prompt("Número entero: ")
} while (isNaN(n)||n<1||n>9)
        for(let i=0; i<=9; i++){
            document.write(
             ` <table border=2 text-alignment=center>
                <tr>
                    <td>${n}*${i} = ${n*i} </td>
                </tr>           
            </table> `)
} 




