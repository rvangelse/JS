//**Intoduccion a JavaScript**

//**************************************************************************************************************************************************************************/

//¿Como declarar variables, constantes y asignar valores?
//OJO: Es una buena practica declarar las variables y constantes al inicio del programa, individualmente. 
var nombre = "Angel";                  
let edad = 22; //let a diferencia de var, declara una variable local (Esta es la forma mas optima)
const añoDeNacimiento = 2002;

let presentacion1 = "Mi nombre es " + nombre;
let presentacion2 = "y naci en el año " + añoDeNacimiento;

//Trucos con strings
let presentacionUno = `${presentacion1} ${presentacion2}`; //Util para concatenar strings
let presentacionDos = presentacion1 + " " + presentacion2; //Otra forma de concatenar strings
console.log(presentacionUno);

console.log(presentacionUno.toLowerCase()); //El metodo .toLowerCase(), convierte todo a minuscula
console.log(presentacionDos.toUpperCase()); // "      " .toUpperCase(), "          "   a mayuscula
console.log("La frase de arriba esta compuesta por " + presentacionDos.length + " caracteres"); // El metodo .length, devuelve la longitud del string
console.log(presentacionDos.substring(13, 18)); //El  metodo .substring(), arma substrings. OJO: El inicio es no inclusivo, queria tomar desde el char 14 al 18

//**************************************************************************************************************************************************************************/

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