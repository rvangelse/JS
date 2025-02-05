//**HTTP (Hypertext Transfer Protocol**

//**************************************************************************************************************************************************************************/

//Método GET en JavaScript (Envia una peticion a un servidor)

//fetch (Sirve para pedirle informacion a alguna API y poder inyectarla en el DOM)
fetch("https://jsonplaceholder.typicode.com/posts") //Esta API nos regresa informacion fake
  .then((response) => response.json()) //Convierte la respuesta en JSON
  .then((data) => console.log(data)); //Imprime la respuesta