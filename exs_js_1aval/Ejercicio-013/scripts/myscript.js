/***************************************************************************************************************
*  
*   Objetivo: Se solicita un número entero n entre 1 y 20 al usuario. Se mostrará una pirámide de la forma:
*
*               1
*               2 2
*               3 3 3
*               4 4 4 4
*                 ...
*               n n n n n n n (n veces)
*
*   Entrada : numero entero n
*
*
*   Salida  : La pirámide mostrada en el objetivo del ejercicio
*
*
***************************************************************************************************************/
let numero
do{
    numero=prompt("Dame un número entero: ")
} while(isNaN(numero)||!Number.isInteger(parseFloat(numero)))

let parrafo
let salida=""
for(let i=1; i<=numero; i++){
    parrafo="<p>"
    for(let j=1; j<=i;j++) {
        parrafo+= `${i} `
    }
    parrafo+="</p>"
    salida+=parrafo;
}
document.write(salida)