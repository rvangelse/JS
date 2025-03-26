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
