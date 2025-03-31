for (let i = 1; i < 6; i++){
    console.log(i);
}
console.log("----------------------------");

let colores = ["rojo", "verde", "azul", "amarillo"];
for (color of colores){
    console.log(color);
}
console.log("----------------------------");

let persona = {
    nombre: "María",
    edad: 27,
    profesión: "diseñadora"
}
for (atributo in persona){
    console.log(`${atributo}: ${persona[atributo]}`);
} 
console.log("----------------------------");

let numero = 1;
while(numero**2 < 100){
    numero ++;
}
console.log(`El número más cercano a 100 cuyo cuadrado es menor 100 es: ${numero}`);
console.log("----------------------------");

let numero2 = 1; 
do {
    if (numero2 % 2 === 0){
        console.log(numero2);
    }
    numero2 ++;
} while (numero2 <= 10);