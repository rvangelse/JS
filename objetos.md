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
