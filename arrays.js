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

//.find() (Te devuelve el primer elemento de un array que cumple la condicion que le pasas como input)

const numeroImpar = numeros.find(numero => numero % 2 == 1);
console.log(numeroImpar);

//.findIndex() (Te devuelve la posicion del primer elemento de un array que cumple la condicion que le pasas como input)

const indiceNumeroImpar = numeros.findIndex(numero => numero % 2 == 1);
console.log(indiceNumeroImpar);
console.log(numeros[indiceNumeroImpar]);

//**************************************************************************************************************************************************************************/

//Crear copias con .slice()

const animales = ["hormiga", "vaca", "pato", "perro", "gato"];
const animales2 = animales.slice(); //Crea una copia completa del array original
const animalesCopia = animales.slice(0, 3); //No incluye el indice del final, es decir, aqui copia del indice 0 al 2.
const animalesCopia2 = animales2.slice(-2); //Cuenta del ultimo al primero (Forma inversa) 
//OJO: Puedes pasarle solo un parametro, hara referencia al final del intervalo

console.log(animales);
console.log(animales2);
console.log(animalesCopia);
console.log(animalesCopia2);

//**************************************************************************************************************************************************************************/

//Spread operator: casos de uso

//Crear copia de un array

const animales3 = [...animales];
console.log(animales3);

//Combinar arrays y agregar elementos

const animales4 = [...animales, "elefante",...animales2];
console.log(animales4);

//Pasar argumentos como arrays a funciones
function suma(a, b, c, d) {
    return a + b + c + d;
};

console.log(suma(...numeros));


