//**Asincronía en JavaScript**

//**************************************************************************************************************************************************************************/

//¿Cómo funciona el JavaScript Engine?

/* JS Engine se divide en 2 partes:
   - Memomry Heap: Es donde se almacen las variables, funciones, objetos, etc. que creamos. 
   - Call Stack: Es la pila donde se guardan cada una de las funciones que debemos ejecutar cuando corremos nuestro programa. 
   JS funciona de forma sincrona, ejecuta una tarea a la vez, es decir, desapila las tareas una por una. 
   Pero, existen formas de hacer que funcione de forma asincrona (crear paralelismo), utilizando Web APIs.

   Por ejemplo, mientras nuestra pila se encuentra desapilando una tarea, enviamos otra tarea a la Web API, 
   de forma paralela, cuando, la Web API resuelva esta tarea, la enviara al queue, el cual se encargara de
   esperar que la pila este disponible, para enviarle su contenido. */

//**************************************************************************************************************************************************************************/

//Promesas en JavaScript

/* Una promesa es una peticion que se le envia a la Web API.
   Tienen 3 estados: 
   - Pending: La promesa aun no ha sido resuelta o rechazada.
   - Fulfilled: La promesa ha sido resuelta con un valor.
   - Rejected: La promesa ha sido rechazada con un error. */

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => { //Sirve para darle un tiempo determinada a una tarea, en este caso 2s
        if(Math.random() > 0.5){
            resolve("Promesa resuelta con éxito"); //Hace esto si la promesa esta fulfilled
        } else {
            reject("Promesa rechazada por error"); //Hace esto si la promesa fue rechazada
        }
    }, 2000);
});

promesa.then((successMessage) => {console.log(successMessage);}); //Envia a la consola un mensaje de exito
promesa.catch((errorMessage) => {console.log(errorMessage);}); //Envia a la consola un mensaje de error

//**************************************************************************************************************************************************************************/

//Usando Async y await en JavaScript (Es otra forma de trabajar con promesas, es mas legible paso a paso)

//Forma Sincrona
function fetchData(){
    fetch( "https://rickandmortyapi.com/api/character") //Consumimos la API de "Rick and Morty", obtendremos 20 personajes.
      .then((response) => response.json()) //Transformamos el resultado de .json
      .then((data) => console.log(data)) //Imprimos el resultado por consola
      .catch((error => console.log(error)));
}

fetchData();

//Forma Asincrona
async function fetchDataAsync(){
    try { //El try es como el .then de antes
        const response = await fetch( "https://rickandmortyapi.com/api/character"); 
        const data = await response.json(); 
        console.log(data); 
    } catch (error) {
        console.log(error);
    }
}

fetchDataAsync();

//**************************************************************************************************************************************************************************/

//For await of


