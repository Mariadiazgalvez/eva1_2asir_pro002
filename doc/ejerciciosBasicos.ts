//Operacion de multplicacion
let multiplicar = (a, b) => a * b
console.log(multiplicar (12, 8))

//Operaciones de suma y multiplicaciones
let resultadoDoble = (a, b) => (a + b )* 2;
console.log(resultadoDoble(9,20));

//Concatenar String
let nombre = "Maria Diaz";
let edad = 23;
let persona = { nombre, edad } ;
console.log(persona);

//Concatenar
let nombre2 = "Pepe";
let edad2 = 28;
let niño = {nombre2, edad2} ;
console.log("Hola, mi nombre es " + nombre2 + " . " +
"Este año voy a cumplir " + (edad2 + 1) + " años.")

//Funcion para saber si es mayor de edad o no
function mayor (a){
    return a >= 18
}
console.log (mayor(17));

