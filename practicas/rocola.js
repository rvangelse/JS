/* 
    Este ejercicio consiste en crear una clase "Rocola" que simule el funcionamiento de una rocola. 
    Debe tener un método "play" que permita reproducir una canción aleatoria y que reciba un parámetro k, 
    que indique cuántas canciones se deben reproducir antes de que la canción vuelva a estar disponible. 
*/

class Rocola {
    constructor() {
        this.canciones = [
            'Smells like teen spirit',
            'Stairway to Heaven',
            'Light My Fire',
            'Nothing Else Matters',
            'Don\'t Cry',
            'Sweet Child O\' Mine',
            'Bohemian Rhapsody',
            'Hotel California',
        ];

        this.cola = [];
    }

    play(k) {
        if (this.cola.length === k) {
            let cancionVuelve = this.cola.shift();
            this.canciones.push(cancionVuelve);
        }

        if (this.canciones.length === 0) {
            return 'No hay canciones disponibles';
        }

        let indiceAleatorio = Math.floor(Math.random() * this.canciones.length);
        let cancion = this.canciones.splice(indiceAleatorio, 1)[0];
        this.cola.push(cancion);
        return cancion;
    }
}

let rocola = new Rocola();
console.log(rocola.play(2), rocola.cola, rocola.canciones);
console.log(rocola.play(2), rocola.cola, rocola.canciones);
