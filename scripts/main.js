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
mostrarResultado('<--Deportivo-->');
vehiculo1.mostrarDatos();
vehiculo1.arrancar();
vehiculo1.acelerar(200);
vehiculo1.frenar();

//Furgoneta 1
const furgoneta1 = new Furgoneta('Mercedes','VITO','Blanca',1999,'2000',8);
mostrarResultado('<--Furgoneta-->');
furgoneta1.mostrarDatos();
furgoneta1.arrancar();
furgoneta1.acelerar(120);
furgoneta1.frenar();

console.log(furgoneta1.marca);

//Todoterreno
const todoterreno1 = new Todoterrenos('Mercedes','Gwagone','Azul',2000,'2000',)
todoterreno1.mostrarDatos();
mostrarResultado('<br/> Traccion: ' + todoterreno1.traccion);
todoterreno1.arrancar();
todoterreno1.acelerar(150);
todoterreno1.frenar();