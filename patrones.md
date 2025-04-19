# Patrones de diseño
## Constructor
Sirve para inicializar un objeto en la memoria

```js
class Película {
    constructor(nombre, año) {
        this.nombre = nombre;
        this.año = año;
    }

    toString() {
        return `La película ${this.nombre} es del año ${this.año}`;
    }
}

console.log(new Película('Roma', 2018).toString());
console.log(new Película('Twelve Monkeys', 1995).toString());
console.log(new Película('The Fountain', 2006).toString());
```
OJO: No declares métodos dentro de un constructor. En su lugar, agrega los métodos directamente al prototipo del objeto. Esto evita la creación de múltiples funciones cada vez que se crea una nueva instancia del objeto.

## Singleton