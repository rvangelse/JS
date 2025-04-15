class vehiculo {
    constructor(cantRuedas){
        this.cantRuedas = cantRuedas;
    }
    mostrarDetalles(){
        return `Este vehículo tiene ${this.cantRuedas} ruedas.`;
    }
}

class auto extends vehiculo {
    constructor(capacidad){
        super(4);
        this.capacidad = capacidad;
    }
    mostrarDetalles(){
        return super.mostrarDetalles() + ` Puede transportar ${this.capacidad} pasajeros.`;
    }
}

class bicicleta extends vehiculo {
    constructor(tipo){
        super(2);
        this.tipo = tipo;
    }
    mostrarDetalles(){
        return super.mostrarDetalles() + ` Es una bicicleta de tipo ${this.tipo}.`;
    }
}

let auto5 = new auto(5);
let biciMontaña = new bicicleta("Montaña");

console.log(auto5.mostrarDetalles());
console.log(biciMontaña.mostrarDetalles());