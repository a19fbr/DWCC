/***************************************************************************************************************
*  
*   Objetivo: Comprobar si la cadena introducida por el usuario es un palíndromo (se lee igual al revés).
*             P.j: Dabale arroz a la zorra el abad
*
*
*   Entrada : Cadena de texto
*
*
*   Salida  : La cadena .... (es|no es) un palíndromo
*
*
***************************************************************************************************************/
let cadena
 do{
        cadena=prompt("Dame unha cadena: ")
} while(!isNaN(cadena))

cadena = cadena.toUpperCase().trim().split("l");
let cadena2 = cadena.reverse();

for(let i=0; i<=cadena.length;i++){
    for(let j=0; j<=cadena2.length;j++){
        if(cadena[i] = cadena2[j]){
            document.write(`La cadena es un palíndromo`)
        }
    }
    
}

