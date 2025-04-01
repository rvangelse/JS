# Funciones
Se pueden pensar como un `paquete de código` `reutilizable` que ejecuta una `funcionalidad`.

## Declaración de funciones

```js
//Le puedes dar argumentos iniciales (default) a tu función 
function sumar(a = 0,b = 0) {
    return a + b;
}

//Función dinámica, sirve para n-argumentos
function sumar() {
    let suma = 0;
    for (let numero of arguments) {
        suma += numero;
    }
    return suma;
}
console.log(sumar(1,2,3,4,5,6,7,8));
```
OJO: Los `parámetros` son los `nombres genéricos` que le asignamos a una función al declarla, por otro lado, los `argumentos` son los `valores` que les asignamos a esos parámetros al invocar a la función.

OJO: Las `declaraciones` de funciones se cargan antes de que se ejecute cualquier código, por lo que puedes llamarlas desde `cualquier lugar` en tu código. 

## Expresión de una función

```js
let multiplicar = function(a,b){
    console.log(a*b);
}
```
OJO: Las `expresiones` de funciones no se cargan hasta que el intérprete llega a esa línea de código, por lo que si intentas llamar a una expresión de función `antes de que se defina`, obtendrás un `error`.

## Retorno
En JS, las funciones `pueden` o `no` devolver un valor. 

```JS
//No devuelve nada
function sumar(a,b) {
    console.log(a + b);
}

let usuario = {
    nombre: 'Ana',
    apellido: 'Perez'
};

//Devuelve una copia mutada del objeto "usuario"
function cambiarApellido(objecto) {
    let copia = JSON.parse(JSON.stringify(objecto));
    copia.apellido = 'Ochoa';
    return copia;
}

console.log(cambiarApellido(usuario));
console.log(usuario);
```
## Métodos
Son funciones asociadas a un objeto específico.

```js
let perro = {
    nombre: 'Firulais',
    ladra: function() {
        console.log('Woof!');
    }
};

perro.ladra();
```
## Ambito
```js
var numero = 4; //Variable global

function ejemplo() {
    let numero = 10; //Variable local
    console.log(numero);
}

ejemplo(); //10
console.log(numero); //4
```
OJO: Evita usar `var` para declarar variables en JS, ya que su alcance es `global` o `de función entera`, lo cual puede llevar a problemas de sobrescritura o acceso no intencionado. En cambio, utiliza `let` que tiene un `alcance de bloque`, proporcionando un mayor control sobre dónde se puede acceder o modificar una variable.

## Callback 
Es pasar una `función como argumento` de otra función.

```js
//Funcion con dos funciones como parámetros
function llamar(enExito, enError) {
    let exito = true;
    
    if (exito) {
        enExito(); //Invoco la primera 
    } else {
        enError(); //Invoco la segunda
    }
}

//Paso dos funciones como argumentos
llamar(
    function() { console.log('Exito'); },
    function() { console.log('Error'); }
);
```
## Funciones flecha (Arrow)
Son parecidas a las `lambdas` en programacion funcional. 
```js
const sumar = (a,b) => a+b;
```
## Práctica 5: Funciones en JS

**Código**
```js
```