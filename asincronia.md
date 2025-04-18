# Asincronía

## Temporizador: setTimeout

```js
//Se ejecuta en t = 1
console.log('antes');

//Se ejecuta en t = 3
//Formato (Función, tiempoDeEspera)
let timeout = setTimeout(()=>{
    console.log('Cualquier código');
},3000); 

//Se ejecuta en t = 2
console.log('después');

//Cancela la ejecución del setTimeout()
clearTimeout(timeout);
```
OJO: `setTimeout` no garantiza la ejecución de tu código, despues de un tiempo exacto, simplemente pone tu código en una cola para ser ejecutado después del tiempo establecido. Si hay otras funciones en la cola, `setTimeout` tendrá que esperar su turno, lo cual podría resultar en un retraso.

## Temporizador: setInterval

```js
let i = 0;
console.log('antes');

//Este código se repite cada 2000 ms
let interval = setInterval(()=>{
    console.log(i++);
}, 2000);

console.log('después');

/*Antes, del tercer ciclo se cancela la repetición.
Es decir, se imprime en el t = 2s y en el t = 4s, pero en el t = 5s, se detiene.*/
setTimeout(()=>{
    clearInterval(interval);
}, 5000);
```
OJO: Asegúrate de siempre desactivar el temporizador con `clearInterval` una vez que ya no lo necesites.

## Promesas

```js
//La promesa siempre tendrá 2 opciones resolve o reject
//En este caso, resuelve (reciboDatos)
let promesa = new Promise((reciboDatos, noReciboDatos) => {
    setTimeout(()=>{
        reciboDatos('datos');
    }, 5000);
});

promesa
    //Si resolve (reciboDatos)
    .then(texto => texto.toUpperCase()) //Convierto a mayúsculas los datos que recibí
    .then(texto => texto + '!!!') //Agrego '!!!'
    .then(texto => console.log(texto)) //Imprimo en consola
    //En caso de reject(noReciboDatos), imprimo el problema

    .catch(problema => console.log('Error: ' + problema))
    //Pase lo que pase imprimo 'Todo Listo!' 

    .finally(() => console.log('Todo Listo!'))

//Esto se ejecutará antes que la promesa
console.log('Quiero ejecutar lo más pronto posible');
```
## Múltiples promesas

```js
let promesa1 = new Promise((reciboDatos, noReciboDatos) => {
    setTimeout(()=>{ reciboDatos('datos1'); }, 5000);
});
let promesa2 = new Promise((reciboDatos, noReciboDatos) => {
    setTimeout(()=>{ reciboDatos('datos2'); }, 2000);
});

Promise.all([promesa1, promesa2])
    //Obtengo 2 resultados, si las promesas pudieron resolverse
    .then(([resultado1, resultado2])=>{
        console.log(resultado1); //Imprimo un resultado
        return resultado2; //Retorno el otro para procesarlo
    })
    .then(resultado2 => {
        console.log(resultado2.toUpperCase()); //Imprimo el resultado que faltaba
    });
```
OJO: `Promise.all()` no se ejecuta hasta que todas las promesas se procesen.

## Función async
Es una forma óptima de trabajar con promesas, soluciona el tener muchos `.then()` anidados.

```js
let promesa = new Promise((reciboDatos, noReciboDatos) => {
    setTimeout(()=>{
        reciboDatos('datos');
    }, 5000);
});

async function asincrona() {
    let resultado = await promesa; //Cargo el resultado de la promesa 
    console.log(resultado.toUpperCase()); //Proceso el resultado
};

asincrona();
```
## Fetch Web API
Permite hacer peticiones HTTPs, funciona solo en navegadores(web). Existen bibliotecas de JS como `axios`, compatibles con `NodeJS`.

```js
const url = 'https://jsonplaceholder.typicode.com/users/1';

fetch(url) //Realizo la petición HTTP al url

//Si la promesa se resuelve:
    .then(response => response.json()) //Transformo la respuesta en .json
    .then(data => console.log(data.name)) //Proceso la respuesta
//Si no:
    .catch(error => console.error(error));
```
## Errores

```js
try { //Código que intentaremos ejecutar
    let objeto = {};
    console.log(objeto.c.a);
} catch (error) { //Código que se ejecutará si capturamos un error
    console.log('Error: ' + error);
} finally { //Código que se ejecutará pase lo que pase
    console.log('finally');
}

//Ejemplo: 
function divide(a, b) {
    try {
        return a / b;
    } catch(error) {
        console.log('Error:', error);
    }
}
```
## Práctica 9: Asincronía en JS

**Código**
```js
// Función para obtener datos de una API
async function obtenerDatosDeAPI() {
    try {
        console.log('Iniciando solicitud a la API...');
        // Realizamos la solicitud a la API 
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        // Si la respuesta no es correcta, lanzamos un error
        if (!response.ok) {
            throw new Error('La respuesta de la red no fue correcta');
        }

        // Convertimos la respuesta a formato JSON
        const data = await response.json();

        // Devolvemos los datos obtenidos
        return data;
    } catch (error) {
        // Manejamos cualquier error en la solicitud a la API
        console.error('Hubo un problema con la solicitud:', error);
        return null;
    }
}

// Función para mostrar datos después de un tiempo
async function mostrarDatosDespuesDeTiempo() {
    const tiempoEspera = 3000; 

    // Obtenemos datos de la API
    const datos = await obtenerDatosDeAPI();

    if (datos) {
        console.log(`Esperando ${tiempoEspera / 1000} segundos para mostrar los datos...`);

        setTimeout(() => {
            console.log('Datos después del tiempo de espera:', datos);
        }, tiempoEspera);
    }
}

mostrarDatosDespuesDeTiempo();
```
**Output**

<p align="center">
  <img src="imagenes/grafico9.png" width="800">
</p>