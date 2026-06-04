const contenedor = document.getElementById("noticias");

function cargarNoticias() {

    contenedor.innerHTML = "<h3>Cargando noticias...</h3>";

    fetch("https://api.spaceflightnewsapi.net/v4/articles/?limit=10")

    .then(respuesta => respuesta.json())

    .then(datos => {

        contenedor.innerHTML = "";

        datos.results.forEach(noticia => {

            contenedor.innerHTML += `
            <div class="noticia">
                <h2>${noticia.title}</h2>
                <p>${noticia.summary}</p>
                <a href="${noticia.url}" target="_blank">
                    Leer noticia completa
                </a>
            </div>
            `;
        });

    })

    .catch(error => {

        console.error(error);

        contenedor.innerHTML =
        "<h3>Error al cargar noticias.</h3>";

    });

}

cargarNoticias();
