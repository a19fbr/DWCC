/***************************************************************************************************************
*  
*   Objetivo: Crear un array con objetos persona y determinar cuantos son mayores de edad
*             Devolver el promedio de edad total
*             Devolver el promedio de las personas mayores de edad
*             Devolver el promedio de las personas menores de edad
*
*   Entrada : 
*
*
*   Salida  : 
*
*
***************************************************************************************************************/
//Función para leer números enteros
function lerNumEntero() {
    let numero
    do {
        numero=prompt(`Dame un numero entero positivo: `)
    } while (isNaN(numero)||!Number.isInteger(parseFloat(numero))||parseInt(numero)<0)
    return parseInt(numero)
}

//Devolver el promedio de edad total
const nombres=["Juan","Maria","Pepe","Luis","Antonia","Rosa","Carmela","Andres"]
const personas = Array.from({length:lerNumEntero()},()=>{ return { nombre:nombres[Math.floor(Math.random()*nombres.length)], 
                                                        edad:Math.floor(Math.random()*100+1)}
                                                    })
console.log(personas)

//let edad_total = personas.edad/personas.length
const edad_total = personas.reduce((anterior,actual)=> {return {nombre:"",edad:anterior.edad+actual.edad}
                                                            }).edad/personas.length
console.log(`Promedio de edad: ${edad_total.toFixed(2)}`)

//Devolver el promedio de las personas mayores de edad
const edadMais18 = personas.filter(persona => persona.edad >= 18)
const edad_media = edadMais18.reduce((anterior,actual)=> {return {nombre:"",edad:anterior.edad+actual.edad}
                                                            }).edad/edadMais18.length
console.log(`Promedio de edad de los mayores de 18 años: ${edad_media.toFixed(2)}`)

//Devolver el promedio de las personas menores de edad
const edadMenos18 = personas.filter(persona => persona.edad < 18)
const edad_media2 = edadMenos18.reduce((anterior,actual)=> {return {nombre:"",edad:anterior.edad+actual.edad}}).edad/edadMenos18.length
console.log(`Promedio de edad de los menores de 18 años: ${edad_media2.toFixed(2)}`)

//const matriz = Array.from({length:lerNumEntero()}, ()=>{return Array.from({length:lerNumEntero()}, ()=> Math.floor(Math.random()*100))})
//console.log(matriz)




