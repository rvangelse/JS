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