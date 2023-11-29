import { Vehiculo } from "./vehiculo.js";

export class Todoterrenos extends Vehiculo {
  #traccion;

  constructor(marca, modelo, color, fabricacion, cilidandra, traccion) {
    super(marca, modelo, color, fabricacion, cilindrada);
    this.#traccion = traccion;
  }

  //Getters y setters de pasajeros
  get traccion() {
    return this.#traccion;
  }

  set traccion(value) {
    this.#traccion = value;
  }

  
}
