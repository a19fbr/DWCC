/***************************************************************************************************************
*  
*   Objetivo: Solicitar al usuario que visita la página su nombre y mostrar un mensaje de bienvenida
*             en la página HTML
*
*
*   Entrada : nombre
*
*
*   Salida  : Bienvenido a mi página, XXXX   (XXXX será el nombre del usuario que visita la página)
*
*
***************************************************************************************************************/
let nome = window.prompt("Dime o teu nome");
//document.write("<h2>Benvido a miña páxina, ", nome, "</h2>");
document.write(`<h2>Benvido a miña páxina, ${nome} </h2>`);
