let saludo = "¡Hola Mundo!";
let nombre = "Juan";

let array = [1, 2, 3, 4, 5];
array.push(6);

let texto = "La lluvia en Sevilla es una maravilla.";
let patron = /lluvia/;
let resultado = texto.match(patron);

console.log(`${saludo} Soy ${nombre}`);
console.log(`Mi nombre en mayúsculas es: ${nombre.toUpperCase()}`);
console.log(`Mi nombre en minúsculas es: ${nombre.toLowerCase()}`);
console.log(`El mensaje de ¡Hola Mundo!' tiene ${saludo.length} caracteres.`);
console.log(`El tercer número del array con los valores '1,2,3,4,5' es: ${array[2]}`);
console.log(`Se añade el número que sigue en orden al final del arreglo y es: ${array[array.length - 1]}`);
console.log(`Se encontró el patrón 'lluvia' en el texto: 'La lluvia en Sevilla es una maravilla', por lo que el resultado es: ${resultado}`);