//Carga de Noticias
const contenedor = document.getElementById("contenedor-noticias");
if(contenedor){
  fetch("../json/news.json")
    .then(res => res.json())
    .then(noticias => {
      noticias.forEach(noticia => {
        const div = document.createElement("div");
        div.classList.add("noticia");
        div.innerHTML = `
          <h2>${noticia.titulo}</h2>
          <p><strong>${noticia.fecha}</strong></p>
          <p>${noticia.contenido}</p>
          <hr>
        `;
        contenedor.appendChild(div);
      });
    })
    .catch(error => {
      contenedor.innerHTML = "No se pudieron cargar las noticias 😢";
      console.error(error);
    });
}