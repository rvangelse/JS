# Estructuras de Control y Lógica

## Operadores

### Operadores de comparación
```js
const a = 10;
const b = 5;
const c = "10"; 

//El operador == solo compara valores
console.log(a == c); //True
```
OJO: Existe el operador `!==` es el contrario de `===`

OJO: En JS, tambien se puede comparar texto, según su `orden alfabético`. Las `mayúsculas` están antes que las `minúsculas`.

### Comparaciones valor / referencia

**Comparación por valor**

En JS, comparar por `valor` significa comparar el `contenido de las variables`

Ejemplo:
```js
let x = 10;

let y = 10;

console.log(x == y); // true
```
**Comparación por referencia**

En JS, comparar por `referencia` significa comparar si las variables `apuntan al mismo objeto en memoria`

Ejemplos: 
```js
// Comparación por referencia (con objetos de igual contenido)
let a = {valor: 10};
let b = {valor: 10};
// No apuntan a la misma posición de memoria
console.log(a == b); // false
console.log(a === b); // false

// Comparación por referencia (con el mismo objeto)
let c = {valor: 10};
let d = c;
// Apuntan a la misma posición de memoria
console.log(c == d); // true
console.log(c === d); // true
```
### Operadores aritméticos
```js
console.log(3 + 4); //suma
console.log(3 - 4); //resta
console.log(3 * 4); //multiplicación 
console.log(12 / 4); //división
console.log(12 % 7); //módulo

//Trucos
//Todo esto es lo mismo, escrito de otra forma:
let a = 10;
a = a + 1;
//Importa el orden de los operadores, suman y luego asignan
a += 1; 
++a; 
```
### Operadores lógicos
```js
a == b || a == c; 
a == c && a != b; 
a == c && !(a == b); //El operador ! es la negación
```
## Práctica 2: Operadores en JS

**Código**
```js
array1 = [10, 1, "texto 1"];
array2 = [5, 2, "texto 2", 3];

console.log(`¿El número 10 es mayor que el número 5? ${array1[0] > array2[0]}`);
console.log(`¿El número 10 es menor que el número 5? ${array1[0] < array2[0]}`);
console.log(`¿El número 1 es igual al número 2? ${array1[1] == array2[1]}`);
console.log(`¿El texto 1 es igual al texto 2? ${array1[2] == array2[2]}`);
console.log(`¿Los objetos son iguales? ${array1 == array2}`);
console.log(`AND lógico: ${(array1[0]>array2[0]) && (array1[0]<array2[0])}`);
console.log(`OR lógico: ${(array1[0]>array2[0]) || (array1[0]<array2[0])}`);
console.log(`La suma de 10 + 3: ${array1[0] + array2[3]}`);
console.log(`La resta de 10 - 3: ${array1[0] - array2[3]}`);
console.log(`La multiplicación de 10 * 3: ${array1[0] * array2[3]}`);
console.log(`La división de 10 / 3: ${array1[0] / array2[3]}`);
console.log(`10 módulo 3: ${array1[0] % array2[3]}`);
```

**Output**
<p align="center">
  <img src="imagenes/grafico2.png" width="800">
</p>

## Condicionales 

### if, else, else if
```js
let numeroAleatorio = (Math.random() * 10).toFixed(0); 
/* El metodo Math.random() genera flotantes aleatorios, la mayoria de veces entre 0 y 1, 
   para modificar eso, hice lo de arriba. Con esto, obtengo enteros aleatorios entre 0 y 10. */

if (numeroAleatorio >= 4) {
    console.log("El numero es " + numeroAleatorio + " y es mayor o igual que 4");
}else if (numeroAleatorio >= 2) { 
    console.log("El numero es " + numeroAleatorio + " y es mayor o igual que 2");
}else {
    console.log("El numero es " + numeroAleatorio + " y es menor que 2");
}
```
OJO: La cantidad de `else if` se puede extender al número de condiciones que quisieramos.

### switch
```js
let dia = "Viernes";

switch(dia){          
    
    case "Lunes":
    case "Martes":
    case "Miércoles":
    case "Jueves":
        console.log("No es fin de semana");
        break;

    case "Viernes":
    case "Sabado":
    case "Domingo":
        console.log("Es fin de semana");
        break;

    default:
        console.log("No es un dia de la semana");
};
```
OJO: Puedes crear el número de `cases` que necesites.

### Ternarios 

```js
let numero = 3;
let resultado = (numero >= 0) ? 'Es positivo': 'Es negativo';
```
## Práctica 3: Condicionales en JS

**Código**
```js
let edad = 18; 
let accion = 1;
let numero = 3;

if (edad >= 18){
    console.log("Eres mayor de edad.");
}

switch (accion){
    case 1 :
        console.log("La acción es crear.");
        break;
    default:
        console.log("La acción es eliminar.");
}

let resultado = (numero % 2 == 0)? 
"El número ingresado es par.": 
"El número ingresado es impar.";
console.log(resultado);
```
**Output**
<p align="center">
  <img src="imagenes/grafico3.png" width="800">
</p>

## Bucles
Te `ahorran tiempo` cuando necesitas realizar un `procedimiento` a `varios elementos`.

### for 
```js
let list = ["eat", "code", "sleep", "repeat"];

for (let i = 0; i < list.length; i++){
    console.log(list[i]);
}

//Otro ejemplo:
let lista = ['gato', 'perro', 'elefante', 'dinosaurio', 'tortuga'];

for (let i = 0; i < lista.length; i++) {
    let animal = lista[i];

    if (animal === 'dinosaurio') {
        continue;
    }
    console.log('animal vivo: ' + animal);
}
```
**Variante: for of**

Se usa sobre `objetos iterables`, es decir, poseen índices, por ejemplo: arrays, strings, etc.
 ```js
const lista = ['manzana', 'naranja', 'uva'];

for (const elemento of lista){
    console.log(elemento);
}
```
**Variante: for in**

Se usa sobre `objetos innumerables`, es decir, no poseen índices por ejemplo: objects.

```js
let traductor = {
    bucle: 'loop',
    lista: 'array',
    declaración: 'declaration',
    objecto: 'object'
};

for (let etiqueta in traductor) {
    console.log(etiqueta + ' en inglés es ' + traductor[etiqueta]);
}
```
OJO: La `variable` que se usa en el `for in` es una especie de `indice asociado` a los atributos de tu objeto. Para acceder al valor de algun atributo, debes `desreferenciar` su indice.

### while

Lo usamos cuando `no sabemos cuantas veces` tendremos que repetir algo. 

```js
let lista = [3,6,4,8,2,9,4,7,6,1,0,33,8,9,3,546,7,87];

let numero = 0;
while (numero < 30) {
    numero = lista.shift();
    console.log(numero);
}
console.log(lista);
```
**Variante: do while**

La diferencia del `do while` con el `while` es que este se ejecutara `al menos una vez`, sin importar la validez de la condición. 

```js
let i = 0;

do {
    console.log('una vez');
    i++;
} while (i < 4);
```
## Práctica 4: Bucles en JS

**Código**

```js
for (let i = 1; i < 6; i++){
    console.log(i);
}
console.log("----------------------------");

let colores = ["rojo", "verde", "azul", "amarillo"];
for (color of colores){
    console.log(color);
}
console.log("----------------------------");

let persona = {
    nombre: "María",
    edad: 27,
    profesión: "diseñadora"
}
for (atributo in persona){
    console.log(`${atributo}: ${persona[atributo]}`);
} 
console.log("----------------------------");

let numero = 1;
while(numero**2 < 100){
    numero ++;
}
console.log(`El número más cercano a 100 cuyo cuadrado es menor 100 es: ${numero}`);
console.log("----------------------------");

let numero2 = 1; 
do {
    if (numero2 % 2 === 0){
        console.log(numero2);
    }
    numero2 ++;
} while (numero2 <= 10);
```
**Output**
<p align="center">
  <img src="imagenes/grafico4.png" width="800">
</p>