// Extendemos de la clase padre, por eso es Herencia
import { Vehiculo } from "./vehiculo.js";

export class Furgoneta extends Vehiculo {
    #pasajeros;

    // Con este constructor nos ahorramos los métodos de vehículos y atributos
    constructor(marca, modelo, color, fabricacion, cilindrada, pasajeros) {
        super(marca, modelo, color, fabricacion, cilindrada);
        this.#pasajeros = pasajeros;
    }

    //Getters y setters de pasajeros
    get pasajeros() {
        return this.#pasajeros;
    }

    set pasajeros(value) {
        this.#pasajeros = value;
    }
}
