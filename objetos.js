//**Programación Orientada a Objetos**

//**************************************************************************************************************************************************************************/

//Anatomía de un Objeto

//Un Objeto es una estructura de datos que nos permite almacenar informacion de la forma "atributo - valor"

let personaje = {
    nombre: "John",
    edad: 25,
    arma: "Escopeta",
    mostrarInformacion: function(){   //Esto es un metodo, una funcion que permite interactuar con el objeto
        console.log("Nombre: " + this.nombre);
        console.log("Edad: " + this.edad); //OJO: Para hacer referencia a la instancia/objeto actual usamos el "this." 
        console.log("Arma: " + this.arma);
    }
};

personaje.mostrarInformacion();

personaje.elemento = "fuego"; //Agrego un nuevo atributo al objeto "personaje", tambien se pueden agregar metodos asi
console.log(personaje.elemento); 

delete personaje.elemento; //Asi se borran atributos/metodos
console.log(personaje);  

//**************************************************************************************************************************************************************************/

//Función constructora (Es una función que se utiliza para crear objetos nuevos)

function persona (nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.mostrarInformacion = function(){
        console.log("Nombre: " + this.nombre);
        console.log("Apellido: " + this.apellido);
        console.log("Edad: " + this.edad);
    }
};

const persona1 = new persona ("Juan", "Perez", 21);
persona1.mostrarInformacion();

persona.prototype.nacionalidad = "ecuatoriana"; /* Al modificar el prototype estoy modificando la herencias de 
                                                   todas las instancias de la funcion constructora, sin que esto 
                                                   se vea reflejado en su estructura. */
                                                  
console.log(persona1.nacionalidad);
console.log(persona1);

//**************************************************************************************************************************************************************************/

//¿Qué es una clase? //Esta es una forma mas optima de construir objetos nuevos (instancias)
class Personaje {
    constructor(nombre){
        this.nombre = nombre;
    };
    mostrarInformacion(){
        console.log("Nombre: " + this.nombre);
    };
};

const personaje1 = new Personaje ("Pilo");
personaje1.mostrarInformacion();

//**************************************************************************************************************************************************************************

//Herencia en la práctica
class Animal {
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    };
    emitirSonido(){
        console.log("El animal emite un sonido");
    };
};

class Perro extends Animal {
    constructor(nombre, tipo, raza){
        super(nombre, tipo); //Estoy usando el constructor heredado de la clase padre "Animal"
        this.raza = raza;
    };
    emitirSonido(){  //Sobreescribo el metodo heredado de la clase padre "Animal"
        console.log("El perro ladra");
    };
};

const perro = new Perro("Buddy", "Canino", "Golden Retriever");
console.log(perro);
perro.emitirSonido();

//**************************************************************************************************************************************************************************

//Prototipos en la practica

/* OJO: Las clases/funciones constructoras son las unicas que generan prototipos.
        Un prototipo es la "herencia" en si. */

const perro2 = new Perro("Pipo", "Canino", "Chihuahua");

//Le cree un metodo personalizado a esta instancia
perro2.emitirSonido = function emitirSonido(){console.log("El perro ladra mas fuerte")}; 
perro2.emitirSonido();

//Le añadi un nuevo metodo a la herencia de todas las instancias de la clase "Perro"
Perro.prototype.correr = function correr(){console.log("El perro corre");};
perro.correr();
perro2.correr();

//**************************************************************************************************************************************************************************

//Proyecto: Crea una red Social

/* Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseña
2. El sistema debe ser capaz de validar si el usuario y contraseña ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline. */

//Defino un array de objetos que usare como base de datos
const baseDeDatos = [
    {
      usuario: "rvangelse",
      contraseña: "123",
    },
    {
      usuario: "jdoe",
      contraseña: "456",
    }
  ];

//Defino otro array de objetos que usare como linea de tiempo
  const posts = [
    {
      usuario: "Angel",
      post: "Me encata Javascript!",
    },
    {
      usuario: "Andres",
      post: "No quiero trabajar",
    }
  ];

  //OJO: Use este comando "npm install prompt-sync" para instalar el paquete que me permitio agregar inputs.
  const input = require("prompt-sync")({ sigint: true });

  const usuario = input("Usuario: ");
  const contraseña = input("Contraseña: ");
  
  //Funcion que verifica si un usuario y contraseña existen en la base de datos
  function usuarioExistente(usuario, contraseña) {
    for (let i = 0; i < baseDeDatos.length; i++) {
      if (
        baseDeDatos[i].usuario === usuario &&
        baseDeDatos[i].contraseña === contraseña
      ) {
        return true;
      }
    }
    return false;
  }
  
  function inicioSesion(usuario, contraseña) {
    if (usuarioExistente(usuario, contraseña)) {
      console.log(`¡Bienvenido a tu cuenta ${usuario}!`);
      console.log(posts);
    } else {
      console.log("Usuario o contraseña incorrectos!");
    }
  }
  
  inicioSesion(usuario, contraseña);


