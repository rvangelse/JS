//**Funciones y This**

//**************************************************************************************************************************************************************************/

//Funciones vs Metodos

//Funciones como output 

function intercambiar (funcion, a, b){   //Funcion como input
    return funcion(b, a); //Funcion como output
};

console.log(intercambiar(resta, 5, 3));

//Funciones con atributos y metodos
function imprimirCliente () {
    console.log("Mi nombre es " + this.nombre + " y tengo " + this.edad + " años")
};

const clienteA = {
    nombre: 'Luis',
    edad: 21,
};

imprimirCliente.call(clienteA); //El metodo call le pasa un objeto como argumento a una funcion

//Funciones anidadas
function contador() {
    let i = 0; 

    return function b() {
        i++;  
        console.log(i);
    };
};

let contar = contador(); //Esto es como crear una instancia de la funcion "contador"

contar(); 
contar();  
contar();  

//**************************************************************************************************************************************************************************/

//Funciones Impuras

/* Son funciones que producen efectos secundarios, como: 
   - Modificar variables globales 
   - Modificar parametros de una funcion 
   - Solicitudes HTTP (APIs) 
   - Imprimir mensajes en pantalla o en consola 
   - Manipulacion del DOM
   - Obtener la hora o el dia actual */

function sum (a, b) {
    console.log("a: " + a);
    return a + b;
};

console.log(sum(5, 3)); 

//**************************************************************************************************************************************************************************/

//Contextos de ejecución y scope chain

/* OJO: Desde contextos locales se puede acceder a un contexto global, pero no al reves.
        Ademas, si una variable no esta definida en el contexto local, ira a buscarla en el contexto global. */

const celular = "Samsung";
const precio = "250 USD";

function obtenerPrecio() {
    const celular = "Motorola";
    console.log(celular + " " + precio);  //Accede a la constante "precio" del contexto global    
};

obtenerPrecio();
console.log(celular + " " + precio); //No puede acceder a la constante "precio" del contexto local

//Scope chain (Las "{}" marcan el inicio y cierre de un bloque de codigo en JS) 

const puntaje = 150            //Contexto Global

function verificar (){         //Contexto Local 1
   if (puntaje >= 100) {       //Contexto Local 2
       return "Has ganado!";   
   } else {                    //Contexto Local 3
       return "Has perdido!";
   }
}

console.log(verificar());      //Contexto Global

//OJO: No existe ningun tipo de comunicacion entre contextos locales

//**************************************************************************************************************************************************************************/

//Closures (Son funciones internas que capturan parametros del ambito local de su funcion externa)

function crearCajaDeAhorros() {
    let dinero = 0; 
  
    return function agregarDinero(monto) {
      dinero += monto;
      console.log(`Tienes ahora $${dinero} en tu caja de ahorros.`); /* Clousure "agregarDinero", captura la variable
                                                                        "dinero". */
    };
  };
  
  const miCaja = crearCajaDeAhorros();  
  miCaja(50);  
  miCaja(30);  

/* OJO: El objetivo de usar closures es poder aislar la logica de una funcion y evitar que sus variables locales
        sean modificadas. */