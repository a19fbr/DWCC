/***************************************************************************************************************
*  
*   Objetivo: Cuando vemos el pronóstico del tiempo en Estados Unidos no nos enteramos muy bien si va
*             a hacer frio o calor. Crear un script Javascript que solicite una temperatura en grados
*             Fahrenheit y la convierta a grados Celsius. El script puede realizar un comentario sobre el
*             tiempo dependiendo de si la temperatura Celsius es superior o igual a 25 grados, inferior a
*             10 o inferior cero grados. Ten en cuenta que la temperatura Celsius se calcula a través de
*             Celsius = (5/9) * (Fahrenheit-32)
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/

let fahrenheit
do{
    fahrenheit = prompt("Dame unha temperatura en grados Fahrenheit")
} while(isNaN(fahrenheit)||!Number.isInteger(parseFloat(fahrenheit)))

/*
function celsius(fahrenheit) {
    return fahrenheit => (5/9) * (fahrenheit-32)
}
*/
let celsius = fahrenheit => (5/9) * (fahrenheit-32)

document.write(`A temperatura en Estados Unidos é de ${fahrenheit} grados Fahrenheit, 
                o cal equivale a ${celsius(fahrenheit).toFixed(2)} ºC (grados Celsius) <br>`)

if(celsius>=25){
    document.write(`Menudo calor que fai hoxe!!!`)
}
else if (celsius<10) {
    document.write(`Vai facendo frío...`)
}
else{
    document.write(`Vou buscando unha chaqueta`)
}




