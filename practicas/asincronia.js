// Función para obtener datos de una API
async function obtenerDatosDeAPI() {
    try {
        console.log('Iniciando solicitud a la API...');
        // Realizamos la solicitud a la API 
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        // Si la respuesta no es correcta, lanzamos un error
        if (!response.ok) {
            throw new Error('La respuesta de la red no fue correcta');
        }

        // Convertimos la respuesta a formato JSON
        const data = await response.json();

        // Devolvemos los datos obtenidos
        return data;
    } catch (error) {
        // Manejamos cualquier error en la solicitud a la API
        console.error('Hubo un problema con la solicitud:', error);
        return null;
    }
}

// Función para mostrar datos después de un tiempo
async function mostrarDatosDespuesDeTiempo() {
    const tiempoEspera = 3000; 

    // Obtenemos datos de la API
    const datos = await obtenerDatosDeAPI();

    if (datos) {
        console.log(`Esperando ${tiempoEspera / 1000} segundos para mostrar los datos...`);

        setTimeout(() => {
            console.log('Datos después del tiempo de espera:', datos);
        }, tiempoEspera);
    }
}

mostrarDatosDespuesDeTiempo();