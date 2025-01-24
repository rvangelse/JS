//**Estructuras de Control y Lógica**

//**************************************************************************************************************************************************************************/

//Operadores de comparación
//OJO: Existe el operador "!==" es el contrario de "===" 

const a = 10;
const b = 5;
const c = "10";

console.log(a == c); //El operador == solo compara valor. Esto devuelve true

//**************************************************************************************************************************************************************************/

//Operadores logicos

a == b || a == c; 
a == c && a != b; 
a == c && !(a == b); //El operador ! es la negacion

//**************************************************************************************************************************************************************************/

//Condicionales

//Condicional if

let numeroAleatorio = (Math.random() * 10).toFixed(0); 
/* El metodo Math.random() genera flotantes aleatorios, la mayoria de veces entre 0 y 1, 
   para modificar eso, hice lo de arriba. Con esto, obtengo enteros aleatorios entre 0 y 10. */

if (numeroAleatorio >= 4) {
    console.log("El numero es " + numeroAleatorio + " y es mayor o igual que 4");
}else if (numeroAleatorio >= 2) { 
    console.log("El numero es " + numeroAleatorio + " y es mayor o igual que 2");
}else {
    console.log("El numero es " + numeroAleatorio + " y es menor que 2");
}
//OJO: El "else if" se puede omitir, solo se usa si hay mas de 1 condicion.

//Condicional switch

let dia = "Viernes";

switch(dia){          /* El input del switch matchea con el "case var" correspondiente, 
                         el matcheo esta implementado asi, "input === var". */
    
    case "Lunes":
    case "Martes":
    case "Miércoles":
    case "Jueves":
        console.log("No es fin de semana");
        break;

    case "Viernes":
    case "Sabado":
    case "Domingo":
        console.log("Es fin de semana");
        break;

    default:
        console.log("No es un dia de la semana");
}

//OJO: Puedes crear el numero de cases que necesites

//**************************************************************************************************************************************************************************/

//Loops

//for

var list = ["eat", "code", "sleep", "repeat"];

for (var i = 0; i < list.length; i++){
    console.log(list[i]);
}

//for of

//OJO: El "for of" se usa sobre objetos iterables(listas), por ejemplo: arrays, strings, etc.

for (let palabra of list){
    console.log(palabra);
}


//for in 

//OJO: El "for in" se usa sobre objetos innumerables, por ejemplo: objects.

const personaje = {
    ataque: 3,
    defensa: 2,
    vida: 5 
}

for (let atributo in personaje){
    personaje[atributo] = personaje[atributo] + 1;
    console.log(atributo + ": " + personaje[atributo]);
}

/* OJO: La variable que se usa en el "for in" es una especie de indice asociado a los atributos de tu
        objeto. Para acceder al valor de algun atributo, debes desreferenciar su indice. */

//while

let contador = 0; 

while(contador < 10){
    console.log(contador + 1);
    contador ++;
}

//do while

let contador2 = 0; 

do {
    console.log(contador2 + 1);
    contador2 ++;
} while(contador2 < 10);

/* OJO: La diferencia del "do while" con el "while" es que este se ejecutara al menos una vez, sin importar
        la validez de la condicion. */