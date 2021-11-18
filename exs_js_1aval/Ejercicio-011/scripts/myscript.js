/***************************************************************************************************************
*  
*   Objetivo: Solicita al usuario el porcentaje de acierto en un examen tipo test y muestra la cualificación según la nota
*             según la siguiente tabla
*
*                Cualificación    Porcentaje
*                     A             90-100
*                     B             80-90
*                     C             70-79
*                     D             60-69
*                     F             0-59
*
*   Entrada : nota
*
*
*   Salida  : El examen se cualifica con un XXX
*
*
***************************************************************************************************************/
let porcentaxe = parseFloat(prompt("Dame un porcentaxe entre 0-100"))
console.log()
switch(true){
    case (porcentaxe>90): console.log("A")
            break;
    case (porcentaxe>80): console.log("B")
            break;
    case (porcentaxe>70): console.log("C")
            break;
    case (porcentaxe>60): console.log("D")
    default: console.log("F")
    
}

/*if(porcentaxe>=90)
console.log("A")
else if(porcentaxe>=80)
    console.log("B")
else if(porcentaxe>=70)
    console.log("C")
else if(porcentaxe>=60)
    console.log("D")
else if(porcentaxe<=50)
    console.log("F")*/