/* Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseña
2. El sistema debe ser capaz de validar si el usuario y contraseña ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline. */

//Defino un array de objetos que usare como base de datos
const baseDeDatos = [
    {
      usuario: "rvangelse",
      contraseña: "123",
    },
    {
      usuario: "jdoe",
      contraseña: "456",
    }
  ];

//Defino otro array de objetos que usare como linea de tiempo
  const posts = [
    {
      usuario: "Angel",
      post: "Me encanta Javascript!",
    },
    {
      usuario: "Andres",
      post: "No quiero trabajar",
    }
  ];

  //OJO: Use este comando "npm install prompt-sync" para instalar el paquete que me permitio agregar inputs.
  const input = require("prompt-sync")({ sigint: true });

  const usuario = input("Usuario: ");
  const contraseña = input("Contraseña: ");
  
  //Funcion que verifica si un usuario y contraseña existen en la base de datos
  function usuarioExistente(usuario, contraseña) {
    for (let i = 0; i < baseDeDatos.length; i++) {
      if (
        baseDeDatos[i].usuario === usuario &&
        baseDeDatos[i].contraseña === contraseña
      ) {
        return true;
      }
    }
    return false;
  }
  
  function inicioSesion(usuario, contraseña) {
    if (usuarioExistente(usuario, contraseña)) {
      console.log(`¡Bienvenido a tu cuenta ${usuario}!`);
      console.log(posts);
    } else {
      console.log("Usuario o contraseña incorrectos!");
    }
  }
  
  inicioSesion(usuario, contraseña);


