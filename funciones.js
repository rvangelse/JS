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