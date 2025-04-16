export function validarCorreo(correo){
    //Forma de un correo usando expresiones regulares
    const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patronCorreo.test(correo);
}