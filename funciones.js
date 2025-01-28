//**Funciones y This**

//**************************************************************************************************************************************************************************/

//Funciones vs Metodos

//Funciones como input (Callback) y como output 
function resta (a, b){
   return a - b;
};

function intercambiar (funcion, a, b){   //Funcion como input
    return funcion(b, a); //Funcion como output
};

console.log(intercambiar(resta, 5, 3));

//Funciones como variables (Expresiones de funciones)
let multiplicar = function (a, b){
   return a * b;
};

console.log(multiplicar(2, 3));

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

//Metodos (Son funciones asociadas a un objeto específico)

const rocket = {
    name: "Falcon 9",
    conteo: function conteo(){
        for (let i = 5; i >= 0; i--) {
            console.log("Lanzamiento en " + i);
            
            if (i == 0){
                console.log('🔥🔥LANZAMIENTO!!!!!!!!!!!!!!!!!!!');
                
            }
            
        }
    }
}

rocket.conteo();

//**************************************************************************************************************************************************************************/

//Funciones puras e impuras

//Funciones Puras

/* Son funciones que dada un mismo input devuelve siempre el mismo output.
   Por lo tanto, no se producen efectos secundarios. 
   Podemos usar el paradigma funcional con este tipo de funciones. */

function square(x){
    return x * x;
};

function addTen (y) {
    return y + 10;
};

const number = 5;
const finalRes = addTen(square(number)); //Una composicion entre funciones puras, es una funcion pura. 
console.log(finalRes);

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

//Funciones arrow y enlace léxico 

//Las funciones arrow ayudan a simplificar la sintaxis de una funcion simple // 

const personaje = {
    nombre: "Luis",
    saludo: function (nombre2) {
        console.log(`Hola, ${nombre2}! Mi nombre es ${this.nombre}`);
    },
    saludoArrow: (nombre2) => {
        console.log(`Hola, ${nombre2}! Mi nombre es ${personaje.nombre}`);
    }
    /* OJO: Las funciones arrow no cuentan con enlace lexico, es decir, 
            no reconocen el contexto del objeto referenciado, si se las usa dentro de un metodo.
            Por esta razon, use "personaje.nombre", en lugar de "this.nombre". */
};

personaje.saludo("Angel");
personaje.saludoArrow("Angel");

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