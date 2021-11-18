/***************************************************************************************************************
*  
*   Objetivo: Solicitamos al usuario su peso (en kg) y su estatura (en metros). Calculamos el índice de masa 
*             corporal, lo almacene en una variable y muestre por pantalla la frase "Tu índice de masa corporal 
*             es <imc>", donde <imc> corresponde al indice de masa corporal redondeado con dos decimales e indique
*             si hay riesgo de enfermedad coronaria.
*
*             El índice de masas corporal es el cociente entre el peso del individuo en kilos y el cuadrado de su
*             estatura en metros.        
*
*             El riesgo de que una persona sugra enfermedades coronarias depende de su edad y su índice de masa
*             corporal:
*                               Edad<45     Edad>=45
*                   IMC<=22.0    bajo         medio
*                   IMC>=22.0    medio        alto
*
*   Entrada : peso, estatura
*
*
*   Salida  : "Tu índice de masa corporal es <imc>. Tienes un riesgo ..... de enfermedad coronaria"
*
*
***************************************************************************************************************/
let peso
let estatura

do{
    peso = prompt("Dame o peso do usuario")
    estatura = prompt("Dame a estatura do usuario")
} while(isNaN(peso)||!Number.isInteger(parseFloat(peso))
        ||isNaN(estatura)||!Number.isInteger(parseInt(estatura)))

imc = peso / Math.pow(estatura,2)
let estado

if(imc<=22){
    estado = "bajo"
} else{
    estado = "alto"
}

document.write(`Tu índice de masa corporal es ${imc.toFixed(2)}. 
                    <br>Tienes un riesgo ${estado} de enfermedad coronaria.`)