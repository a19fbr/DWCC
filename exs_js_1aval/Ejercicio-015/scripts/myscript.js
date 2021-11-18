/***************************************************************************************************************
*  
*   Objetivo: Solicitar al usuario una cadena de texto y mostrar el número de vocales
*
*
*   Entrada : cadena de texto  (p.j: La verdad saldrá a la luz)
*
*
*   Salida  : Número de vocales (p.j: 8)
*
*
***************************************************************************************************************/
let cadena
 do{
        cadena=prompt("Dame unha cadena: ")
} while(!isNaN(cadena))

cadena = cadena.toUpperCase();
let contador = 0;

for(let i=0; i<=cadena.length;i++){
    let vocal = cadena[i]
    if(vocal=='A' || vocal=='E' || vocal=='I' || 
    vocal=='O' || vocal=='U'){
            contador++
        }
}

document.write(contador)







