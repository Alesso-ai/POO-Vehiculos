//Importamos todas las clases
import { Vehiculo } from "./vehiculo.js";
import { Furgoneta } from "./furgonetas.js";
import { Todoterrenos } from "./todotorrenos.js"

//Crear un contenedor para mostrar los resultados

const resultadoContenedor = document.createElement('div');
document.body.appendChild(resultadoContenedor);

//Funcion para mostrar datos
export function mostrarResultado(mensaje) {
    resultadoContenedor.innerHTML += `<p>${mensaje}</p>`;
}

//Muestra de un objeto de vehiculos
const vehiculo1 = new Vehiculo('Mercedes','AMG','Negro',2012,'3000');
mostrarResultado('--Vehiculos1--');
vehiculo1.mostrarDatos();
vehiculo1.arrancar();
vehiculo1.acelerar(200);
vehiculo1.frenar();