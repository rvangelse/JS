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
`Solo puede existir una instancia` del objeto en nuestra aplicación.

Normalmente, se usa para `guardar` un `estado` de forma `global`.

```js
let contar = 0;

//Defino una sola instancia del objeto "contador"
const contador = {

    getInstancia() {
        return this;
    },

    getContar() {
        return contar;
    },

    incrementar() {
        return ++contar;
    }
}

//Lo hago inmutable
Object.freeze(contador);

//Lo exporto para que sea reutilizable 
export { contador };
```
OJO: Hoy en día, existen mejores opciones que un patrón `singleton` para almacenar un estado global.

## Proxy

Permite leer y modificar un objeto de forma indirecta. A través de un objeto `proxy`

Este patrón respeta la propiedad de encapsulamiento. 

```js
//Defino una instancia de "persona"
const persona = {
    nombre: "Oswaldo Guayasamín",
    edad: 80
};

//Creo una instancia "mensajero" (Proxy de persona)
const mensajero = new Proxy(persona, {
    get: (objeto, propiedad) => {
        console.log(`El valor es ${Reflect.get(objeto,propiedad)}`);
    },
    set: (objeto, propiedad, valor) => {
        if (!valor) { throw new Error('Necesita un valor!'); }
        console.log(`Cambiado de ${Reflect.get(objeto,propiedad)} a ${valor}`);
        Reflect.set(objeto, propiedad, valor);
    }
});

mensajero.nombre; //Leo el valor persona.nombre, usando el get de su proxy
mensajero.nombre = "Fito Páez"; //Modifico el valor persona.nombre, usando el set de su proxy
mensajero.nombre = "";
```
## Prototipo
Este patrón se enfoca en compartir propiedades entre elementos de un mismo tipo. Es nativo de JS, asi que lo usas por default. 

```js
class Alexa {
    constructor(version) {
        this.version = version;
    }

    saludar() {
        console.log("Hola, soy Alexa!");
    }
}

const alexa1 = new Alexa("1");

Alexa.prototype.saludar();

alexa1.saludar();
alexa1.__proto__.saludar(); //Accedes al método del prototipo de Alexa desde una instancia de Alexa

class EchoDot extends Alexa {
    constructor(version) {
        super(version);
    }

    apagar() {
        console.log("Buenas noches!");
    }
}

const echoDot = new EchoDot("1");

echoDot.__proto__.__proto__.saludar(); //Estas accediendo al prototipo de Alexa desde una instancia de un objeto-hijo de Alexa

echoDot.apagar();
echoDot.__proto__.__proto__.apagar(); //Acá existe un problema ya que el método .apagar() no esta definido en el prototipo de Alexa
```
## Módulo
Permite separar nuestro código en distintos módulos con el fin de reutilizarlos y hacer del diseño algo más modular.

Respetan el encapsulamiento y la modularidad.

Se crean en archivos .mjs

```js
export function cuadrado(x) {
    privada(x * x);
}

export function removerDuplicados(lista) {
    privada([...new Set(lista)]);
}

function privada(x) {
    console.log(x);
}

export default removerDuplicados;
```

```js
import * as modulo from "./modulo.mjs";

modulo.cuadrado(2);
modulo.removerDuplicados([1, 2, 3, 3, 3, 4]);
```
OJO: Es una forma más optima que la que vimos antes para usar módulos en JS. Nos evita lo de usar .json y la colisión de nombres.

## Mezcla

Permite reutilizar funcionalidades, sin usar herencia. 

Una buena práctica es usar la composición, antes que la herencia. De acá viene la palabra `componente`, React funciona a tráves de la composición.

```js
class Estudiante {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

//Creo una instancia del objeto "persona"
const persona = {
    saludar() { 
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
};

//Compongo al prototipo de "Estudiante" con la instancia de "persona", con el fin de darle el método .saludar()
Object.assign(Estudiante.prototype, persona);

const estudiante = new Estudiante('Danna');
estudiante.saludar();
```
## Mediador
Es un objeto que permite la comunicación entre diferentes componentes. Asi funcionan los `servicios` en React. 

```js
//Creo un objeto "Uber" que mis componentes usaran como servicio
class Uber {
    comunicar(conductor, mensaje) {
        console.log(`${Date.now()} [${conductor.nombre}]: ${mensaje}`);
    }
}

//Creo un objeto "Conductor" que será la plantilla para crear mis componentes
class Conductor {
    constructor(nombre, servicio) {
        this.nombre = nombre;
        this.servicio = servicio;
    }

    //Creo un método "enviar" que depende del método "comunicar" del servicio
    enviar(mensaje) {
        this.servicio.comunicar(this, mensaje);
    }
}

const servicio = new Uber();

const conductor1 = new Conductor('Michael Schumacher', servicio);
const conductor2 = new Conductor('Ayrton Sena', servicio);

conductor1.enviar('Estoy disponible');
conductor2.enviar('Estoy ocupado');
```