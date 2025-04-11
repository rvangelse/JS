# Programación orientada a objetos (POO)

## Contexto
`this.` es el contexto de un objeto.

```js
let auto = {
    modelo: "Modelo 3",
    año: 2021,
    marca: "Tesla",
    info: function(){
        return (`Este es un auto ${this.marca}, ${this.modelo} del año ${this.año}`);
    }
}

console.log(auto.info());
```
## Getter y Setter
En JS, puedes existen palabras reservadas que te permitirán construir los getters y setters de tus objetos.
```js
let persona = {
	_nombre: '',
	_edad: 0,
    get datos(){
        return this._nombre + '' + this._edad;
    },
    set datos(valor){
        const splitValor=valor.split('');
        this._nombre=splitValor[0];
        this._edad=splitValor[1];
    }
};
```
OJO: Utiliza getters y setters cuando necesites agregar lógica adicional o validación durante la obtención o asignación de un valor.

## Vinculación

Puedes vincular una función a varias objetos, con el fin de reutilizarla, en lugar de crear varios métodos.

```js
function info(a) {
    console.log(this, a);
}

let auto = {
    modelo: 'Modelo 3',
    año: 2021,
    marca: 'Tesla'
};

info.bind(auto)(); //Vincula a info solo a 1 objeto
info.call(auto, 10, 20); //Vincula a info a varios objetos, separados con ","
info.apply(auto, [10, 20]); //Vincula a info a varios objetos en un array
```
OJO: Cuando usamos `.call` o `.apply`, el primer argumento debe ser un objeto, si no tenemos uno, podemos pasar `null`

## Constructores
Son funciones que te permiten crear nuevos objetos, a partir de ellas.

```js
function Perro(nombre) {
    this.nombre = nombre;
}
new Perro('Firulais');
```
OJO: Cuando utilices 'new' en JavaScript, asegúrate de que estás invocando una función constructora.

## Prototype
Es lo que tienen en común todas las instancias de una clase, es muy útil al momento de asignar propiedades o métodos que serán constantes.

```js
function Auto(modelo, año, marca) {
    this.modelo = modelo;
    this.año = año;
    this.marca = marca;
}

//En este caso, en lugar de crear este método para cada instancia de Auto, lo asignamos como común a todas. Esto evita que se repita el código de forma innecesaria.
Auto.prototype.info = function() { 
    return this.modelo + " - " + this.marca + " - " + this.año;
}

const auto1 = new Auto('Modelo 3', 2021, 'Tesla');
const auto2 = new Auto('Hummer EV', 2022, 'GMC');

console.log(auto1.info());
console.log(auto2.info());
```
## Clases 
Son azúcar sintáctica para crear plantillas de objetos, las usamos en lugar de las funciones constructoras.

```js
class Auto {
    //Constructor
    constructor(modelo, año, marca) {
        this.modelo = modelo;
        this.año = año;
        this.marca = marca;
    }

    info() {
        return this.modelo + " - " + this.marca + " - " + this.año;
    }
}

const auto1 = new Auto('Modelo 3', 2021, 'Tesla');
const auto2 = new Auto('Hummer EV', 2022, 'GMC');

console.log(auto1.info());
console.log(auto2.info());
```
OJO: No uses clases si no las necesitas. Crear un objeto directamente puede ser más eficiente y simple.

## Herencia

