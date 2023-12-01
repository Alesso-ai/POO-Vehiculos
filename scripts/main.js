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

//Guardar unicamente en el LccalStorage un atributo en este caso la marca de una furgoneta
 
localStorage.setItem("marca furgoneta", furgoneta1.marca)

//Todoterreno
const todoterreno1 = new Todoterrenos('Mercedes','Gwagone','Azul',2000,'2000','Trasera')
todoterreno1.mostrarDatos();
mostrarResultado('<br/> Traccion: ' + todoterreno1.traccion);
todoterreno1.arrancar();
todoterreno1.acelerar(150);
todoterreno1.frenar();

//Variable de tipo Object de un objeto vehiculo

const vehiculoObject = {
    marca: 'Mercedes',
    modelo: 'AMG',
    color: 'Negro',
    fabricacion: 2012,
    cilindrada:'3000'
}

//Almacenar datos - Guardar el JSON en el LOcalStorage
localStorage.setItem("vehiculo",JSON.stringify(vehiculoObject));

//Recuperar datos- Mostrar el object en consola del JSON que hemos guardado en el LocalStorage

console.log(JSON.parse(localStorage.getItem("vehiculo")));

//Generar variable tipo object con POO
const todoterrenoObject = {
    marca: "Mercedes",
    modelo: "Gwagone",
    color:"Azul",
    fabricacion: 2000,
    traccion: "Trasera"
}

//Almacenar los datos en LocalStorage mediante un bucle

for(let key in todoterrenoObject){
    //hasOwnProperty lo utilizamos para almacenar el nombre de la propiedad de cada objeto

    if(todoterrenoObject.hasOwnProperty(key)){
        localStorage.setItem(key,todoterrenoObject[key]);
    }

}

//Eliminar un elemento del localStorage

localStorage.removeItem('color');
localStorage.removeItem('marca');

//Quitar todo del tiron
localStorage.clear();