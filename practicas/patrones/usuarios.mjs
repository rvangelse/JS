// Definición del módulo de usuarios
const usuarios = [];
// Función para agregar un usuario al módulo
export function agregar(nombre) {
    usuarios.push(nombre);
    console.log(`Usuario '${nombre}' agregado.`);
}

// Función para mostrar todos los usuarios en el módulo
export function mostrar() {
    console.log('Lista de usuarios:');
    usuarios.forEach(usuario => console.log(usuario));
}
