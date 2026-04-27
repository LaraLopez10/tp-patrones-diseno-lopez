// Modelo
function obtenerDatos() {
  return ["Admin", "Editor", "Cliente"];
}

// Controlador
function filtrarDatos(datos) {
  return datos.filter(u => u !== "Admin");

}

// Vista
function mostrarDatos(datos) {
  datos.forEach(d => console.log(d));
}

const datos = obtenerDatos();
const filtrados = filtrarDatos(datos);
mostrarDatos(filtrados);
