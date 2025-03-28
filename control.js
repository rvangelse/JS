//**Estructuras de Control y Lógica**

//**************************************************************************************************************************************************************************/

//Loops

//for

var list = ["eat", "code", "sleep", "repeat"];

for (var i = 0; i < list.length; i++){
    console.log(list[i]);
};

//for of

//OJO: El "for of" se usa sobre objetos iterables(listas), por ejemplo: arrays, strings, etc.

for (let palabra of list){
    console.log(palabra);
};


//for in 

//OJO: El "for in" se usa sobre objetos innumerables, por ejemplo: objects.

const personaje = {
    ataque: 3,
    defensa: 2,
    vida: 5 
};

for (let atributo in personaje){
    personaje[atributo] = personaje[atributo] + 1;
    console.log(atributo + ": " + personaje[atributo]);
};

/* OJO: La variable que se usa en el "for in" es una especie de indice asociado a los atributos de tu
        objeto. Para acceder al valor de algun atributo, debes desreferenciar su indice. */

//while

let contador = 0; 

while(contador < 10){
    console.log(contador + 1);
    contador ++;
};

//do while

let contador2 = 0; 

do {
    console.log(contador2 + 1);
    contador2 ++;
} while(contador2 < 10);

/* OJO: La diferencia del "do while" con el "while" es que este se ejecutara al menos una vez, sin importar
        la validez de la condicion. */