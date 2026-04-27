// Modelo
function obtenerDatos() {
  return ["manzana", "banana", "pera"];
}

// Controlador
function filtrarDatos(datos) {
  return datos.filter(d => d !== "banana");
}

// Vista
function mostrarDatos(datos) {
  datos.forEach(d => console.log(d));
}

const datos = obtenerDatos();
const filtrados = filtrarDatos(datos);
mostrarDatos(filtrados);
