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
        console.log("Edad: " + this.edad);
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
}

const persona1 = new persona ("Juan", "Perez", 21);
persona1.mostrarInformacion();

persona.prototype.nacionalidad = "ecuatoriana"; /* El prototype me permite heredarles atributos/metodos a todas 
                                                   las instancias de la funcion constructora, sin que estos se 
                                                   vean reflejados en su estructura. */
                                                  
console.log(persona1.nacionalidad);
console.log(persona1);

//**************************************************************************************************************************************************************************/

//¿Qué es una clase?  (Clase > Objeto > Instancia)
