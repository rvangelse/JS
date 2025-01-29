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

//Iteración con .map() y .forEach()

//.map()

const numeros = [2, 3, 5, 8]
const numerosAlCuadrado = numeros.map(numero => numero * numero); /* Genera un nuevo array que contiene los resultados
                                                                     de aplicar una funcion a cada uno de 
                                                                     los elementos del array original. */                                                                  
console.log(numeros);
console.log(numerosAlCuadrado);

//.forEach()

const colores = ["rojo", "azul", "verde"];
const coloresIterados = colores.forEach(color => console.log(color)); /* Aplica una funcion a cada uno de los elementos
                                                                         del array. No genera un nuevo array. */
console.log(colores);

//**************************************************************************************************************************************************************************/

//Filtrado y reducción con .filter() y .reduce()

//.filter()

const numerosPares = numeros.filter(numero => numero % 2 == 0);
console.log(numerosPares);

//.reduce() (Es una especie de fold)

const sumatoria = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(sumatoria);

const palabras = ["manzana", "banana", "hola", "chao", "banana", "chao", "chao"];
const frecuenciaPalabra = palabras.reduce((acumulador, valorActual) => {
    if (acumulador[valorActual]) {
        acumulador[valorActual]++;
    } else {
        acumulador[valorActual] = 1;
    }
    return acumulador;
}, {});

console.log(frecuenciaPalabra);

/* OJO: Pasa algo raro aca, JS trata al "acumulador" como un objeto y a cada elemento del array como un atributo
        de este objeto. */

//**************************************************************************************************************************************************************************/

//Búsqueda de elementos con .find() y .findIndex()

//.find()
