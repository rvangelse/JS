let datosValidos  = (nombre, email, mensaje) => {
    return nombre && email && mensaje;     
}

function enviarFormulario (nombre, email, mensaje) {
    if(datosValidos(nombre, email, mensaje)){
        console.log("¡Formulario enviado con éxito!");
    } else {
        console.log("Por favor, completa todos los campos.");
    }
}

const nombre = "Angel"
const email = "angel@gmail.com"
const mensaje = "Hola, mundo!"

enviarFormulario (nombre, email, mensaje);
