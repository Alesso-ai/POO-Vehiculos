// Lo primero que hay que hacer es la clase Vehiculo
// Para hacer PRIVADOS los atributos, se utiliza # antes del nombre del atributo
// Extendemos la clase con extends

export class Vehiculo {
  #marca;
  #modelo;
  #color;
  #fabricacion;
  #cilindrada;

  // Constructor por parámetros
  constructor(marca, modelo, color, fabricacion, cilindrada) {
    // Palabra reservada this para los atributos de Vehiculo
    this.#marca = marca;
    this.#modelo = modelo;
    this.#color = color;
    this.#fabricacion = fabricacion
    this.#cilindrada = cilindrada;
  }

  // Método para mostrar datos
  mostrarDatos() {
    // Variable datos mediante template literal
    const datos = `La marca es -> ${this.#marca}
            <br />
            El modelo es -> ${this.#modelo}
            <br/>
            Su color es -> ${this.#color}
            <br/>
            Se fabricó en el año -> ${this.#fabricacion}
            <br/>
            Tiene una cilindrada -> ${this.#cilindrada}
        `;
    // Llamar a la función mostrarResultado definida en el main.js (supongo que está definida en otro lugar)
    mostrarResultado(`<p>${datos}</p>`);
  }

  //Metodos del vehiculo, de lo que hace , acelera arranca para etc..
  // Método para acelerar
  acelerar(velocidad) {
    const mensaje = `<br/>Se ha acelerado hasta -> ${velocidad}`;
    //Llamamos a la funcion de mostrar resultado
    mostrarResultado(`<p>${datos}</p>`);
  }

  //Metodo arrancar
  arrancar() {
    const mensaje = `<br/>El coche ${this.#marca},${this.modelo},de color ${
      this.color
    } ha arrancado`;
    mostrarResultado(`<p>${datos}</p>`);
  }

  //Metodo frenar
  frenar() {
    const mensaje = `<br/>El coche ${this.#marca},${this.modelo},de color ${
      this.color
    } ha parado`;
    mostrarResultado(`<p>${datos}</p>`);
  }

  //Getters y setters
  get marca() {
    return this.#marca;
  }

  set marca(value) {
    this.#marca = value;
  }

  get modelo() {
    return this.#modelo;
  }

  set modelo(value) {
    this.#modelo = value;
  }

  get color() {
    return this.#color;
  }

  set color(value) {
    this.#color = value;
  }

  get fabricacion() {
    return this.#fabricacion;
  }

  set fabricacion(value) {
    this.#fabricacion = value;
  }

  get cilindrada() {
    return this.#cilindrada;
  }

  set cilindrada(value) {
    this.#cilindrada = value;
  }

}
