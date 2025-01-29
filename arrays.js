//**Manipulación de Arrays**

//**************************************************************************************************************************************************************************/

//Introducción a Arrays

//En JS, los arrays son objetos

const frutas = Array("Naranjas", "Mangos", "Manzanas");
console.log(frutas);

const frutas2 = ["Naranjas", "Mangos", "Manzanas"];
console.log(frutas2);

const vacio = [];
console.log(vacio);

const primeraFruta = frutas[0];
const cantidadFrutas = frutas2.length;
console.log(primeraFruta);
console.log(cantidadFrutas);

const frutas3 = Array(3)
frutas3[0] = "Naranjas";
frutas3[1] = "Mangos";
frutas3[2] = "Manzanas";

console.log(frutas3);

console.log(Array.isArray(frutas3)); //Metodo para comprobar si un objeto es un array

//En JS, los arrays pueden contener distintos tipos de datos.

//**************************************************************************************************************************************************************************/

//Mutabilidad e inmutabilidad de Arrays

//Mutabilidad

//.push()

const frutasPush = frutas.push("Sandias", "Piñas"); //Agrega elementos al final del array y devuelve la longitud
console.log(frutas);
console.log(frutasPush);

//.pop()

const frutasPop = frutas.pop(); //Elimina el ultimo elemento del array y lo devuelve
console.log(frutasPop);
console.log(frutas);

//Inmutabilidad

//.concat()

const frutasNuevas = frutas.concat(["Uvas", "Kiwis"]);   /* El metodo .concat(), concatena un array con otro,
                                                            sin modificar el array original. */
console.log(frutas); 
console.log(frutasNuevas);

/**************************************************************************************************************************************************************************/

//Iteración con map( ) y forEach( )

