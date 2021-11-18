/***************************************************************************************************************
*  
*   Objetivo: Se solicita al usuario el número de filas y columnas de una tabla. Se rellena cada celda con 
*             el producto del numero de fila por el número de columna
*
*
*   Entrada : números enteros: nfilas, ncols
*
*
*   Salida  : tabla html con nfilas y ncols
*
*
***************************************************************************************************************/
function pedirEntero(i){
    let numero;
    do{
        numero=prompt(`Dame un número ${i}`)
    } while(isNaN(numero)||!Number.isInteger(parseFloat(numero)))
    return numero
}

let filas
let columnas

do{
     filas=pedirEntero(1)
     columnas=pedirEntero(2)
} while(filas<0||columnas<0)

salida= "<table border=2 text-align=center width=120px>"
for(let i=1; i<=filas; i++){
    salida += "<tr>"
    for(let j=1;j<=columnas;j++){
        salida += `<td>${i*j}</td>`
    }
    salida += "</tr>"
}
salida+="</table>"
document.write(salida)
