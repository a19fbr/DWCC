/***************************************************************************************************************
*  
*   Objetivo: Realizar un script que solicite una fecha a un usuario (día, mes y año) y compruebe es
*             correcta o existe. Hay que tener en cuenta que el año puede ser bisiesto, y por tanto, si es
*             bisiesto (divisible por 4 o por 400, pero no es divisible por 100), Febrero tendrá 29 días.
*
*   Entrada : dia, mes, anho
*
*
*   Salida  : La fecha dia/mes/anho (es|no es) correcta
*
*
***************************************************************************************************************/
//Pedimos un número facendo comprobacións
function leerEntero(msg, limite1, limite2){
    let numero
    do{
        numero=prompt(msg)
    }while(isNaN(numero)||!Number.isInteger(parseFloat(numero))||parseInt(numero)<0)
    return parseInt(numero)
}


function bisiesto(ano){
    return (ano%400===0&&ano%100!==0)||(ano%4==0)
}


//Solución con función bisiesto
let salida=""
switch(mes) {
    case 3,7,9,11: salida=(dia<31)?"es correcta":"no es correcta"
        break
    case 2: salida=(bisiesto(ano)&&dia<30)?"es correcta":"no es correcta"
        break
    default: salida="es correcta"
}

/*
//Solución sin empregar a función bisiesto
let ano=leerEntero("Dame o ano",1000,2300)
let mes=leerEntero("Dame o mes",1,12)
let dia
do{
    dia = leerEntero
}
*/













/*
//Un exemplo de vectores
function leerEntero(){
    let numero
    do{
        numero=prompt(`Dame un número enteiro positivo: `)
    }while(isNaN(numero)||!Number.isInteger(parseFloat(numero))||parseInt(numero)<1)
    return parseInt(numero)
}

const aleatorio = (min, max) => Math.floor(min+(max-min)*Math.random())

let longitud=leerEntero()
const vector1 = Array.from({length:longitud()}, ()=>aleatorio(0,100))
const vector2 = Array.from({length:longitud()}, ()=>aleatorio(0,100))


const paresVector1 = vector1.filter(el=>el%2===0)
const sumaVectores = vector1.map((el,i)=>el+vector2[i])
const comunsVectores = vector1.filter(el=>vector2.includes(el))
const nonComunsVectores = vector1.filter(el=>!vector2.includes(el))

let filas = leerEntero()
let columnas = leerEntero()
const matriz1 = Array.from({length:filas},()=>Array.from({length:columnas},()=>aleatorio(0,50)))
const matriz2 = Array.from({length:filas},()=>Array.from({length:columnas},()=>aleatorio(0,50)))

const sumaMatrices = matriz1.map((fila,i)=>fila.map((columna,j)=>columna+matriz2[i][j]))

//matrizTrasposta=A=>Array.from({length:A[0].length},(el,i)=>Array.from({length:A.length},(el2,j)=>A[j][i]))

function matrizTrasposta(A){
    return Array.from({length:A[0].length},(el,i)=>Array.from({length:A.length},(el2,j)=>A[j][i]))
}

console.log(matriz)
console.log(matrizTrasposta(matriz))

//Tratar de rotar unha matriz


//exemplo dunha expresion regular dun pin /^[0-9]{4}$/ ,  dun hexadecimal /^[0-9]-[a-F]{6}$/
//mirar metodos de array sort(a,b)=>a-b some() every()*/