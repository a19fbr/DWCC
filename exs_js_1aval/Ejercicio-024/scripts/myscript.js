/***************************************************************************************************************
*  
*   Objetivo: Solicitamos un número entero positivo que representa el número de segundos que estamos confinados
*             por una pandemia
*
*   Entrada : segundos
*
*
*   Salida  : Mensaje tal como: "Hemos estado confinados A semanas, B días, C horas, D minutos, E segundos"
*
*
***************************************************************************************************************/
//Definimos constantes
const SEMANA = 604800
const DIA = 86400
const HORA = 3600
const MINUTO = 60

//Pedimos un número facendo comprobacións
function leerEntero(msg){
    let numero
    do{
        numero=prompt(msg)
    }while(isNaN(numero)||!Number.isInteger(parseFloat(numero))||parseInt(numero)<0)
    return parseInt(numero)
}

//Almacenamos o número nun array
const resultado=[]
resultado.push(leerEntero("Número de segundos confinados"))

//Creamos dous arrays para a salida e para outro para as constantes
const salida = ["semanas","dias","horas","minutos"]
const segundos = [SEMANA,DIA,HORA,MINUTO]

//Percorremos o array onde almacenamos os segundos das constantes
//Agregamos o resto devolto ao array inicial
//Facemos a división segundo o índice dos arrays 
for(let i=0;i<segundos.length;i++) {
    resultado.push(resultado[resultado.length-1]%segundos[i])
    resultado[i]=parseInt(resultado[resultado.length-2]/segundos[i])
    salida[i]=`${resultado[i]} ${salida[i]}`
}

//Agregamos o valor dos segundos ao array inicial
salida.push(`${resultado[resultado.length-1]} segundos`)
//Formateamos a salida para que mostre o valor do resto de valores
document.write(`Hemos estado confinados ${salida.join(', ')}`)