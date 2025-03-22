# Variables y tipos de datos

## Variables

```js
//Forma clásica de declarar una variable y asignarle un valor           
var nombre = "Angel"; 

//let a diferencia de var, declara una variable local (Esta es la forma moderna y más optima)
let edad = 22; 

const añoDeNacimiento = 2002; //Constante

let presentacion1 = "Mi nombre es " + nombre;
let presentacion2 = "y naci en el año " + añoDeNacimiento;
```
OJO: Es una buena práctica declarar las variables y constantes al `inicio` del programa, individualmente.

OJO: Estas son las [palabras reservadas](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Lexical_grammar#palabras_clave) por JS.

OJO: Evita el uso indiscriminado de variables globales, opta por `variables locales` dentro de las funciones siempre que sea posible. 

## Texto

```js
//Concatenación 
//Forma 1
let presentacionUno = `${presentacion1} ${presentacion2}`; 
//Forma 2
let presentacionDos = presentacion1 + " " + presentacion2; 
console.log(presentacionUno);

//Conversión a minúsculas
console.log(presentacionUno.toLowerCase()); 

//Conversión a mayúsculas
console.log(presentacionDos.toUpperCase()); 

//Longitud 
console.log("La frase de arriba esta compuesta por " + presentacionDos.length + " caracteres");

//Armar substrings
console.log(presentacionDos.substring(13, 18)); 
//OJO: El inicio es no inclusivo, queria tomar desde el char 14 al 18
```
OJO: `\` sirve para que JS renderice un carácter como texto. 
Por otro lado `\n` sirve para crear un salto de línea.

```JS
//Tipos de datos
/* JavaScript es un lenguaje tipado dinámicamente (Tipado debil), por lo que no tienes que especificar 
   el tipo de dato de una variable cuando la declaras. 
   Los tipos de datos se convierten automáticamente según sea necesario durante la ejecución del script. */

console.log(typeof(presentacionUno)); //El typeof(), me devuelve el tipo de dato del input

//Primitivos:

/* OJO: La diferencia entre el tipo null y el tipo undefined es que usamos el tipo null para señalar 
   que una variable no tiene ningún valor asignado y por otro lado el tipo undefined, señala que una
   variable tiene un valor asignado, no definido. */

//Symbol
let simboloUnico = Symbol("unico");
console.log(simboloUnico);
/* OJO: El tipo symbol se usa para crear variables que tienen asignado como valor un “símbolo único” 
       y el tipo bigint se usa para asignarle como valor a una variable, un numero muy grande. */

//Complejos:

//Objecto
let carro = {
    marca: "Ford",
    modelo: "Mustang",
    color: "rojo"
};

//Arrays
let frutas = ["fresa", "manzana", "uvas"];

//Función
function saludar(nombre) {
    console.log("Hola, " + nombre);
};
saludar(nombre);

//Numbers
const numeroNC = 5e3; //Se puede expresar numeros en notacion cientifica
const infinito = Infinity //Se puede asignar el valor "infinito"
const modulo = 10 % 2; //El mod se indica con el "%"
const potencia = 2 ** 2; //La potencia usa el operador "**" 
console.log(potencia);

/*Existen problemas con la precision de las operaciones aritmeticas usando flotantes,
  esto se corrige usando el toFixed() */
const sumaFlotante = 0.1 + 0.2;
const resSumaFlotante = sumaFlotante.toFixed(1); //El metodo .toFixed(), indica la cantidad de decimales que devolvera el res
console.log(resSumaFlotante); 
console.log(resSumaFlotante === 0.3); //El "===" sirve para comparar valores y tipos de datos, simultaneamente
/* OJO: Por alguna razon la implementacion del toFixed() en JS, convierte el dato de number a string. Esto es raro,
        por esto la comparacion de arriba devuelve false */

//Uso del Objeto "Math"
const raizCuadrada = Math.sqrt(16);
const valorAbsoluto = Math.abs(-15);
const numeroRandom = Math.random();
console.log(raizCuadrada);
console.log(valorAbsoluto);
console.log(numeroRandom);

//**************************************************************************************************************************************************************************/

//Conversion de Tipos

//Explicita:
const stringBinario = "10000";
const numberDecimal = parseInt(stringBinario, 2); //Conversion de string (binario) a number (decimal) 

const numberDecimal2 = 16;
const stringBinario2 = numberDecimal2.toString(2); //Conversion de number (decimal) a string (binario)
console.log(binarioReal);

const string = "42";
const integer = parseInt(string); //Conversion de string a number (Int)
const integer2 = parseFloat(string); //Conversion de string a number (Float)
console.log(typeof(integer));
console.log(typeof(integer2));

//Implicita: 
const resSumaString = "3" + 2; //Convierte el number a string y lo concatena
console.log(resSumaString);
const resSumaBool = 7 + true; //Convierte al boolean en number (1) y los suma
console.log(resSumaBool); 
```