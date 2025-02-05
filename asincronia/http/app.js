//**HTTP (Hypertext Transfer Protocol**

//**************************************************************************************************************************************************************************/

//Método GET en JavaScript (Envia una peticion a un servidor, espero una respuesta)

//fetch (Sirve para pedirle informacion a alguna API y poder inyectarla en el DOM)
fetch("https://jsonplaceholder.typicode.com/posts") //Esta API nos regresa informacion fake
  .then((response) => response.json()) //Convierte la respuesta en JSON
  .then((data) => console.log(data)); //Imprime la respuesta

//Relaciono las etiquetas del HTML (index.html) con elementos de JS
const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("#posts-container");  

//Funcion que envia peticiones HTTP
function sendHTTPRequest(method, url, data){
   return fetch(url,{
      method: method,
      body: JSON.stringify(data), //Enviamos un JSON en la peticion
      headers: {
         'Content-Type': 'application/json' //Indicamos que el cuerpo de la peticion es un JSON
      }, //Todo hasta aca es la peticion
   }).then((response) => {return response.json()}); //Obtenemos la respuesta en JSON
}

async function fetchPosts(){
   const responseData = await
   sendHTTPRequest("GET","https://jsonplaceholder.typicode.com/posts");
   console.log(responseData);
   const listOfPosts = responseData; //Guardo la respuesta en un array
   for (const post of listOfPosts) { //Itero el array
      const postContainer = document.createElement("article"); //Creo un contenedor para cada elemento del array
      postContainer.id = post.id; //Le asigno el id del elemento
      postContainer.classList.add("post-item"); 
  
      const title = document.createElement("h2");
      title.textContent = post.title; //Extraigo el titulo de cada elemento
  
      const body = document.createElement("p");
      body.textContent = post.body; //Extraigo el contenido de cada elemento
  
      const button = document.createElement("button"); //Creo un boton
      button.textContent = "DELETE Content";

      //Le agrego al contenedor lo que extraje y cree
      postContainer.append(title);
      postContainer.append(body);
      postContainer.append(button);
  
      listElement.append(postContainer);
    }
}

fetchButton.addEventListener("click", fetchPosts); //Añado funcionalidad al boton "GET content"

//**************************************************************************************************************************************************************************/

//Método POST en JavaScript (Envia informacion a un servidor)


